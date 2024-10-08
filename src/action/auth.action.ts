"use server";

import { lucia } from "@/libs/lucia";
import {
  registerType,
  registerSchema,
  loginType,
  loginSchema,
} from "@/schema/auth";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";

export async function registerAction(data: registerType) {
  const validatedData = registerSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      error: "Invalid data",
    };
  }

  const { name, username, email, password } = validatedData.data;

  const usernameExist = await prisma.user.findFirst({ where: { username } });
  const emailExist = await prisma.user.findFirst({ where: { email } });

  if (usernameExist) {
    return {
      error: true,
      message: "Username already exist!",
    };
  }
  if (emailExist) {
    return {
      error: true,
      message: "Email already registered!",
    };
  }

  const password_hash = await bcrypt.hash(password, 10);
  const userId = generateIdFromEntropySize(10);

  await prisma.user.create({
    data: {
      id: userId,
      name,
      username,
      email,
      bio: "no bio yet",
      avatarUrl: `https://ui-avatars.com/api/?name=${username}`,
      password: password_hash,
    },
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return {
    error: false,
    message: "Registered successfully",
  };
}

export async function loginAction(data: loginType) {
  const validatedData = loginSchema.safeParse(data);

  if (!validatedData.success) {
    throw Error("invalid fields!");
  }

  const { email, password } = validatedData.data;

  const userExist = await prisma.user.findFirst({ where: { email } });
  if (!userExist) {
    return {
      error: true,
      message: "Email unregistered!",
    };
  }

  const isCorrect = await bcrypt.compare(password, userExist.password);
  if (!isCorrect) {
    return {
      error: true,
      message: "Wrong password!",
    };
  }

  const session = await lucia.createSession(userExist.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return {
    error: false,
    message: "Welcome back!",
  };
}

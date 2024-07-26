"use server";

import { lucia } from "@/libs/lucia";
import { registerType, registerSchema } from "@/schema/auth";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";

export async function registerAction(data: registerType) {
  const validatedData = registerSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      error: "Invalid data",
    };
  }

  const { username, email, password } = validatedData.data;

  const usernameExist = await prisma.user.findFirst({ where: { username } });
  const emailExist = await prisma.user.findFirst({ where: { email } });

  if (usernameExist) {
    throw Error("username already exist");
    // return {
    //   error: "Username already exist!",
    // };
  }
  if (emailExist) {
    throw Error("email already exist");
    // return {
    //   error: "Email already registered!",
    // };
  }

  const password_hash = await bcrypt.hash(password, 10);
  const userId = generateIdFromEntropySize(10);

  await prisma.user.create({
    data: { id: userId, username, email, password: password_hash },
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}

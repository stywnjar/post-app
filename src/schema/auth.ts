import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password too short, min 8 chars!" }),
});

export type loginType = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3, { message: "Username must be at least 3 chars!" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 chars!" }),
  password: z.string().min(8, { message: "Password too short, min 8 chars!" }),
});

export type registerType = z.infer<typeof registerSchema>;

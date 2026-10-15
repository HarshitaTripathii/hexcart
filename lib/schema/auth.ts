import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("This is not a valid email"),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters" })
    .regex(/[0-9]/, { error: "Password must contain a number" }),
});

export const signupSchema = z
  .object({
    name: z.string().min(2, { error: "Name must be at least 2 characters" }),
    email: z.email("This is not a valid email"),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters" })
      .regex(/[0-9]/, { error: "Password must contain a number" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

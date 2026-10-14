import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("This is not a valid email"),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters" })
    .regex(/[0-9]/, { error: "Password must contain a number" }),
});


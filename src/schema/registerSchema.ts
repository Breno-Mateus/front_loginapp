import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "O nome precisa ter pelo menos 2 letras"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
});

export type RegisterData = z.infer<typeof registerSchema>;

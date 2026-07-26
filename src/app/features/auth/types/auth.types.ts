import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

export type LoginCredentials = z.infer<typeof loginSchema>;

import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Validação global de e-mail
export function validateEmail(email: string): string | null {
  if (!email) return "O e-mail é obrigatório.";
  // Regex simples e robusta para e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Digite um e-mail válido.";
  return null;
}

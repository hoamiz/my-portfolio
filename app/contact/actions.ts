"use server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Tên quá ngắn"),
  email: z.string().email("Email không hợp lệ"),
  message: z.string().min(10, "Message phải hơn 10 ký tự"),
});

export async function sendContact(data: FormData) {
  const values = {
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  };

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { error: parsed.error.format() };
  }

  await new Promise(r => setTimeout(r, 1200)); // fake delay

  return { success: true };
}

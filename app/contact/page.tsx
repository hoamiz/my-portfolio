"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const body = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Gửi email thành công!");
        (e.target as HTMLFormElement)?.reset();
      } else {
        toast.error("Gửi email thất bại.");
        console.error(result.error);
      }
    } catch (err) {
      toast.error("Có lỗi xảy ra.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Your name" className="w-full border p-3 rounded" required />
      <input name="email" type="email" placeholder="Your email" className="w-full border p-3 rounded" required />
      <textarea name="message" placeholder="Message..." className="w-full border p-3 rounded h-32" required />
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded text-white ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {loading ? "Đang gửi..." : "Gửi"}
      </button>
    </form>
  );
}

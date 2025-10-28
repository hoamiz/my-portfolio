import Link from "next/link";
import Button from "@/components/Button";
import ButtonDark from "@/components/ButtonDark";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="mt-2 text-gray-600">This is the About page.</p>
      <Button variant="primary">Đọc thêm</Button>
      <Button variant="secondary">Hủy</Button>
      <ButtonDark >Test Dark Mode</ButtonDark>
      <Link
        href="/"
        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
      >
        Go back to HomePage
      </Link>
    </main>
  );
}

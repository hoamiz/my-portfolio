import { NextResponse } from "next/server";

const posts = [
  {
    slug: "learn-nextjs",
    title: "Học Next.js cơ bản",
    content: "Next.js giúp xây dựng web app nhanh, mạnh và tối ưu SEO.",
  },
  {
    slug: "nextjs-isr",
    title: "Tìm hiểu Incremental Static Regeneration",
    content: "ISR cho phép cập nhật trang tĩnh mà không cần deploy lại.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}

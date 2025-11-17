import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import Comments from "./Comments";

interface Props {
    params: { slug: string };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = params;

    const post = await prisma.post.findUnique({
        where: { slug },
        include: {
            author: true,
        },
    });

    if (!post) return notFound();

    return (
        <article className="max-w-3xl mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="text-gray-500 text-sm mb-4">
                <p>
                    Tác giả: <span className="font-medium">{post.author?.name || "Ẩn danh"}</span>
                </p>
                <p>
                    Ngày tạo:{" "}
                    {new Date(post.createdAt).toLocaleDateString("vi-VN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    })}
                </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                {post.content}
                <Suspense fallback={
                    <div className="mt-6 space-y-2 animate-pulse">
                        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
                    </div>}>
                    <Comments />
                </Suspense>
            </div>
        </article>
    );
}

// Optional — SEO metadata
export async function generateMetadata({ params }: Props) {
    const post = await prisma.post.findUnique({
        where: { slug: params.slug },
    });

    if (!post)
        return {
            title: "Không tìm thấy bài viết",
        };

    return {
        title: post.title,
        description: post.content.slice(0, 120) + "...",
    };
}

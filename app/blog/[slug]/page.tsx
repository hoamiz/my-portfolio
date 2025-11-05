import { posts } from "@/content/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {post.date}
            </p>

            <article className="prose dark:prose-invert max-w-none">
                <p>✨ Đây là nội dung tạm của bài viết &quot;{post.title}&quot;.</p>
                <p>Nội dung markdown thật sẽ được parse ngày mai.</p>
            </article>
        </div>
    );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import Comments from "./Comments";
import LazyComments from "@/components/LazyComments";

// Generate static routes
export function generateStaticParams() {
    const dir = path.join(process.cwd(), "content/blog");
    const files = fs.readdirSync(dir);

    return files.map((file) => ({
        slug: file.replace(/\.mdx$/, "")
    }));
}
export const revalidate = 10; // ISR: refresh page sau 60s

async function getPost(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
        next: { revalidate: 60 },
    });
    return res.json();
}
// Generate SEO from MDX frontmatter
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
    if (!fs.existsSync(filePath)) return {};

    let { data } = matter(fs.readFileSync(filePath, "utf-8"));
    if (!data) data = await getPost(params.slug);
    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description || data.excerpt,
            images: data.coverImage ? [data.coverImage] : ["/og-image.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.description || data.excerpt,
        },
    };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);

    if (!fs.existsSync(filePath)) return notFound();

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    return (
        <article className="prose dark:prose-invert max-w-3xl mx-auto py-10">
            <h1>{data.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{data.date}</p>
            <div>{content}</div>
            <Suspense fallback={
                <div className="mt-6 space-y-2 animate-pulse">
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
                </div>}>
                <Comments />
                <LazyComments />
            </Suspense>
        </article>
    );
}

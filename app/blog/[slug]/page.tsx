import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Generate static routes
export function generateStaticParams() {
    const dir = path.join(process.cwd(), "content/blog");
    const files = fs.readdirSync(dir);

    return files.map((file) => ({
        slug: file.replace(/\.mdx$/, "")
    }));
}

// Generate SEO from MDX frontmatter
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
    if (!fs.existsSync(filePath)) return {};

    const { data } = matter(fs.readFileSync(filePath, "utf-8"));
    return {
        title: data.title,
        description: data.description || data.excerpt
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
        </article>
    );
}

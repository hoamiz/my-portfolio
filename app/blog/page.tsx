/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Suspense } from "react";
import { getPostsSlow } from "../api/fetchPosts/getPostsSlow";

export type PostMeta = {
  title?: string;
  date?: string;
  slug?: string;
  id?: string;
  body?: string;
};

export default async function BlogPage() {
  const postsFetch = await getPostsSlow();
  const postsDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(postsDir);
  console.log('xxxx-postsFetch', postsFetch);
  const posts: PostMeta[] = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      slug: file.replace(".mdx", ""),
    };
  });

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <Suspense fallback={<p>Đang tải comment...</p>}>
        {postsFetch.map((post: any) => (
          <article key={post.id} className="mb-4">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
        {posts.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-4 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
              <h2 className="text-xl font-medium">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </Suspense>
    </div>
  );
}
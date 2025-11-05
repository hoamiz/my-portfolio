import Link from "next/link";
import { posts } from "@/content/posts";

export default function BlogPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {post.date}
            </p>
            <p className="mt-1">{post.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export type PostMeta = {
  title: string;
  date: string;
  slug: string;
};

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(postsDir);

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

      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="p-4 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
            <h2 className="text-xl font-medium">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
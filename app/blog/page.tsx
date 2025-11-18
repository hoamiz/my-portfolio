import AddPostButton from "@/components/AddPostButton";
import { getPosts } from "@/lib/posts";
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts(); // chạy ở server

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <AddPostButton />
      </div>

      {posts.map(post => (
        <a
          key={post.id}
          href={`/blog/${post.slug}`}
          className="block p-4   hover:rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
        >
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm font-semibold text-gray-400">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </a>
      ))}
    </div>
  );
}

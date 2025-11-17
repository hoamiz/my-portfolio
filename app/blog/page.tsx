import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-6">📝 Blog</h1>

      {posts.length === 0 && (
        <p className="text-gray-500">Chưa có bài viết nào.</p>
      )}

      <ul className="space-y-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <li

              className="p-4 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>

              <p className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString('vi-VN')}
              </p>

              <p className="mt-2 text-gray-700 line-clamp-2">{post.content}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

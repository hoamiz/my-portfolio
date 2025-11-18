import { notFound } from "next/navigation";
import { getPost } from "@/lib/posts";
import Comments from "./Comments";
export const revalidate = 60;

interface Props {
    params: { slug: string };
}

export default async function BlogDetailPage({ params }: Props) {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }
    return (
        <article className="max-w-3xl mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-4">
                {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <div>{post.content}</div>
            <Comments />
        </article>
    );
}
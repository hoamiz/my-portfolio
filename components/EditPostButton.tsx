/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { updatePost } from "@/app/blog/actions";

export type Post = {
    id?: string;
    title: string;
    content: string;
    slug: string;
};

export default function EditPostButton({ post }: { post: Post }) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [slug, setSlug] = useState('');
    useEffect(() => {
        setTitle(post.title);
        setContent(post.content);
        setSlug(post.slug);
    }, [post]);
    if (!post) return null; // hoặc skeleton

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Edit Post
            </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Edit Post</DialogTitle>
                </DialogHeader>
                <form
                    action={async (post) => {
                        await updatePost(post);
                        setOpen(false)
                    }}
                    className="space-y-4"
                >
                    <input
                        name="title"
                        placeholder="Title"
                        className="w-full border p-2 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input
                        name="slug"
                        placeholder="slug-example"
                        className="w-full border p-2 rounded"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        required
                    />
                    <textarea
                        name="content"
                        placeholder="Post content..."
                        className="w-full border p-2 rounded h-32"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >Update Post</button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

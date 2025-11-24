/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { DialogHeader } from "./dialog";
import { updatePost } from "@/app/blog/actions";

export default function EditPostDialog({ post, onClose }: any) {
    console.log("xxxxx Editing post:", post);
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [slug, setSlug] = useState(post.slug);

    return (
        <DialogContent >
            <DialogHeader>
                <DialogTitle>Edit Post</DialogTitle>
            </DialogHeader>
            <form
                action={async (post) => {
                    await updatePost(post);
                    onClose(false)
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
    );
}

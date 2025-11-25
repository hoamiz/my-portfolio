/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { deletePost, updatePost } from "@/app/blog/actions";

export type Post = {
    id?: number;
    title: string;
    content: string;
    slug: string;
};

export default function DeletePostButton({ post }: { post: Post }) {
    const [id, setId] = useState<number | undefined>(undefined);
    const [isDelete, setIsDelete] = useState(false);

    useEffect(() => {
        setId(post.id ? Number(post.id) : undefined);
    }, [post]);
    if (!post) return null; // hoặc skeleton
    const handleDelete = async (isDelete: boolean) => {
        if (isDelete) {
            await deletePost(id as number);
        }
        setIsDelete(false);
    }
    return (
        <Dialog open={isDelete} onOpenChange={setIsDelete}>
            <DialogTrigger className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Delete Post
            </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <DialogTrigger className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={() => handleDelete(isDelete)}>Yes</DialogTrigger>
                <DialogTrigger className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700" onClick={() => setIsDelete(false)}>Cancel</DialogTrigger>
            </DialogContent>
        </Dialog>
    )
}

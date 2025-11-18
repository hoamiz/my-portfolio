"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { createPost } from "@/app/blog/actions"; // Adjust path as needed

export default function AddPostButton() {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add Post
            </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Add New Post</DialogTitle>
                </DialogHeader>
                <form
                    action={async (formData) => {
                        await createPost(formData);
                        setOpen(false)
                    }}
                    className="space-y-4"
                >
                    <input
                        name="title"
                        placeholder="Title"
                        className="w-full border p-2 rounded"
                        required
                    />
                    <input
                        name="slug"
                        placeholder="slug-example"
                        className="w-full border p-2 rounded"
                        required
                    />
                    <textarea
                        name="content"
                        placeholder="Post content..."
                        className="w-full border p-2 rounded h-32"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >Add Post</button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

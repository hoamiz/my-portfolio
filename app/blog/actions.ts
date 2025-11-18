"use server";

import { prisma } from "@/lib/prisma";

export async function createPost (dataForm: FormData) {
    const title = dataForm.get('title') as string;
    const content = dataForm.get('content') as string;
    const slug = dataForm.get('slug') as string;    
    await prisma.post.create({
        data: {
            title,
            content,
            slug,
        },
    });
}
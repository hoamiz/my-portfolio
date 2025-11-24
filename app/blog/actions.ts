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
export async function updatePost(dataForm: FormData) {
  const title = dataForm.get("title") as string;
  const content = dataForm.get("content") as string;
  const slug = dataForm.get("slug") as string;
  const idStr = dataForm.get("id") as string;

  if (!idStr) throw new Error("Missing post id");

  const id = Number(idStr);

  const updatedPost = await prisma.post.update({
    where: { id },
    data: {
      title,
      content,
      slug,
    },
  });

  return updatedPost;
}

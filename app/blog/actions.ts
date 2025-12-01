"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(dataForm: FormData) {
  const title = dataForm.get('title') as string;
  const content = dataForm.get('content') as string;
  const slug = dataForm.get('slug') as string;
  if (!title || !slug || !content) {
    throw new Error("Missing fields");
  }

  if (slug.includes(" ")) {
    throw new Error("Slug cannot contain spaces");
  }
  await prisma.post.create({
    data: {
      title,
      content,
      slug,
    },
  });
  revalidateTag("posts");

}
export async function updatePost(dataForm: FormData, id: number) {
  const title = dataForm.get("title") as string;
  const content = dataForm.get("content") as string;
  const slug = dataForm.get("slug") as string;

  if (!title || !slug || !content) {
    throw new Error("Missing fields");
  }

  if (slug.includes(" ")) {
    throw new Error("Slug cannot contain spaces");
  }

  if (!id) throw new Error("Missing post id");

  await prisma.post.update({
    where: { id },
    data: {
      title,
      content,
      slug,
    },
  });

  revalidatePath("/blog");
}

export async function deletePost(id: number) {
  if (!id) throw new Error("Missing post id");
  await prisma.post.delete({
    where: { id },
  });
  revalidatePath("/blog");
  redirect("/blog");

}

import { cache } from "react";
import { prisma } from "./prisma";

export const getPosts = cache(async () => {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
});
export const getPost = cache(async (slug: string) => {
    return await prisma.post.findUnique({
        where: { slug },
    });
})
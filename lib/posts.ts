import { prisma } from "./prisma";

export async function getPosts() {
    return await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
    });
}
export async function getPost(slug: string) {
    return await prisma.post.findUnique({
        where: { slug },
    });
}
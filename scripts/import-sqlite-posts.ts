import { readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";

type ExportedPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  published: number | boolean;
  authorId: string | null;
  createdAt: number;
};

const prisma = new PrismaClient();

async function main() {
  const posts = JSON.parse(
    readFileSync("prisma/sqlite-export/posts.json", "utf8"),
  ) as ExportedPost[];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { id: post.id },
      update: {},
      create: {
        id: post.id,
        title: post.title,
        slug: post.slug,
        content: post.content,
        published: Boolean(post.published),
        authorId: post.authorId,
        createdAt: new Date(post.createdAt),
      },
    });
  }

  await prisma.$executeRawUnsafe(
    `SELECT setval(pg_get_serial_sequence('"Post"', 'id'), COALESCE((SELECT MAX(id) FROM "Post"), 1))`,
  );

  const count = await prisma.post.count();
  console.log(`Imported posts. Post count is ${count}.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

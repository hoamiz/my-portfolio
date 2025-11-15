import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany();
  console.log('Posts:', posts);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

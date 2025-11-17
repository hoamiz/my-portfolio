import {prisma} from '@/lib/prisma';
import { generateRandomPost } from '@/lib/generatePost';

async function main() {
  // tạo 1 user test
  const user = await prisma.user.create({
    data: {
      email: 'demo@example.com',
      name: 'Demo User',
    },
  });

  // tạo 10 bài viết
  for (let i = 0; i < 10; i++) {
    await prisma.post.create({
      data: generateRandomPost(user.id),
    });
  }

  console.log('Seed xong!');
}

main();

import { faker } from '@faker-js/faker';

export function generateRandomPost(authorId?: number) {
  const title = faker.lorem.sentence(6);
  const slug = faker.helpers.slugify(title).toLowerCase();

  return {
    title,
    slug,
    content: faker.lorem.paragraphs(3),
    published: faker.datatype.boolean(),
    authorId: authorId ?? null,
    createdAt: new Date(),
  };
}
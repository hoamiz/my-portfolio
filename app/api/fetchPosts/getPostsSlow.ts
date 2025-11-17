// lib/getPostsSlow.ts
type PostMeta = {
  id: number;
  title: string;
  body: string;
};

export async function getPostsSlow() {
  // simulate slow network (2s)
  await new Promise((r) => setTimeout(r, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    // tránh cache trong Next.js Server
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const posts = await res.json();

  return posts.map((p: PostMeta) => ({
    id: p.id,
    title: p.title,
    body: p.body,
  }));
}

import { describe, it, expect, vi, beforeEach, Mock } from "vitest";

// Mock Prisma before importing
vi.mock("@/lib/prisma", () => ({
  prisma: {
    post: {
      findMany: vi.fn(),
      create: vi.fn(),
    },
  },
}));

import { GET, POST } from "../route";
import { prisma } from "@/lib/prisma";

describe("/api/posts", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("GET", () => {
    it("returns posts ordered by createdAt desc", async () => {
      const mockPosts = [
        { id: 1, title: "Post 1", createdAt: "2026-04-23T17:09:41.134Z" },
        { id: 2, title: "Post 2", createdAt: "2026-04-23T17:09:41.134Z" },
      ];

      (prisma.post.findMany as Mock).mockResolvedValue(mockPosts);

      const response = await GET();
      const data = await response.json();

      expect(prisma.post.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" },
      });
      expect(data).toEqual(mockPosts);
    });
  });

  describe("POST", () => {
    it("creates a new post", async () => {
      const mockPost = { id: 1, title: "New Post", slug: "new-post", content: "Content" };
      (prisma.post.create as Mock).mockResolvedValue(mockPost);

      const request = new Request("http://localhost/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "New Post",
          slug: "new-post",
          content: "Content",
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(prisma.post.create).toHaveBeenCalledWith({
        data: {
          title: "New Post",
          slug: "new-post",
          content: "Content",
          authorId: null,
        },
      });
      expect(data).toEqual(mockPost);
    });
  });
});
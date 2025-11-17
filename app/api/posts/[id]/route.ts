/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest, context: any) {
  const { id } = await context.params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  return NextResponse.json(post);
}

export async function PUT(request: NextRequest, context: any) {
  const { id } = await context.params;
  const data = await request.json();

  const updated = await prisma.post.update({
    where: { id: Number(id) },
    data,
  });

  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest, context: any) {
  const { id } = await context.params;

  await prisma.post.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ message: "Post deleted" });
}

"use server";

import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function getSelf() {
  const token = cookies().get("token")?.value || null;
  if (!token) return null;
  const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: number };
  const user = await prisma.user.findUnique({
    where: { id: decoded.id.toString() },
  });
  return { user };
}

export async function setToken(id: string) {
  const token = jwt.sign({ id }, process.env.JWT_SECRET);
  cookies().set("token", token);
}

"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getUsers(where: Prisma.UserWhereInput = {}) {
  return await prisma.user.findMany({ where });
}

export async function createUser(user: Prisma.UserCreateInput) {
  return await prisma.user.create({ data: user });
}

export async function updateUser(id: string, user: Prisma.UserUpdateInput) {
  return await prisma.user.update({ where: { id }, data: user });
}

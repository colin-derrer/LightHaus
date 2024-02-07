"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getClients(where: Prisma.ClientWhereInput = {}) {
  return await prisma.client.findMany({ where });
}

export async function getClient(id: string) {
  return await prisma.client.findUnique({ where: { id } });
}

export async function addClient(client: Prisma.ClientCreateInput) {
  return await prisma.client.create({ data: client });
}

export async function updateClient(
  id: string,
  client: Prisma.ClientUpdateInput
) {
  return await prisma.client.update({ where: { id }, data: client });
}

"use server";

import { prisma } from "@/lib/prisma";
import { LeadReason, LeadSource, Prisma } from "@prisma/client";
import { fakerEN_US as faker } from "@faker-js/faker";
import { ClientPhase } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function resetDB() {
  await prisma.$transaction([
    prisma.client.deleteMany(),
    prisma.user.deleteMany(),
  ]);
}

const clientPhases = Object.values(ClientPhase);

export async function seedDB({
  usersToCreate,
  clientsPerUser,
}: {
  usersToCreate: number;
  clientsPerUser: number;
}) {
  const usersData = Array.from(
    { length: usersToCreate },
    (_, i) =>
      ({
        displayName: faker.person.fullName(),
        email: faker.internet.email(),
      } satisfies Prisma.UserCreateInput)
  );
  await prisma.user.createMany({ data: usersData });
  const users = await prisma.user.findMany();
  const clientsData = Array.from(
    { length: clientsPerUser * usersToCreate },
    (_, j) =>
      ({
        autogenDescription: faker.lorem.sentence(),
        estimatedAge: faker.number.int({ min: 1, max: 100 }),
        name: faker.person.fullName(),
        phase: faker.helpers.arrayElement(clientPhases),
        assignedUserId: faker.helpers.arrayElement(users.map((u) => u.id)),
        leadReasons: faker.helpers.arrayElements(Object.values(LeadReason), {
          min: 0,
          max: 3,
        }),
        phoneNumbers: [faker.phone.number()],
        leadSources: faker.helpers.arrayElements(Object.values(LeadSource), {
          min: 0,
          max: 3,
        }),
        emails: [faker.internet.email()],
        familyMembers: faker.number.int({ min: 0, max: 4 }),
      } satisfies Prisma.ClientUncheckedCreateInput)
  );

  await prisma.user.findMany({ include: { clients: true } });
  await prisma.client.createMany({ data: clientsData });
}

export async function devResetAndSeed() {
  await resetDB();
  await seedDB({ usersToCreate: 5, clientsPerUser: 15 });
  revalidatePath("/");
}

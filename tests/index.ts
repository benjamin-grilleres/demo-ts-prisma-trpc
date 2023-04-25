import { mockDeep } from "jest-mock-extended";
import { appRouter } from "@server/routers/_app";
import { createTRPCInnerContext } from "@server/trpc";
import { PrismaClient } from "@prisma/client";

export const prismaMock = mockDeep<PrismaClient>();

export const routerMock = appRouter.createCaller(
  createTRPCInnerContext({ prisma: prismaMock })
);

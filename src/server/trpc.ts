import { PrismaClient } from "@prisma/client";
import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import { prisma } from "./prisma";

type createTRPCInnerContextProps = {
  prisma?: PrismaClient;
};

export const createTRPCInnerContext = (
  opts: createTRPCInnerContextProps = {}
) => {
  return {
    prisma: opts?.prisma || prisma,
  };
};

export const createTRPCContext = () => {
  return createTRPCInnerContext();
};

const t = initTRPC
  .context<typeof createTRPCContext>()
  .meta<OpenApiMeta>()
  .create();

export const router = t.router;
export const procedure = t.procedure;

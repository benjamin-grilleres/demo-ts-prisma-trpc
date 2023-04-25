import { procedure } from "@server/trpc";
import { Prisma } from "@prisma/client";
import { z } from "zod";

const outputListProjects = z.object({
  items: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      city: z
        .object({
          name: z.string(),
        })
        .nullable(),
    })
  ),
});

export const defaultProjectSelect = Prisma.validator<Prisma.ProjectArgs>()({
  select: {
    id: true,
    name: true,
    city: {
      select: {
        id: true,
        name: true,
      },
    },
  },
});

export type ProjectSelectFindMany = Prisma.ProjectGetPayload<
  typeof defaultProjectSelect
>;

const listProjects = procedure
  .meta({
    openapi: {
      method: "GET",
      path: "/projects/list",
      tags: ["projects"],
      summary: "List all projects",
    },
  })
  .input(z.void())
  .output(outputListProjects)
  .query(async ({ ctx }) => {
    const items = await ctx.prisma.project.findMany({
      ...defaultProjectSelect,
    });

    return {
      items,
    };
  });

export default listProjects;

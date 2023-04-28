import { procedure } from "@/server/trpc";
import { Prisma } from "@prisma/client";
import { z } from "zod";

const outputListUsersWithProjects = z.object({
  users: z.array(
    z.object({
      id: z.number(),
      firstname: z.string(),
      projects: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
        })
      ),
    })
  ),
});

export const defaultUserSelect = Prisma.validator<Prisma.UserArgs>()({
  select: {
    id: true,
    firstname: true,
    projects: {
      select: {
        userId: true,
        projectId: true,
        joinAt: true,
        project: {
          select: {
            name: true,
            description: true,
          },
        },
      },
    },
  },
});

const listUsersWithProjects = procedure
  .meta({
    openapi: {
      method: "GET",
      path: "/users/list-with-projects",
      tags: ["users"],
      summary: "List all users with their projects",
    },
  })
  .input(z.void())
  .output(outputListUsersWithProjects)
  .query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany({
      ...defaultUserSelect,
    });

    const usersWithProjects = users.map((user) => {
      return {
        ...user,
        projects: user.projects.map((project) => project.project),
      };
    });

    return {
      users: usersWithProjects,
    };
  });

export default listUsersWithProjects;

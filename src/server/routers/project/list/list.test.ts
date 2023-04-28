import { Prisma, PrismaClient, Project } from "@prisma/client";
import { mockDeep } from "jest-mock-extended";
import { appRouter } from "@/server/routers/_app";
import { createTRPCInnerContext } from "@/server/trpc";
import { prismaMock, routerMock } from "@tests";
import { defaultProjectSelect, ProjectSelectFindMany } from "./list";

test("getAll test", async () => {
  type ProjectsWithCity = Prisma.ProjectGetPayload<typeof defaultProjectSelect>;

  const mockOutput: ProjectsWithCity[] = [
    {
      id: 1,
      name: "toto",
      city: null,
    },
  ];
  const expectedResult = {
    items: [
      {
        id: 1,
        name: "toto",
        city: null,
      },
    ],
  };

  prismaMock.project.findMany.mockReturnValueOnce(mockOutput);

  const result = await routerMock.projects.list();

  expect(result).toStrictEqual(expectedResult);
});

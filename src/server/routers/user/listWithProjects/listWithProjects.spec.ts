import { prismaMock, routerMock } from "@/tests";

test("listUsersWithProjects", async () => {
  const mockFindManyUsersOutput = [
    {
      id: 1,
      firstname: "benjamin",
      role: "Développeur",
      projects: [
        {
          userId: 1,
          projectId: 1,
          joinAt: "2022-10-10T00:00:00.000Z",
          project: {
            name: "my project",
          },
        },
      ],
    },
  ];

  const expectedResult = {
    users: [
      {
        id: 1,
        firstname: "benjamin",
        role: "Développeur",
        projects: [
          {
            name: "my project",
            joinAt: "2022-10-10T00:00:00.000Z",
          },
        ],
      },
    ],
  };

  prismaMock.user.findMany.mockResolvedValueOnce(mockFindManyUsersOutput);

  const result = await routerMock.users.listWithProjects();

  expect(result).toStrictEqual(expectedResult);
});

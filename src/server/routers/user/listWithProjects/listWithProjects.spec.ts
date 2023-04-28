import { prismaMock, routerMock } from "@/tests";

test("listUsersWithProjects", async () => {
  const mockFindManyUsersOutput = [
    {
      id: 1,
      firstname: "benjamin",
      projects: [
        {
          userId: 1,
          projectId: 1,
          joinAt: Date.now(),
          project: {
            name: "my project",
            description: "description",
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
        projects: [
          {
            name: "my project",
            description: "description",
          },
        ],
      },
    ],
  };

  prismaMock.user.findMany.mockResolvedValueOnce(mockFindManyUsersOutput);

  const result = await routerMock.users.listWithProjects();

  expect(result).toStrictEqual(expectedResult);
});

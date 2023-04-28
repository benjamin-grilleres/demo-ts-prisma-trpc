import { prismaMock, routerMock } from "@/tests";

test("listProjects", async () => {
  const mockOutput = [
    {
      id: 1,
      name: "name",
      description: "description",
      city: null,
      cityId: null, // TODO: why cityId is required
    },
  ];
  const expectedResult = {
    items: [
      {
        id: 1,
        name: "name",
        description: "description",
        city: null,
      },
    ],
  };

  prismaMock.project.findMany.mockResolvedValueOnce(mockOutput);

  const result = await routerMock.projects.list();

  expect(result).toStrictEqual(expectedResult);
});

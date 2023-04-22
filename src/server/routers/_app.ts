import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  hello: procedure
  .meta({
    openapi: {
      method: 'GET',
      path: '/hello/{text}',
      tags: ['hello'],
      summary: 'Say hello',
    },
  })
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .output(z.object({ greeting: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
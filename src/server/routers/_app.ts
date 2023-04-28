import { z } from "zod";
import { procedure, router } from "../trpc";
import { projectRouter } from "./project";
import { userRouter } from "./user";

export const appRouter = router({
  projects: projectRouter,
  users: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

import { router } from "@/server/trpc";
import { listWithProjects } from "./listWithProjects";

export const userRouter = router({
  listWithProjects,
});

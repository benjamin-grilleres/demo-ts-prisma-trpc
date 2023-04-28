import { router } from "@/server/trpc";
import { list } from "./list";

export const projectRouter = router({
  list,
});

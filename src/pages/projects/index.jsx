import { trpc } from "@/utils/trpc";
import { cssModulesClasses } from "@/utils/styles";
import styles from "./ProjectsPage.module.scss";

export default function ProjectsPage() {
  const { data: { items } = {}, isLoading } = trpc.projects.list.useQuery();
  const clss = cssModulesClasses(styles);

  const classes = {
    root: clss("page"),
  };
  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p className={classes.root}>hello</p>
      <p>{items.map(({ name }) => name)}</p>
    </div>
  );
}

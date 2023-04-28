import { trpc } from "@/utils/trpc";
import { cssModulesClasses } from "@/utils/styles";
import { Title } from "@/components/Title";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import styles from "./ProjectsPage.module.scss";

export default function ProjectsPage() {
  const { data: { items: projects } = {}, isLoading } =
    trpc.projects.list.useQuery();

  const clss = cssModulesClasses(styles);

  const classes = {
    root: clss("prefix-projects-page"),
    title: clss("prefix-projects-page__title"),
  };

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <Container className={classes.root}>
      <Title className={classes.title} is="h1" lg>
        Liste des projets
      </Title>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {projects.map((project) => (
          <li key={project.name} className="relative">
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

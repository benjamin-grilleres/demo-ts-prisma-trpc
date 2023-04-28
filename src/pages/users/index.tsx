import { trpc } from "@/utils/trpc";
import { cssModulesClasses } from "@/utils/styles";
import { Title } from "@/components/Title";
import { Container } from "@/components/Container";
import styles from "./UsersPage.module.scss";
import { UserCard } from "@/components/UserCard";

export default function UsersPage() {
  const { data: { users } = {} } = trpc.users.listWithProjects.useQuery();

  const clss = cssModulesClasses(styles);

  const classes = {
    root: clss("prefix-users-page"),
    title: clss("prefix-users-page__title"),
  };

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <Container className={classes.root}>
      <Title className={classes.title} is="h1" lg>
        Liste des utilisateurs
      </Title>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </Container>
  );
}

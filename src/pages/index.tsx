import { ROUTE_URLS } from '@/constants/routes';
import { trpc } from '@/utils/trpc';
import Link from 'next/link';
import Container from '@mui/material/Container';

export default function IndexPage() {
  return (
    <Container maxWidth="sm">
      <h1>Démo gouv</h1>
      <Link href={ROUTE_URLS.PROJECTS}>Accéder à la liste des projets</Link>
    </Container>
  );
}
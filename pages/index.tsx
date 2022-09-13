import { Link, Button } from '@mui/material';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout title="Alboom!">
      <Link href="/users">
        <Button>Go to user list</Button>
      </Link>
    </MainLayout>
  );
}

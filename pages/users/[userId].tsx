import { Button } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { User } from '../../types/user';

type UserPageProps = {
  user: User;
};

const User: NextPage<UserPageProps> = ({ user }) => {
  const router = useRouter();

  return (
    <MainLayout title="User page!">
      <div>Username: {user.name}</div>
      <Button onClick={() => router.push({ pathname: '/albums', query: { userId: user.id } })}>User albums</Button>
    </MainLayout>
  );
};

export default User;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const user: User = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`).then((res) => res.json());
  return user
    ? {
        props: { user },
      }
    : {
        notFound: true,
      };
};

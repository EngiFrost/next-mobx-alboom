import { Button, Card } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { User } from '../../types/user';
import styles from '../../styles/User.module.scss';

type UserPageProps = {
  user: User;
};

const User: NextPage<UserPageProps> = ({ user }) => {
  const router = useRouter();

  const clickHandler = () => router.push({ pathname: '/albums', query: { userId: user.id } });

  return (
    <MainLayout title="User page!">
      <Card className={styles.userCard}>
        <div className={styles.userInfo}>
          {makeRow('name', user.name)}
          {makeRow('username', user.username)}
          {makeRow('email', user.email)}
          {makeRow('phone', user.phone)}
          {makeRow('website', user.website)}
          {makeRow('company', user.name)}
          {makeRow('address', `${user.address.city}, ${user.address.street}, ${user.address.suite}`)}
        </div>

        <Button className={styles.btn} onClick={clickHandler}>
          User albums
        </Button>
      </Card>
    </MainLayout>
  );
};

export default User;

// TODO: handle users/91 -- ERROR!
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

const makeRow = (title: string, content: string) => {
  return (
    <div>
      <span className={styles.rowTitle}>{title}</span>
      {`: ${content}`}
    </div>
  );
};

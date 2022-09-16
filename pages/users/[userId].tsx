import { GetServerSideProps, NextPage } from 'next';
import { User } from '../../types/user';

type UserPageProps = {
  user: User
}

const User: NextPage<UserPageProps> = ({ user }) => {
  return <div>Username: {user.name}</div>;
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

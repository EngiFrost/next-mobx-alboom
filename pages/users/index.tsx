import { GetStaticProps } from 'next';
import React from 'react';
import UserList from '../../components/UserList';
import MainLayout from '../../layouts/MainLayout';
import { User } from '../../types/user';

const UsersPage = ({ users }) => {
  return (
    <MainLayout title="Users page!">
      <UserList users={users} />
    </MainLayout>
  );
};

export default UsersPage;

export const getStaticProps: GetStaticProps = async () => {
  const users: User[] = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
  return {
    props: { users },
  };
};

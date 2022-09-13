import React from 'react';
import UserList from '../../components/UserList';
import MainLayout from '../../layouts/MainLayout';

const UsersPage = () => {
  return (
    <MainLayout title='Users page!'>
      <UserList />
    </MainLayout>
  );
};

export default UsersPage;

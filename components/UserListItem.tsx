import { useRouter } from 'next/router';
import React from 'react';
import { User } from '../types/user';

type UserListItemProps = {
  user: User;
};

const UserListItem = ({ user }: UserListItemProps) => {
  const router = useRouter();

  return <div onClick={() => router.push(`/users/${user.id}`)}>UserListItem {user.id}</div>;
};

export default UserListItem;

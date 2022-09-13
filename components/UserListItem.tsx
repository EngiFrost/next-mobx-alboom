import React from 'react';
import { User } from '../types/user';

type UserListItemProps = {
  user: User;
};

const UserListItem = ({ user }: UserListItemProps) => {
  return <div>UserListItem {user.id}</div>;
};

export default UserListItem;

import { useEffect, useState } from 'react';
import styles from '../styles/UserList.module.scss';
import { User } from '../types/user';
import UserListItem from './UserListItem';

// TODO: Move to SSG: getStaticProps
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
  console.log(response);
  return response;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    // NOTE: the right way to use async in useEffect
    (async () => {
      const users = await fetchUsers();
      setUsers(users);
    })();
  }, []);

  if (!users.length) {
    return <div className={styles.empty}>No users fetched</div>;
  }

  return (
    <div className={styles.list}>
      {users.map((user, idx) => (
        <UserListItem user={user} key={idx} />
      ))}
    </div>
  );
};

export default UserList;

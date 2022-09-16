import { NextPage } from 'next';
import styles from '../styles/UserList.module.scss';
import { User } from '../types/user';
import UserListItem from './UserListItem';

type UserListProps = {
  users: User[];
};

const UserList: NextPage<UserListProps> = ({ users }) => {
  // const [users, setUsers] = useState<User[]>([]);
  // useEffect(() => {
  //   // NOTE: the right way to use async in useEffect
  //   (async () => {
  //     const users = await fetchUsers();
  //     setUsers(users);
  //   })();
  // }, []);

  return (
    <div className={styles.list}>
      {users.map((user, idx) => (
        <UserListItem user={user} key={idx} />
      ))}
    </div>
  );
};

export default UserList;

import { useRouter } from 'next/router';
import { User } from '../types/user';
import { Card } from '@mui/material';
import styles from '../styles/UserList.module.scss';

type UserListItemProps = {
  user: User;
};

const UserListItem = ({ user }: UserListItemProps) => {
  const router = useRouter();

  const cardClickHandler = () => router.push(`/users/${user.id}`);

  return (
    <Card className={styles.item} onClick={cardClickHandler}>
      <div className={styles.name}>{user.name}</div>
      {/* <IconButton onClick={(e) => e.stopPropagation()}> TODO: delete user action
        <Delete />
      </IconButton> */}
    </Card>
  );
};

export default UserListItem;

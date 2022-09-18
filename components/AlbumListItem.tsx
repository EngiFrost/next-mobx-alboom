import { useRouter } from 'next/router';
import { Album } from '../types/album';
import styles from '../styles/AlbumList.module.scss';
import { Card } from '@mui/material';

type AlbumListItemProps = {
  album: Album;
};

const AlbumListItem = ({ album }: AlbumListItemProps) => {
  const router = useRouter();

  const cardClickHandler = () => router.push(`/albums/${album.id}`);

  return (
    <Card className={styles.item} onClick={cardClickHandler}>
      <div className={styles.name}>{album.title}</div>
      {/* <IconButton onClick={(e) => e.stopPropagation()}> TODO: delete album action
        <Delete />
      </IconButton> */}
    </Card>
  );
};

export default AlbumListItem;

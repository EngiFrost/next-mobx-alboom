import { NextPage } from 'next';
import { Album } from '../types/album';
import AlbumListItem from './AlbumListItem';
import styles from '../styles/AlbumList.module.scss';

type AlbumListProps = {
  albums: Album[];
};

const AlbumList: NextPage<AlbumListProps> = ({ albums }) => {
  return (
    <div className={styles.list}>
      {albums.map((album, idx) => (
        <AlbumListItem album={album} key={idx} />
      ))}
    </div>
  );
};

export default AlbumList;

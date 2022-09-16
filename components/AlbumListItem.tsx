import { useRouter } from 'next/router';
import { Album } from '../types/album';

type AlbumListItemProps = {
  album: Album;
};

const AlbumListItem = ({ album }: AlbumListItemProps) => {
  const router = useRouter();

  return <div onClick={() => router.push(`/albums/${album.id}`)}>AlbumListItem {album.id}</div>;
};

export default AlbumListItem;

import { GetServerSideProps, NextPage } from 'next';
import MainLayout from '../../layouts/MainLayout';
import { Album } from '../../types/album';
import { makeRow } from '../../utils/makeRow';

type AlbumPageProps = {
  album: Album;
};

// TODO: album pics crud
// TODO: album crud

const Album: NextPage<AlbumPageProps> = ({ album }) => {
  return <MainLayout title="Album page!">{makeRow('album title', album.title)}</MainLayout>;
};

export default Album;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const album: Album = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`).then((res) => res.json());
  return album
    ? {
        props: { album },
      }
    : {
        notFound: true,
      };
};

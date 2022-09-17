import { GetServerSideProps, NextPage } from 'next';
import MainLayout from '../../layouts/MainLayout';
import { Album } from '../../types/album';

type AlbumPageProps = {
  album: Album;
};

// TODO: album pics crud
// TODO: album crud

const Album: NextPage<AlbumPageProps> = ({ album }) => {
  return (
    <MainLayout title="Album page!">
      <div>Album title: {album.title}</div>
    </MainLayout>
  );
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

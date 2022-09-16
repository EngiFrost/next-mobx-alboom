import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { Album } from '../../types/album';

type AlbumsPageProps = {
  albums: Album[];
};

const AlbumsPage: NextPage<AlbumsPageProps> = ({ albums }) => {
  const { query } = useRouter();

  if (!query?.userId) return <h2>No user was provided!</h2>;

  return (
    <MainLayout title="Albums page!">
      <h1>ALBUMS PAGE!!!</h1>
      {/* <AlbumList albums={albums} /> TODO: */}
    </MainLayout>
  );
};

export default AlbumsPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const albums: Album[] = await fetch(`https://jsonplaceholder.typicode.com/users/${query.userId}/albums`).then((res) => res.json());
  return {
    props: { albums },
  };
};

import Head from 'next/head';
import { ReactNode } from 'react';
import { Container } from '@mui/material';

type MainLayoutProps = {
  children: ReactNode;
  title?: string;
};
const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;

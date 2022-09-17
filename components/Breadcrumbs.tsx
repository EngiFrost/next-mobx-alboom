import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { breadcrumbsStore } from '../store/breadcrumbsStore';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import styles from '../styles/Breadcrumbs.module.scss'; //TODO:

const Breadcrumbs = observer(() => {
  const { asPath } = useRouter();
  breadcrumbsStore.updateBreadcrumbs(asPath);
  // return <div className={styles.wrapper}>There might be your breadcrumbs...</div>;
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {breadcrumbsStore.breadcrumbs.map((breadcrumb, idx) =>
        idx !== breadcrumbsStore.breadcrumbs.length - 1 ? (
          <Link underline="hover" color="inherit" href={breadcrumb.href} key={breadcrumb.href}>
            {breadcrumb.label}
          </Link>
        ) : (
          <Typography color="text.primary" key={breadcrumb.href}>
            {breadcrumb.label}
          </Typography>
        )
      )}
    </MUIBreadcrumbs>
  );
});

export default Breadcrumbs;

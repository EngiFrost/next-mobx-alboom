import { computed, makeObservable, observable } from 'mobx';

enum BreadcrumbLabels {
  MAIN = 'Main',
  USER_LIST = 'User list',
  USER = 'User',
  ALBUM_LIST = 'Album list',
  ALBUM = 'Album',
}

type Breadcrumb = {
  label: BreadcrumbLabels;
  href: string;
};

//FIXME: hydration issue!
class BreadcrumbsStore {
  userListHref: string = '';
  userHref: string = '';
  albumListHref: string = '';
  albumHref: string = '';

  get breadcrumbs(): Breadcrumb[] {
    // It is computed, baby!
    return [
      {
        label: BreadcrumbLabels.MAIN,
        href: '/',
      },
      {
        label: BreadcrumbLabels.USER_LIST,
        href: this.userListHref,
      },
      {
        label: BreadcrumbLabels.USER,
        href: this.userHref,
      },
      {
        label: BreadcrumbLabels.ALBUM_LIST,
        href: this.albumListHref,
      },
      {
        label: BreadcrumbLabels.ALBUM,
        href: this.albumHref,
      },
    ].filter((item) => item.href);
  }

  constructor() {
    makeObservable(this, {
      userListHref: observable,
      userHref: observable,
      albumListHref: observable,
      albumHref: observable,
      breadcrumbs: computed,
    });
  }

  updateBreadcrumbs = (path: string) => {
    // FIXME: this function sucks!
    const pathItems = path.split('/');
    pathItems.shift();

    if (pathItems.includes('users')) {
      this.setUserListHref('/users');

      if (pathItems.length === 2) {
        this.setUserHref('/' + pathItems.join('/'));
      }
    }

    if (pathItems[0].startsWith('albums?')) {
      // FIXME:
      this.setAlbumListHref('/' + pathItems[0]);
    }

    if (pathItems.includes('albums') && pathItems.length === 2) {
      this.setAlbumHref('/' + pathItems.join('/'));
    }
  };

  setUserListHref = (value: string) => {
    this.userListHref = value;
  };

  setUserHref = (value: string) => {
    this.userHref = value;
  };

  setAlbumListHref = (value: string) => {
    this.albumListHref = value;
  };

  setAlbumHref = (value: string) => {
    this.albumHref = value;
  };
}

export const breadcrumbsStore = new BreadcrumbsStore();

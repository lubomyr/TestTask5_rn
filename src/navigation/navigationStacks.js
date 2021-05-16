import {screenComponents} from './screenComponents';
import {tabComponents, bottomTabs} from './tabComponents';

export const loginStack = {
  stack: {
    children: [screenComponents.login],
  },
};

export const profileStack = {
  stack: {
    id: 'PROFILE_STACK_ID',
    children: [screenComponents.profile],
  },
};

export const postsStack = {
  stack: {
    id: 'POSTS_TAB',
    children: [tabComponents.posts],
    options: {
      bottomTab: bottomTabs.posts,
    },
  },
};

export const photosStack = {
  stack: {
    id: 'PHOTOS_TAB',
    children: [tabComponents.photos],
    options: {
      bottomTab: bottomTabs.photos,
    },
  },
};

export const usersStack = {
  stack: {
    id: 'USERS_TAB',
    children: [tabComponents.users],
    options: {
      bottomTab: bottomTabs.users,
    },
  },
};

export const homeStack = {
  bottomTabs: {
    id: 'BOTTOM_TABS_LAYOUT',
    children: [postsStack, photosStack, usersStack],
  },
};

export const postDetailsStack = {
  stack: {
    children: [screenComponents.postDetails],
  },
};

export const photoDetailsStack = {
  stack: {
    children: [screenComponents.photoDetails],
  },
};

export const userDetailsStack = {
  stack: {
    children: [screenComponents.userDetails],
  },
};

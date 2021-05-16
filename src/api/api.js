import {getUserFromStorage} from '../helpers/authHelpers';

const API_HOST = 'https://jsonplaceholder.typicode.com';

const getAuthUserId = async () => {
  const user = await getUserFromStorage();
  return user?.id;
};

export const getUsers = async params => {
  const url = `${API_HOST}/users${params ? params : ''}`;
  return await fetch(url).then(response => response.json());
};

export const getPosts = async () => {
  const userId = await getAuthUserId();
  const url = `${API_HOST}/posts?userId=${userId}`;
  return await fetch(url).then(response => response.json());
};

export const getPhotos = async (albumId = 1) => {
  const url = `${API_HOST}/photos?albumId=${albumId}`;
  return await fetch(url).then(response => response.json());
};

export const getPostById = async id => {
  const url = `${API_HOST}/posts/${id}`;
  return await fetch(url).then(response => response.json());
};

export const getUserById = async id => {
  const url = `${API_HOST}/users/${id}`;
  return await fetch(url).then(response => response.json());
};

export const getPhotoById = async id => {
  const url = `${API_HOST}/photos/${id}`;
  return await fetch(url).then(response => response.json());
};

export const getComments = async id => {
  const url = `${API_HOST}/posts/${id}/comments`;
  return await fetch(url).then(response => response.json());
};

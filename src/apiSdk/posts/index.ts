import axios from 'axios';
import queryString from 'query-string';
import { PostInterface, PostGetQueryInterface } from 'interfaces/post';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPosts = async (query?: PostGetQueryInterface): Promise<PaginatedInterface<PostInterface>> => {
  const response = await axios.get('/api/posts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPost = async (post: PostInterface) => {
  const response = await axios.post('/api/posts', post);
  return response.data;
};

export const updatePostById = async (id: string, post: PostInterface) => {
  const response = await axios.put(`/api/posts/${id}`, post);
  return response.data;
};

export const getPostById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/posts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePostById = async (id: string) => {
  const response = await axios.delete(`/api/posts/${id}`);
  return response.data;
};

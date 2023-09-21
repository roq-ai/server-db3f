import axios from 'axios';
import queryString from 'query-string';
import { PostTagInterface, PostTagGetQueryInterface } from 'interfaces/post-tag';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPostTags = async (query?: PostTagGetQueryInterface): Promise<PaginatedInterface<PostTagInterface>> => {
  const response = await axios.get('/api/post-tags', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPostTag = async (postTag: PostTagInterface) => {
  const response = await axios.post('/api/post-tags', postTag);
  return response.data;
};

export const updatePostTagById = async (id: string, postTag: PostTagInterface) => {
  const response = await axios.put(`/api/post-tags/${id}`, postTag);
  return response.data;
};

export const getPostTagById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/post-tags/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePostTagById = async (id: string) => {
  const response = await axios.delete(`/api/post-tags/${id}`);
  return response.data;
};

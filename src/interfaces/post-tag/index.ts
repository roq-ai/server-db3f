import { PostInterface } from 'interfaces/post';
import { TagInterface } from 'interfaces/tag';
import { GetQueryInterface } from 'interfaces';

export interface PostTagInterface {
  id?: string;
  post_id: string;
  tag_id: string;
  created_at?: any;
  updated_at?: any;

  post?: PostInterface;
  tag?: TagInterface;
  _count?: {};
}

export interface PostTagGetQueryInterface extends GetQueryInterface {
  id?: string;
  post_id?: string;
  tag_id?: string;
}

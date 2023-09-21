import { PostTagInterface } from 'interfaces/post-tag';
import { GetQueryInterface } from 'interfaces';

export interface TagInterface {
  id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  post_tag?: PostTagInterface[];

  _count?: {
    post_tag?: number;
  };
}

export interface TagGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}

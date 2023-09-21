import { CommentInterface } from 'interfaces/comment';
import { PostTagInterface } from 'interfaces/post-tag';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  title: string;
  content: string;
  user_id: string;
  likes?: number;
  dislikes?: number;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  post_tag?: PostTagInterface[];
  user?: UserInterface;
  _count?: {
    comment?: number;
    post_tag?: number;
  };
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  user_id?: string;
}

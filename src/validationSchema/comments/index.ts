import * as yup from 'yup';

export const commentValidationSchema = yup.object().shape({
  content: yup.string().required(),
  likes: yup.number().integer().nullable(),
  dislikes: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  post_id: yup.string().nullable().required(),
});

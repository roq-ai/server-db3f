import * as yup from 'yup';

export const postValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  likes: yup.number().integer().nullable(),
  dislikes: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});

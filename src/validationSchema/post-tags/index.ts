import * as yup from 'yup';

export const postTagValidationSchema = yup.object().shape({
  post_id: yup.string().nullable().required(),
  tag_id: yup.string().nullable().required(),
});

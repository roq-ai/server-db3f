import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createPostTag } from 'apiSdk/post-tags';
import { postTagValidationSchema } from 'validationSchema/post-tags';
import { PostInterface } from 'interfaces/post';
import { TagInterface } from 'interfaces/tag';
import { getPosts } from 'apiSdk/posts';
import { getTags } from 'apiSdk/tags';
import { PostTagInterface } from 'interfaces/post-tag';

function PostTagCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: PostTagInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createPostTag(values);
      resetForm();
      router.push('/post-tags');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<PostTagInterface>({
    initialValues: {
      post_id: (router.query.post_id as string) ?? null,
      tag_id: (router.query.tag_id as string) ?? null,
    },
    validationSchema: postTagValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Post Tags',
              link: '/post-tags',
            },
            {
              label: 'Create Post Tag',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Post Tag
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<PostInterface>
            formik={formik}
            name={'post_id'}
            label={'Select Post'}
            placeholder={'Select Post'}
            fetcher={getPosts}
            labelField={'title'}
          />
          <AsyncSelect<TagInterface>
            formik={formik}
            name={'tag_id'}
            label={'Select Tag'}
            placeholder={'Select Tag'}
            fetcher={getTags}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/post-tags')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'post_tag',
    operation: AccessOperationEnum.CREATE,
  }),
)(PostTagCreatePage);

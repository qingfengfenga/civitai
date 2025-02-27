import { GetResourceReviewPagedInput } from './../schema/resourceReview.schema';
import { GetByIdInput } from '~/server/schema/base.schema';
import {
  CreateResourceReviewInput,
  UpdateResourceReviewInput,
  UpsertResourceReviewInput,
} from '../schema/resourceReview.schema';
import { throwDbError } from '~/server/utils/errorHandling';
import {
  deleteResourceReview,
  upsertResourceReview,
  updateResourceReview,
  createResourceReview,
  getPagedResourceReviews,
} from '~/server/services/resourceReview.service';
import { Context } from '~/server/createContext';

export const upsertResourceReviewHandler = async ({
  input,
  ctx,
}: {
  input: UpsertResourceReviewInput;
  ctx: DeepNonNullable<Context>;
}) => {
  try {
    return await upsertResourceReview({ ...input, userId: ctx.user.id });
  } catch (error) {
    throw throwDbError(error);
  }
};

export const createResourceReviewHandler = async ({
  input,
  ctx,
}: {
  input: CreateResourceReviewInput;
  ctx: DeepNonNullable<Context>;
}) => {
  try {
    return await createResourceReview({ ...input, userId: ctx.user.id });
  } catch (error) {
    throw throwDbError(error);
  }
};

export const updateResourceReviewHandler = async ({
  input,
  ctx,
}: {
  input: UpdateResourceReviewInput;
  ctx: DeepNonNullable<Context>;
}) => {
  try {
    return await updateResourceReview({ ...input });
  } catch (error) {
    throw throwDbError(error);
  }
};

export const deleteResourceReviewHandler = async ({
  input,
  ctx,
}: {
  input: GetByIdInput;
  ctx: DeepNonNullable<Context>;
}) => {
  try {
    return await deleteResourceReview(input);
  } catch (error) {
    throw throwDbError(error);
  }
};

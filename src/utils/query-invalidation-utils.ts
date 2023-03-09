import { trpc } from '~/utils/trpc';

export async function invalidateModeratedContent(queryUtils: ReturnType<typeof trpc.useContext>) {
  await queryUtils.model.getAll.invalidate();
  await queryUtils.image.getGalleryImages.invalidate();
  await queryUtils.image.getGalleryImageDetail.invalidate();
  await queryUtils.image.getGalleryImagesInfinite.invalidate();
  // TODO Briant: Invalidate post queries
}

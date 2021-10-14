import { createImgNumber } from './mock-avatar-url.js';

export const mockAuthor = (index) => ({
  avatar: `img/avatars/user${  createImgNumber(index) }.png`,
});

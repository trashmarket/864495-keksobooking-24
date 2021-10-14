import { getAvatarUrl } from "./mock-avatar-url.js";

export const mockAuthor = (index)=>({
  avatar: getAvatarUrl(index),
})

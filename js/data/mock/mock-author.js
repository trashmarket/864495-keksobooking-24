import { getAvatarUrl } from "./mock-avatar-url";

export const mockAuthor = (index)=>({
  avatar: getAvatarUrl(index),
})

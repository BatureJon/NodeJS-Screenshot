import { v4 as uuidv4 } from 'uuid';

export const createUniqueName = (urlLink) => {
  const idSubstring = uuidv4().substring(0, 5);
  const stripUrl = urlLink.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
  const nameSubstring = stripUrl.split('.')[0]

  return `${idSubstring}_${nameSubstring}`;
};

import fs from 'fs';

export const fileMover = async (src, dest) => {
  fs.renameSync(src, dest);
};

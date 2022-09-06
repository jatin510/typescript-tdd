import { thumbnailMover } from './thumbnailMover';
import { fileMover } from './fileMover';

thumbnailMover({ fileMover, isGood: true, imageId: 'testing.png' }).then(() =>
  console.log('hello')
);

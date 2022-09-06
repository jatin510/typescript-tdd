import { thumbnailMover } from './thumbnailMover';

describe('thumbnail mover', () => {
  it('if given a imageId and an argument of good, move the image to a good directory', async () => {
    const imageId = 'my-image.jpg';
    const isGood = true;
    const fileMover = jest.fn();
    await thumbnailMover({ fileMover, imageId, isGood });
    expect(fileMover).toBeCalledWith(
      `./images/backlog/${imageId}`,
      `./images/good/${imageId}`
    );
  });

  it('if given a imageId and an argument of bad, move the image to a bad directory', async () => {
    const imageId = 'my-image.jpg';
    const isGood = false;
    const fileMover = jest.fn();
    await thumbnailMover({ fileMover, imageId, isGood });
    expect(fileMover).toBeCalledWith(
      `./images/backlog/${imageId}`,
      `./images/bad/${imageId}`
    );
  });
});

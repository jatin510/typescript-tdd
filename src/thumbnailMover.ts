export const thumbnailMover = async ({ fileMover, isGood, imageId }) => {
  const sourceLocation = `./images/backlog/${imageId}`;
  const rating = isGood ? 'good' : 'bad';
  const destinationLocation = `./images/${rating}/${imageId}`;

  await fileMover(sourceLocation, destinationLocation);
};

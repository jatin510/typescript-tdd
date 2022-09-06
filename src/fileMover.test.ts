import fs from 'fs';
import { fileMover } from './fileMover';

jest.mock('fs');

describe('fileMover', () => {
  beforeEach(() => {
    (fs.renameSync as jest.Mock).mockImplementation(() => null);
  });

  it('should try to move a file with node fs', async () => {
    const src = './source/a.jpeg';
    const dest = './destination/a.jpeg';

    await fileMover(src, dest);
    expect(fs.renameSync).toBeCalledWith(src, dest);
  });
});

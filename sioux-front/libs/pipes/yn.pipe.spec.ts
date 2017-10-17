import { YNPipe } from './yn.pipe';

describe('Pipe: yn', () => {
  let instance: YNPipe = null;

  beforeEach(() => {
    instance = new YNPipe();
  });

  it('should return a success badge', () => {
    const ret = instance.transform(true, null, null);
    expect(ret).toBe(`<span class="badge badge-success">Yes</span>`);
  });

  it('should return a error badge', () => {
    const ret = instance.transform(false, null, null);
    expect(ret).toBe(`<span class="badge badge-error">No</span>`);
  });
});

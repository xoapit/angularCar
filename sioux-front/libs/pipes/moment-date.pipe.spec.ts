import { MomentDatePipe } from './moment-date.pipe';

describe('Pipe: _date', () => {
  let instance: MomentDatePipe = null;
  const date = new Date(2017, 9, 17, 15, 35, 59);

  beforeEach(() => {
    instance = new MomentDatePipe();
  });

  it('should default format', () => {
    expect(instance.transform(date)).toBe(`2017-10-17 15:35`);
  });

  it('should return a custom format', () => {
    expect(instance.transform(date, 'YYYY/MM/DD')).toBe(`2017/10/17`);
  });

  it('should return a empty', () => {
    expect(instance.transform(null).length).toBe(0);
    expect(instance.transform(undefined).length).toBe(0);
  });
});

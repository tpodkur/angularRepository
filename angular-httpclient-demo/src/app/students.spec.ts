import { Students } from './students';

describe('Students', () => {
  it('should create an instance', () => {
    expect(new Students("fName", "lName", 0)).toBeTruthy();
  });
});

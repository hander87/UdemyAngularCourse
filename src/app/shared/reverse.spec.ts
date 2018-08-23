import { ReversePipe } from './reverse.pipe';

describe('UserComponent', () => {

  it('should reverse the phrase "Hello"', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('Hello')).toEqual('olleH');
  });

});

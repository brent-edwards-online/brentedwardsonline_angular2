import { BrentedwardsonlinePage } from './app.po';

describe('brentedwardsonline App', () => {
  let page: BrentedwardsonlinePage;

  beforeEach(() => {
    page = new BrentedwardsonlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

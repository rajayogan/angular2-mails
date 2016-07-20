import { Ang2emailPage } from './app.po';

describe('ang2email App', function() {
  let page: Ang2emailPage;

  beforeEach(() => {
    page = new Ang2emailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

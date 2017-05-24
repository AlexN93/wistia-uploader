import { WistiaUploaderPage } from './app.po';

describe('wistia-uploader App', () => {
  let page: WistiaUploaderPage;

  beforeEach(() => {
    page = new WistiaUploaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

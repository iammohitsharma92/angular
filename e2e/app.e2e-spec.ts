import { ImagesAlbumPage } from './app.po';

describe('images-album App', () => {
  let page: ImagesAlbumPage;

  beforeEach(() => {
    page = new ImagesAlbumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

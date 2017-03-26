import { RxstudioPage } from './app.po';

describe('rxstudio App', () => {
  let page: RxstudioPage;

  beforeEach(() => {
    page = new RxstudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('RX Studio');
  });
});

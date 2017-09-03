import { MoviesToTheMaxPage } from './app.po';

describe('movies-to-the-max App', () => {
  let page: MoviesToTheMaxPage;

  beforeEach(() => {
    page = new MoviesToTheMaxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { NewsitePage } from './app.po';

describe('newsite App', () => {
  let page: NewsitePage;

  beforeEach(() => {
    page = new NewsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

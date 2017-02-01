import { Angular2GithubProfileSearchPage } from './app.po';

describe('angular2-github-profile-search App', function() {
  let page: Angular2GithubProfileSearchPage;

  beforeEach(() => {
    page = new Angular2GithubProfileSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

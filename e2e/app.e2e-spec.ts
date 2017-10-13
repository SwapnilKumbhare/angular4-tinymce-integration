import { NgTinyPage } from './app.po';

describe('ng-tiny App', function() {
  let page: NgTinyPage;

  beforeEach(() => {
    page = new NgTinyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

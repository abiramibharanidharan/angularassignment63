import { AAssignment64Page } from './app.po';

describe('a-assignment64 App', function() {
  let page: AAssignment64Page;

  beforeEach(() => {
    page = new AAssignment64Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

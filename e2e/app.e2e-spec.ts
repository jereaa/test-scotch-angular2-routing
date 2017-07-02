import { ScotchAngular2RoutingPage } from './app.po';

describe('scotch-angular2-routing App', () => {
  let page: ScotchAngular2RoutingPage;

  beforeEach(() => {
    page = new ScotchAngular2RoutingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

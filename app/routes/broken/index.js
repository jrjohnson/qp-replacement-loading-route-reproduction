import Route from '@ember/routing/route';

export default class BrokenIndexRoute extends Route {
  model() {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 100);
    });
  }
}

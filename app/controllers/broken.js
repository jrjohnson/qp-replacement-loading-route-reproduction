import Controller from '@ember/controller';
import { action, set } from '@ember/object';

export default class BrokenController extends Controller {
  queryParams = [
    'first',
    'second',
  ];
  first = false;
  second = false;

  @action
  setFirst(value) {
    set(this, "first", value);
  }

  @action
  setSecond(value) {
    set(this, "second", value);
  }
}

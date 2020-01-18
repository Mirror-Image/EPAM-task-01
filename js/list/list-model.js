import {storage} from '../store.js'


export default class ListModel {
  constructor() {
    this.list = storage.list;
  }

  bindSort(callback) {
    this.sorted = callback;
  }

  _commit(list) {
    this.sorted(list);
    storage.list = list;
  }

  onSort(list) {
    let res = list.sort( (a, b) => a.likesAmount > b.likesAmount ? 1 : -1 );

    this._commit(res); // Check it out!
  }
}
import {storage} from '../store.js'


export default class LikeModel {
  constructor() {
    this.list = storage.list;
  }

  likeIncrement(id) {
    let currentLikesAmount = this.list[id].likesAmount;

    this.list[id].likesAmount = currentLikesAmount + 1;
    storage.list = this.list;
    console.log( storage.list );
  }
}
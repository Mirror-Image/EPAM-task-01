

class Store {
  constructor() {
    this._list = [
      {id: 0, imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ilya_pestov/128.jpg', likesAmount: 0},
      {id: 1, imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/elisabethkjaer/128.jpg', likesAmount: 2},
      {id: 2, imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/netonet_il/128.jpg', likesAmount: 0},
      {id: 3, imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/_scottburgess/128.jpg', likesAmount: 3},
      {id: 4, imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg', likesAmount: 0},
      {id: 5, imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ntfblog/128.jpg', likesAmount: 4},
    ]
  }

  set list(list) {
    this._list = list;
  }

  get list() {
    return this._list;
  }
}

export let storage = new Store();
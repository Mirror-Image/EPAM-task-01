class Store {
  constructor() {
    this._list = [
      {id: 0, imgSrc: `${faker.image.avatar()}`, likesAmount: 0},
      {id: 1, imgSrc: `${faker.image.avatar()}`, likesAmount: 2},
      {id: 2, imgSrc: `${faker.image.avatar()}`, likesAmount: 0},
      {id: 3, imgSrc: `${faker.image.avatar()}`, likesAmount: 3},
      {id: 4, imgSrc: `${faker.image.avatar()}`, likesAmount: 0},
      {id: 5, imgSrc: `${faker.image.avatar()}`, likesAmount: 4},
    ]
  }

  set list(list) {
    this._list = list;
  }

  // set item(id) {
  //   this._list.find( item => {
  //     item.id === id;
  //     item.likesAmount++;
  //   } )
  // }

  get list() {
    return this._list;
  }
}

export let storage = new Store;
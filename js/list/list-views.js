


export default class ListView {
  constructor(model) {
    this.model = model;
    this.app = document.querySelector('.wrapper');

    this.ul = document.createElement('ul');
    this.ul.classList.add('list');

    this.app.append(this.ul);

    this.listViewOnInit();
  }

  listViewOnInit() {
    console.log( 'List component initialized' );
    this.displayItems(this.model.list);
  }

  displayItems(list) {
    this.ul.innerHTML = '';
    Array.from(list).forEach(item => {
      this.li = document.createElement('li');
      this.li.classList.add('list__item', 'item');

      this.img = document.createElement('img');
      this.img.classList.add('item__img');

      this.li.id = `${item.id}`;
      this.img.src = `${item.imgSrc}`;

      this.ul.append(this.li);
      this.li.append(this.img);
    });
    console.log( 'List component rendered' );
  }

  displayItem(item) {
    console.log( item );
    let anchorElement = document.getElementById(`${item}`);
    console.log( anchorElement );
  }


}
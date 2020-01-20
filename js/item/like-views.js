import {observer} from "../observer.js";
import {storage} from "../store.js";


export default class LikeView {
  constructor(model) {
    this.model = model;
    this.anchor = document.querySelector('.list');

    this.likeViewOnInit();
  }

  likeViewOnInit() {
    console.log( 'Likes component initialized' );
    this.displayLikes(this.model.list);
  }

  displayLikes(list) {
    Array.from(list).forEach(item => {
      this.li = document.getElementById(`${item.id}`);

      this.i = document.createElement('i');
      this.i.classList.add('item__like-icon', 'far', 'fa-thumbs-up');

      this.span = document.createElement('span');
      this.span.classList.add('item__like-indicator');

      this.span.innerText = `(${item.likesAmount}) likes`;

      this.li.append(this.i, this.span);
    });
    console.log( 'Likes component rendered' );
  }

  bindLikeIncrement(handler) {

    this.anchor.addEventListener('click', function (event) {
      if (event.target.closest('.item__like-icon')) {
        const id = parseInt(event.target.parentElement.id);
        handler(id);
        observer.notify(storage.list, id);
      }
    });
  }
}
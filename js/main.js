import {listController} from "./list/list-index.js";
import {likeController} from "./item/like-index.js";



listController;
likeController;


/*let images = document.getElementsByClassName('item__image');
for (let i = 0; i < images.length; i++) {
  images[i].src = faker.image.avatar();
}

let container = document.getElementById('container');
let likeIcon = document.getElementsByClassName('item__like-icon');
let items = document.getElementsByClassName('item');
let likes = document.getElementsByClassName('item__like-count--common');

let modal = document.getElementById('modal');
let previous = document.getElementById('prev');
let next = document.getElementById('next');
let images1 = document.getElementsByClassName('item__image');
let modalLikes = document.getElementById('modal-like');
let modalImage = document.querySelector('.item__image--modal');

document.querySelector('.fa-times').addEventListener('click', function() {
  document.querySelector('.modal').classList.remove('active');
  renderLikes();
});

function renderLikes() {
  for (i = 0; i < items.length; i++) {
    if (modalImage.src == items[i].children[0].src) {

      items[i].children[2].children[0].innerHTML = modalLikes.innerHTML;
      let targetItem1 =  items[i].children[1];
      reRenderContainer(targetItem1);
      break;

    }
    
  }

 
}



container.addEventListener('click', function() {

  // for likes
  if (event.target.closest('.item__like-icon')) {

    let targetItem = event.target.closest('.item__like-icon');
    let targetCount = targetItem.parentElement.children[2].children[0];
    
    addLike(targetCount);
    reRenderContainer(targetItem);

    // for modal
  } else if (event.target.closest('.item__image')){

    let targetImage = event.target;
    let imageLikes = targetImage.parentElement.children[2].children[0].innerHTML;

    modalImage.src = targetImage.src;
    modalLikes.innerHTML = imageLikes;

    modal.classList.add('active');
  } 
  
})

modal.addEventListener('click', function() {

  if (event.target.closest('.item__like-icon')) {

    let targetItem = event.target.closest('.item__like-icon');
    let targetCount = targetItem.parentElement.children[2].children[0];
    
    addLike(targetCount);

  } 
})

function addLike(targetCount) {

  targetCount.innerHTML = Number(targetCount.innerHTML) + 1;
}

function reRenderContainer(targetItem) {
  console.log(targetItem);
  

  for (let i = 0; i < likes.length; i++) {

    if ( Number(targetItem.parentElement.children[2].children[0].innerHTML) > Number(likes[i].innerHTML) ) {
      (likes[i].parentElement.parentElement).before(targetItem.parentElement);
      break;

    }
  }
}

next.addEventListener('click', function() {

  for (i = 0; i < items.length; i++) {
    if (modalImage.src == items[i].children[0].src) {

      if ( i == items.length - 2 ) {
        modalImage.src = items[0].children[0].src;
        modalLikes.innerHTML = items[0].children[2].children[0].innerHTML;
      }

      modalImage.src = items[i + 1].children[0].src;
      modalLikes.innerHTML = items[i + 1].children[2].children[0].innerHTML;

    break;
    }
  }
})

prev.addEventListener('click', function() {
  for (i = 0; i < items.length; i++) {
    if (modalImage.src == items[i].children[0].src) {

      if ( i == 0 ) {
        modalImage.src = items[items.length - 2].children[0].src;
        modalLikes.innerHTML = items[items.length - 2].children[2].children[0].innerHTML;

      }

      modalImage.src = items[i - 1].children[0].src;
      modalLikes.innerHTML = items[i - 1].children[2].children[0].innerHTML;

    break;
    }
  }
})*/


   























export default class LikeController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindLikeIncrement(this.handleLikeIncrement);
  }

  handleLikeIncrement = id => {
    this.model.likeIncrement(id);
  }
}
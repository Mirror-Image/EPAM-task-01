import LikeModel from './like-model.js';
import LikeView from './like-views.js';
import LikeController from './like-controller.js';

const model = new LikeModel();
const view = new LikeView(model);
export const likeController = new LikeController(model, view);
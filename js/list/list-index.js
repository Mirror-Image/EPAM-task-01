import ListModel from './list-model.js';
import ListView from './list-views.js';
import ListController from './list-controller.js';
import {observer} from "../observer.js";


const model = new ListModel();
const view = new ListView(model);
export const listController = new ListController(model, view);

observer.subscribe((list, id) => {
  model.onSort(list);
  // view.displayItem(id);
});
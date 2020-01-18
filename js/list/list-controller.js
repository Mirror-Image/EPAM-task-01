


export default class ListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindSort(this.onListChanged);

    // this.view.bindAddTodo(this.handSortList);
  }

  onListChanged = list => {
    this.view.displayItems(list);
  }

  handSortList = list => {
    this.model.onSort(list);
  }
}
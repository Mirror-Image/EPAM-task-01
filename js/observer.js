class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

export const observer = new Observer();
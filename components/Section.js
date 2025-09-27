class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this.renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this.renderer(item);
      this.addItem(element);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}

export default Section;

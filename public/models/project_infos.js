class ProjectInfos {
  constructor(title) {
    this.title = title;
  }

  create() {
    this.container = createDiv();

    let titleElement = createElement('h1', this.title);
    this.container.child(titleElement);
  }

  show() {
    this.container.position(0, 0);
    if (windowWidth < windowHeight) {
      this.container.size(windowWidth, 2*windowHeight/5);
    } else {
      this.container.size(2*windowWidth/5, windowHeight);
    }
  }
}

class GalleryItem {
  constructor(x, y, title, imagePath, address, tooltip)  {
    this.pos = createVector(x, y);
    this.title = title;
    this.imagePath = imagePath;
    this.address = address;
    this.tooltip = tooltip;
  }

  draw() {
    let container, titleContainer, link, img, title, tooltip;

    link = createA(ADDRESS + this.address, '');
    link.class("link");

    container = createDiv();
    container.size(200, 240);
    container.class("container");

    img = createImg(this.imagePath, this.title);
    img.class("image");

    titleContainer = createDiv();
    titleContainer.size(200, 40);
    titleContainer.class("titleContainer");

    title = createP(this.title);
    title.class("title");

    if (this.tooltip) {
      tooltip = createSpan(this.title);
      tooltip.class("tooltip");
    }

    container.parent(link);
    container.child(img);
    container.child(titleContainer);
    titleContainer.child(title);
    title.child(tooltip);

    link.position(this.pos.x, this.pos.y);
  }
}

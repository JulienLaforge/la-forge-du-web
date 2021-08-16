class GalleryItem {
  constructor(x, y, title, imagePath, address)  {
    this.pos = createVector(x, y);
    this.title = title;
    this.imagePath = imagePath;
    this.address = address;
  }

  draw() {
    let container, titleContainer, link, img, title;

    link = createA('https://laforgeduweb.com' + this.address, '');
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
    title.class("title")

    container.parent(link);
    container.child(img);
    container.child(titleContainer);
    titleContainer.child(title);

    link.position(this.pos.x, this.pos.y);
  }
}

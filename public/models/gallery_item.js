class GalleryItem {
  constructor(pos)  {
    this.pos = pos;
    this.address = 'plop';
    this.title = 'plop';
    this.imagePath = 'images/gol_400x400.jpg';
  }

  draw() {
    let container, titleContainer, link, img, title;

    link = createA('https://laforgeduweb.com/' + this.address, '');
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

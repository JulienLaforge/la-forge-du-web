class Gallery {
  constructor(x, y, w) {
    this.pos = createVector(x, y);
    this.gallery_items = [];
    this.numCols = floor((w-80)/200) < projects.length ? floor((w-80)/200) : projects.length;
    this.numRows = ceil(projects.length / this.numCols);
    this.gap = this.numRows == 1 ? 40 : ((w-80)-200*(this.numCols))/(this.numCols-1);
  }

  setup() {
    let newPos = this.pos.copy();
    let step = 0;
    for(let i=0; i<this.numRows; i++) {
      for(let j=0; j<this.numCols; j++) {
        if (step < projects.length) {
          let title = projects[step].title;
          let imagePath = projects[step].imagePath;
          let address = projects[step].address;
          let tooltip = projects[step].tooltip;
          this.gallery_items.push(new GalleryItem(newPos.x, newPos.y, title, imagePath, address, tooltip));
        }
        newPos.x += 200 + this.gap;
        step++;
      }
      newPos.x = 40;
      newPos.y += 280;
    }
  }

  display() {
    this.gallery_items.forEach(gallery_item => {
      gallery_item.draw();
    });
  }

  update(w, h) {
    this.gallery_items = [];
    this.numCols = floor((w-80)/200) < projects.length ? floor((w-80)/200) : projects.length;
    this.numRows = ceil(projects.length / this.numCols);
    this.gap = this.numRows == 1 ? 40 : ((w-80)-200*(this.numCols))/(this.numCols-1);
    this.setup();
    removeElements();
    this.display();
  }
}

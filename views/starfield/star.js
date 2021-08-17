class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z -= speed;
    if (this.z < 1) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, size, 0);

    this.px = map(this.x / this.pz, 0, 1, 0, width);
    this.py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;

    stroke(255);
    strokeWeight(r);
    line(this.px, this.py, sx, sy);

  }
}

let canvas;
let infos;

function setup() {
  infos = new ProjectInfos("");
  project = new ProjectCanvas();

  project.create();
  infos.create();
  checkWindow();
}

function draw() {

}

function checkWindow() {
  project.show();
  infos.show();
}

function windowResized() {
  checkWindow();
}

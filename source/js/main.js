//= require vendor/bootstrap

var pad = document.querySelector("#tap"),
    coco = document.querySelector(".coco"),
    coconut = document.querySelector("#coconut");

var hammerPad = new Hammer(pad);

hammerPad.on("tap press swipeup swipedown", function(event){
  var pointer0 = event.pointers[0];

  if (event.type.match(/tap|swipeup|swipedown|press/g)) {
    var tap = event.tapCount;

    coconut.classList.toggle('move');

    if (tap == 3) {
      console.log('YO!');
      coco.classList.add('drop');
    }
  }

});

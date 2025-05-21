var images=['img/foto1.jpg','img/foto2.jpg','img/foto3.jpg','img/foto4.jpg','img/foto5.jpg'];
var counter = 0;
function nextImage(){
    counter++;
    if(counter==images.length){
        counter=0;
    }
    var elem=document.getElementById("carusel");
    elem.src=images[counter];
}
function postImage(){
    counter--;
    if(counter==images.length){
        counter=0;
    }
    var elem=document.getElementById("carusel");
    elem.src=images[counter];
}
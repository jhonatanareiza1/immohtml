
//constantes
var gridImgs = document.querySelectorAll('.grid-img');
var lightbox = document.querySelector('.lightbox');
var lightboxImg = lightbox.querySelector('.lightbox-img');
var lightboxbtn = lightbox.querySelector('.lightbox-btn');
var lightboxxbtnHandler = function lightboxxbtnHandler() {
  lightbox.classList.remove('isActive');
};
var gridimgsHandler = function gridimgsHandler(index) {
  lightbox.classList.add('isActive');
  lightboxImg.src = gridImgs[index].src;
};

// cuando click .grid-img
//.LIGHTBOX LE Añadimos la clase .isActive
// .lightbox-img le añadimos src de la imagen .grid-img

gridImgs.forEach(function (eachImg, index) {
  gridImgs[index].addEventListener('pointerdown', function () {
    gridimgsHandler(index);
  });
});
lightboxbtn.addEventListener('pointerdown', lightboxxbtnHandler);
// слайдер
let slideIndex = 1, // параметр текущего слайда
    slides = document.querySelectorAll('.projects__element'),
    arrowLeft = document.querySelector('.arrow__left'),
    arrowRight = document.querySelector('.arrow__right');

showSlides(slideIndex);

    function showSlides (n) {
      if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
      slides.forEach((item) => item.style.display = 'none');
      slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    arrowLeft.addEventListener('click', function () {
      plusSlides(-1);
    });

    arrowRight.addEventListener('click', function () {
      plusSlides(1);
    });

// модальное окно

let modal = document.getElementById('modal'),
    btn = document.getElementById('btn'),
    close = document.getElementById('closeBtn');

btn.onclick = function () {
  modal.style.display = 'block';
}
close.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if(event.target == modal) {
    modal.style.display = 'none';
  }
}


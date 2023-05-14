window.onload = function () {
  // getting slides
  const sliderBox = document.querySelector('.slider');
  const slidesBox = sliderBox.querySelector('.slides');
  const slides = slidesBox.querySelectorAll('.slide'); // this will return array of all slides

  //   accessing upcoming slides box
  const upcomingSlideBox = sliderBox.querySelector('.upcomingSlideBox');
  const upcomingSlide = upcomingSlideBox.querySelector('.upcomingSlide');
  const upcomingSlideH1 = upcomingSlide.querySelector('h1');

  let slideNo = 0; //default slide no is 0 means it will start from index 0
  //setting next slide view on window onload
  //getting next slide h1 from it's info

  const nextSlideName = slides[slideNo + 1].querySelector('.info h1')
    .textContent;
  upcomingSlideH1.innerHTML = nextSlideName;

  //getting next slide image source
  const nextSlideImg = slides[slideNo + 1].querySelector('img').src;
  upcomingSlideBox.style = `background:url('${nextSlideImg}');background-position:100% 100%;background-size:100% 100%`;

  //function to change upcoming slide view

  const upcomingSlideView = () => {
    const nextSlideNo = (slideNo + 1) % slides.length;
    const nextSlideName = slides[nextSlideNo].querySelector('.info h1')
      .textContent;
    upcomingSlideH1.innerHTML = nextSlideName;

    //getting next slide image source
    const nextSlideImg = slides[nextSlideNo].querySelector('img').src;
    upcomingSlideBox.style = `background:url('${nextSlideImg}');background-position:100% 100%;background-size:100% 100%`;
  };

  //next slide
  const nextSlide = () => {
    if (slideNo == slides.length - 1) {
      slideNo = 0;
    } else {
      slideNo = slideNo + 1;
    }

    slidesBox.style.left = -slideNo + '00%';
  };
  //prev slide
  const prevSlide = () => {
    if (slideNo == 0) {
      slideNo = slides.length - 1;
    } else {
      slideNo = slideNo - 1;
    }

    slidesBox.style.left = -slideNo + '00%';
  };

  //change upcoming slide and change slide on click
  upcomingSlideBox.addEventListener('click', () => {
    nextSlide();
    upcomingSlideView();
  });

  //getting next btn and prev btn
  const sliderBtns = sliderBox.querySelector('.slideBtns');
  const nextBtn = sliderBtns.querySelector('.next');
  const prevBtn = sliderBtns.querySelector('.prev');

  //next slide on next click btn
  nextBtn.addEventListener('click', () => {
    nextSlide();
    upcomingSlideView();
  });
  //prev slide on prev click btn
  prevBtn.addEventListener('click', () => {
    prevSlide();
    upcomingSlideView();
  });
};

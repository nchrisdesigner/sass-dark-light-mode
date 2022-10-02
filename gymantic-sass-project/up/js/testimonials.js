// const slides = document.querySelector(".testimonials__content--slider")
//   .children;
// const indicatorImgs = document.querySelector(
//   ".testimonials__content--indicator"
// ).children;

// // console.log(indicatorImgs[0]);
// // console.log(indicatorImgs[2]);

// for (let i = 0; i < indicatorImgs.length; i++) {
//   indicatorImgs[i].addEventListener("click", function () {
//     // console.log(this.getAttribute("data-id"));

//     // Getting The Slide Imgas
//     for (let j = 0; j < indicatorImgs.length; j++) {
//       indicatorImgs[j].classList.remove("active");
//     }

//     this.classList.add("active");

//     // getting the nex slide
//     const id = this.getAttribute("data-id");
//     for (let k = 0; k < slides.length; k++) {
//       slides[k].classList.remove("active");
//     }

//     slides[id].classList.add("active");
//   });
// }

const slides = document.querySelectorAll('.testimonials__content--slider__slide');
// const indicatorImgs = document.querySelector('.testimonials__content--indicator').children;
const indicatorImgs = document.querySelectorAll('.testimonials__content--indicator__img');
console.log(indicatorImgs);

indicatorImgs.forEach( (indicatorImg,index) => {
  indicatorImg.addEventListener('click', () => {
    // Remove Class active from all images
    indicatorImgs.forEach((indicatorImg) => {
      indicatorImg.classList.remove('active');
    });

    // Add Class active to chosen image
    indicatorImg.classList.add('active');

    //   const id = indicatorImg.getAttribute("data-id");
    // console.log(id);
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    
    slides[index].classList.add('active');
  });
});

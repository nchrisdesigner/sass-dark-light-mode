// let checkbox = document.querySelector('input[name="theme"]');
// let htmlElement = document.documentElement;

// checkbox.addEventListener("change", () => {
//   if (checkbox.checked) {
//     smoothTrans();
//     htmlElement.setAttribute("data-theme", "dark");
//   } else {
//     smoothTrans();
//     htmlElement.setAttribute("data-theme", "light");
//   }
// });

// let smoothTrans = () => {
//   htmlElement.classList.add("transition");

//   window.setTimeout(() => {
//     htmlElement.classList.remove("transition");
//   }, 1000);
// };

const checkbox = document.querySelector('input[name="theme"]');
const htmlElement = document.documentElement;

checkbox.addEventListener('change', () => {
  if(checkbox.checked){
    smoothTransition();
    htmlElement.setAttribute('data-theme', 'dark');
  }
  else{
    smoothTransition();
    htmlElement.setAttribute('data-theme', 'light');
  }
});

const smoothTransition = () => {
  htmlElement.classList.add('transition');

  window.setTimeout(() => {
    htmlElement.classList.remove('transition');
  }, 1000);
};

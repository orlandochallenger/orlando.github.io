var myNav = document.querySelector(".navbar");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 0) {
    myNav.classList.add("bg-dark");
    myNav.classList.remove("bg-info");
  } else {
    myNav.classList.add("bg-info");
    myNav.classList.remove("bg-dark");
  }
};

// //Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = () => {
//   scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

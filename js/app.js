const myNav = document.querySelector(".navbar");
const mybutton = document.getElementById("myBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    myNav.classList.add("bg-dark");
    myNav.classList.remove("bg-info");
    mybutton.style.display = "block";
  } else {
    myNav.classList.add("bg-info");
    myNav.classList.remove("bg-dark");
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

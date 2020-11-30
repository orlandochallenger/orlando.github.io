const myNav = document.querySelector(".navbar");
const mybutton = document.getElementById("myBtn");
const year = document.querySelector(".year");

window.onscroll = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Footer year
const date = new Date().getFullYear();
document.querySelector(".year").innerHTML = date;
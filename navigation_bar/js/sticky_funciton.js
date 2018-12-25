//run the function whenever the user is scrolling the page
window.onscroll = function(){stick()};


//variable for the navigation bar
var navigationBar = document.getElementById("stickyNavbar");


//variable for the offset of the navigation bar from the top of the page
var navigationOffset = navigationBar.offsetTop;

//function for setting sticky position on the navigation page
function stick() {
  if (window.pageYOffset > navigationOffset) {
    navigationBar.classList.add("sticky");
  } else {
    navigationBar.classList.remove("sticky");
  }
}

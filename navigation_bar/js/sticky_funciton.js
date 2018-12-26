//run the function whenever the user is scrolling the page
window.onscroll = function(){stick()};


//variable for the navigation bar
var navigationBar = document.getElementById("stickyNavbar");

//variable for the extra small navigation bar
var xsNavbar = document.getElementById("stickyXsNavbar");




//variable for the offset of the navigation bar from the top of the page
var navigationOffset = navigationBar.offsetTop;

//variable for the offset of the extra small navigation bar from the top of the page
var xsNavbarOffset = xsNavbar.offsetTop;

//function for setting sticky position on the navigation page
function stick() {
  if (window.pageYOffset > navigationOffset) {
    navigationBar.classList.add("sticky");
  } else {
    navigationBar.classList.remove("sticky");
  }
  
  
    //make the contacts button stick to the top of the page
  if (window.pageYOffset > xsNavbarOffset) {
    xsNavbar.classList.add("sticky");
  } else {
    xsNavbar.classList.remove("sticky");
  }
}

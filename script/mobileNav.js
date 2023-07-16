//Navigation bar for mobile view
const navLinks = document.querySelectorAll('.navLinks');
function showMenu(){
  navLinks.forEach(navLink => navLink.style.left = "0");
}
function hideMenu(){
  navLinks.forEach(navLink =>navLink.style.left = "-60%");
}

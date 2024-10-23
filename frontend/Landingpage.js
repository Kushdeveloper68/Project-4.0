let navBtn = document.getElementById('nav-btn');
let navDiv = document.getElementById("nav-list-div");
let nav = false;
let navIcon = document.getElementById("path-icon");
// false for close
// true for open
let cancelIcon = "./211651_close_round_icon.png";
let menuIcon= "./134216_menu_lines_hamburger_icon.png";
navBtn.addEventListener("click",() => {
  if(nav == false) {
  navDiv.style.transform = "translateX(0px)";
  nav = true;
  navIcon.setAttribute("src", cancelIcon);
  } else {
    navDiv.style.transform = "translateX(-300px)";
    nav = false;
    navIcon.setAttribute("src", menuIcon);
  }
 });
 $('input').on('change', function() {
  $('body').toggleClass('blue');
});
// nav bar wordpress function 
window.onload = function() {
    const activeItem = document.querySelector('.nav-item.active');
    const underline = document.querySelector('.underline');
    
    underline.style.left = `${activeItem.offsetLeft}px`;
    underline.style.width = `${activeItem.offsetWidth}px`;
};

function slideUnderline(element) {
    const items = document.querySelectorAll('.nav-item');
    
    items.forEach(item => item.classList.remove('active'));
    
    element.classList.add('active');
    
    const underline = document.querySelector('.underline');
    
    underline.style.left = `${element.offsetLeft}px`;
    underline.style.width = `${element.offsetWidth}px`;
}
// for second nav same as  same 

window.onload = function() {
    const activeItem = document.querySelector('.nav-item2.active2');
    const underline = document.querySelector('.underline2');
    
    underline.style.left = `${activeItem.offsetLeft}px`;
    underline.style.width = `${activeItem.offsetWidth}px`;
};

function slideUnderline2(element) {
    const items = document.querySelectorAll('.nav-item2');
    
    items.forEach(item => item.classList.remove('active2'));
    
    element.classList.add('active2');
    
    const underline = document.querySelector('.underline2');
    
    underline.style.left = `${element.offsetLeft}px`;
    underline.style.width = `${element.offsetWidth}px`;
}

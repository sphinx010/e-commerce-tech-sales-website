let slideIndex = 0;
showSlides();

function showSlides(){
let i;
let slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++){
slides[i].style.display = "none" ;
}
slideIndex++;
if (slideIndex > slides.length){
slideIndex = 1
}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 3000);
}

// // Get references to the menu item containers
// const smartphonesContainer = document.querySelector('.batch1');
// const laptopsContainer = document.querySelector('.batch2');
// const gadgetsContainer = document.querySelector('.batch3');

// // Get references to the navigation links
// const smartphonesLink = document.getElementById('smartphones-link');
// const laptopsLink = document.getElementById('laptops-link');
// const gadgetsLink = document.getElementById('gadgets-link');

// // Function to show the selected menu items and hide others
// function showMenuItems(containerToShow, containerToHide1, containerToHide2) {
//   containerToShow.style.display = 'grid';
//   containerToHide1.style.display = 'none';
//   containerToHide2.style.display = 'none';
// }

// // Add click event listeners to the navigation links
// smartphonesLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   showMenuItems(smartphonesContainer, laptopsContainer, gadgetsContainer);
// });

// laptopsLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   showMenuItems(laptopsContainer, smartphonesContainer, gadgetsContainer);
// });

// gadgetsLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   showMenuItems(gadgetsContainer, smartphonesContainer, laptopsContainer);
// });


// Get references to the menu item containers
const smartphonesContainer = document.querySelector('.batch1');
const laptopsContainer = document.querySelector('.batch2');
const gadgetsContainer = document.querySelector('.batch3');

// Get references to the navigation links
const smartphonesLink = document.getElementById('smartphones-link');
const laptopsLink = document.getElementById('laptops-link');
const gadgetsLink = document.getElementById('gadgets-link');

// Function to show the selected menu items and hide others
function showMenuItems(containerToShow, containerToHide1, containerToHide2) {
  containerToShow.style.display = 'grid';
  containerToHide1.style.display = 'none';
  containerToHide2.style.display = 'none';
}

// Add click event listeners to the navigation links
smartphonesLink.addEventListener('click', function(event) {
  event.preventDefault();
  showMenuItems(smartphonesContainer, laptopsContainer, gadgetsContainer);
});

laptopsLink.addEventListener('click', function(event) {
  event.preventDefault();
  showMenuItems(laptopsContainer, smartphonesContainer, gadgetsContainer);
});

gadgetsLink.addEventListener('click', function(event) {
  event.preventDefault();
  showMenuItems(gadgetsContainer, smartphonesContainer, laptopsContainer);
});

// Hide laptopsContainer and gadgetsContainer by default
laptopsContainer.style.display = 'none';
gadgetsContainer.style.display = 'none';




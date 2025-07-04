// SCRIP TO CONTROLL NAVBAR and SEARCH
document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.getElementById('searchIcon');
  const searchBar = document.getElementById('searchBar');
  const navbar = document.getElementById('navbar');
  const closeSearch = document.getElementById('closeSearch');

  searchIcon.addEventListener('click', () => {
    navbar.classList.add('hidden');
    searchBar.style.display = 'flex';
  });

  closeSearch.addEventListener('click', () => {
    navbar.classList.remove('hidden');
    searchBar.style.display = 'none';
  });
});

//--------------------------------------------------------------------------------------------------------


// product navigator
const imageList = [
  "assest/images/image11.png",
  "assest/images/image12.png",
  "assest/images/image13.png",
  "assest/images/image14.png",
  "assest/images/image15.png",
  "assest/images/image16.png",
  "assest/images/image17.png",
  "assest/images/image18.png"
];

let currentIndex = 0;

function setMainImage(index) {
  currentIndex = index;
  document.getElementById('mainImage').src = imageList[currentIndex];
}

function navigateImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = imageList.length - 1;
  if (currentIndex >= imageList.length) currentIndex = 0;
  document.getElementById('mainImage').src = imageList[currentIndex];
}

//--------------------------------------------------------------------------------------------------------
// AWT
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('%', '');
      const increment = target / 80;

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}%`;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = `${target}%`;
      }
    };

    updateCount();
  });
});

//--------------------------------------------------------------------------------------------------------
// Accordian
 document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll(".accordion");
  const panels = document.querySelectorAll(".panel");

  accordions.forEach((accordion, index) => {
    accordion.addEventListener("click", () => {
      panels.forEach((panel, i) => {
        if (i === index) {
          panel.classList.toggle("open");
          accordions[i].classList.toggle("active");
        } else {
          panel.classList.remove("open");
          accordions[i].classList.remove("active");
        }
      });
    });
  });
});

//--------------------------------------------------------------------------------------------------------
//Carousel

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');

    window.scrollCarousel = function (direction) {
      const cardWidth = 320; // includes gap
      carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    };
  });
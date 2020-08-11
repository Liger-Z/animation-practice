const clickToggle = function (element) {
  element.addEventListener('click', () => {
    element.classList.toggle('clicked');
  });
};

const siteNavButton = document.querySelector('#site-nav-button');
clickToggle(siteNavButton);

const siteNavList = document.querySelector('.site-nav-list');

const toggleMenu = function () {
  siteNavList.classList.toggle('inactive');
  siteNavList.classList.toggle('animate');
}

siteNavButton.addEventListener('click', toggleMenu);

const images = document.querySelectorAll('.slide-image');

let counter = 1;

const slideLeft = function (imageList) {
  if (counter === imageList.length - 1) {
    counter = 1;
  }else{
    counter += 1;
  }

  imageList.forEach((image) => {
    image.style = `transform: translateX(${counter * 960 * -1}px)`
  })
}

const slideRight = function (imageList) {
  console.log(counter)
  if (counter === 1) {
    counter = imageList.length - 1;
  }else {
    counter -= 1;
  }

  imageList.forEach((image) => {
    image.style = `transform: translateX(${counter * 960 * -1}px)`
  })
}

const leftArrowButton = document.querySelector('#image-carousel-left');
leftArrowButton.addEventListener('click', () => {slideLeft(images)});

const rightArrowButton = document.querySelector('#image-carousel-right');
rightArrowButton.addEventListener('click', () => {slideRight(images)});

leftArrowButton.addEventListener('mousedown', () => {
  leftArrowButton.classList.add('clicked');
  setTimeout(() => {
    leftArrowButton.classList.remove('clicked')
  }, 150)
});

rightArrowButton.addEventListener('mousedown', () => {
  rightArrowButton.classList.add('clicked');
  setTimeout(() => {
    rightArrowButton.classList.remove('clicked')
  }, 150)
})

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imagesArray = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.appendChild(CreateCarousel(imagesArray));

function CreateCarousel(images) {
  //create elements
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("div");
  const img = document.createElement("img");
  const rightBtn = document.createElement("div");

  //classes & styles
  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");
  img.style.display = "block"; //temp unblock - need to add logic to only apply to current index image

  //structure
  carousel.appendChild(leftBtn);
  carousel.appendChild(rightBtn);
  carousel.appendChild(img);

  //content
  leftBtn.textContent = " < ";
  rightBtn.textContent = " > ";
  let i = 0;
  img.src = images[i]; //sets default image displayed to 1st in array

  //events
  rightBtn.addEventListener("click", () => {
    img.src = images[i];
    while (i < images.length - 1) {
      i++;
    }
    console.log("Right clicked", i);
  });

  leftBtn.addEventListener("click", () => {
    img.src = images[i];
    while (i > 0) {
      i--;
    }
    console.log("Left clicked", i);
  });

  return carousel;
}

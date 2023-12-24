// Get all images inside the image slider container
const images = document.querySelectorAll('.image-slider img');

// Set the initial active image
let currentImage = 0;

// Define the speed of the slideshow in milliseconds
const slideInterval = 3000; // 3 seconds

// Function to change the active image
function changeImage() {
  // Check if we're at the first or last image
  const isFirstImage = currentImage === 0;
  const isLastImage = currentImage === (images.length - 1);

  // If we're at the first image and move left, or we're at the last image and move right, do nothing
  if ((isFirstImage && currentImage === 0) || (isLastImage && currentImage === (images.length - 1))) return;

  // Otherwise, update the active image index
  currentImage += 1;

  // Update the active image display
  images[currentImage - 1].classList.remove('active');
  images[currentImage].classList.add('active');

  // Apply a fade out effect to the previous image
  images[currentImage - 1].style.opacity = 0;

  // Apply a fade in effect to the current image
  images[currentImage].style.opacity = 1;

  // Wait for the animation to finish before changing the image again
  setTimeout(() => {
    changeImage();
  }, slideInterval);
}

// Start the slideshow
setTimeout(() => {
  changeImage();
}, slideInterval);

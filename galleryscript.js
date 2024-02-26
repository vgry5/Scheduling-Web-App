function scrollToLargeImage(index) {											/*Function to scroll to the large image*/
  const largeImage = document.querySelector(`#large-image-${index}`);
  largeImage.scrollIntoView({ behavior: 'smooth' });
}
// script.js
window.addEventListener("load", () => {
  const gallery = document.querySelector(".imageContainer");
  const images = Array.from(gallery.querySelectorAll("img"));

  // Clone images and append them to the gallery
  images.forEach((img) => {
    const clone = img.cloneNode();
    gallery.appendChild(clone);
  });

  // Calculate total width of all images
  const totalWidth = gallery.scrollWidth / 2;
  gallery.style.width = `${totalWidth * 2}px`; // Double the total width to fit all cloned images
});

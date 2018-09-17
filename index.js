const images = document.querySelectorAll("[data-imagesrc]");

const options = {
  rootMargin: "0px",
  threshold: [0, 1]
};

const callback = function(entries, observer) {
  for (entry of entries) {
    if (!entry.isIntersecting) return false;
    const target = entry.target;

    const largeImage = new Image();
    largeImage.src = target.getAttribute("data-imagesrc");
    largeImage.onload = function() {
      target.src = target.getAttribute("data-imagesrc");
      target.classList.add("loaded");
    };
  }
};

const observer = new IntersectionObserver(callback, options);

images.forEach(image => {
  observer.observe(image);
});

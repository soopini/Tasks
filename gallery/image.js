const galleryItems = document.querySelectorAll(".galleryItem");

galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("enlarged")) {
      item.classList.remove("enlarged");
    } else {
      item.classList.add("enlarged");
    }
  });
});

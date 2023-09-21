// JavaScript to hide the loader when the content is loaded
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  const loadingText = document.querySelector(".loading-text");
  loader.style.display = "none";
  loadingText.style.display = "none";
});

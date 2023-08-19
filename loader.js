// JavaScript to hide the loader when the content is loaded
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrapper");
    console.log('loading')
    loader.style.display = "none";
  });
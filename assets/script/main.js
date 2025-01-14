document.getElementById("crescent-moon").onclick = () => {
  if (document.body.classList.contains("crescent-moon")) {
    document.body.classList.remove("crescent-moon");
    document.getElementById("crescent-moon").src = "assets/icons/crescent moon.webp";
  } else {
    document.body.classList.add("crescent-moon");
      document.getElementById("crescent-moon").src = "assets/icons/sun.webp";
  }
};



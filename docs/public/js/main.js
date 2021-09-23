function appHeight() {
  const doc = document.documentElement;
  doc.style.setProperty("--vh", window.innerHeight + "px");
}

window.addEventListener("resize", appHeight);
appHeight();

function tog(h) {
  const chev = h.querySelector(".chev");
  if (!chev || getComputedStyle(chev).display === "none") return;
  const b = h.nextElementSibling;
  const open = h.classList.toggle("open");
  b.classList.toggle("show", open);
}
function layout() {
  const t = window.innerWidth >= 640;
  document
    .querySelectorAll(".tw")
    .forEach((el) => (el.style.display = t ? "block" : "none"));
  document
    .querySelectorAll(".cml")
    .forEach((el) => (el.style.display = t ? "none" : "block"));
}
function initSections() {
  const mob = window.innerWidth < 640;
  document.querySelectorAll(".ch").forEach((h) => {
    const b = h.nextElementSibling;
    if (mob) {
      h.classList.remove("open");
      b.classList.remove("show");
    } else {
      h.classList.add("open");
      b.classList.add("show");
    }
  });
}
const stb = document.getElementById("stb");
window.addEventListener(
  "scroll",
  () => stb.classList.toggle("on", scrollY > 300),
  { passive: true },
);
layout();
initSections();
window.addEventListener("resize", () => {
  layout();
  initSections();
});

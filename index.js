function openNav() {
  document.getElementById("mySidenav").style.width = "230px";          
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
ScrollReveal({
  reset: false,
  distance: "180px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".header-area", { origin: "top" });
ScrollReveal().reveal(".edu-timeline", { origin: "top" });
ScrollReveal().reveal(".title", { origin: "top" });
ScrollReveal().reveal(".Profile", { origin: "left" });
ScrollReveal().reveal(".profile-text", { origin: "right" });
ScrollReveal().reveal(".col-twelve", { origin: "right" });
ScrollReveal().reveal(".project-container", { origin: "left" });
ScrollReveal().reveal(".section .Skills", { origin: "right" });
ScrollReveal().reveal(".contact .container", { origin: "left" });

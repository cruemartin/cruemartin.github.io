const nav_links = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

function changeActive(id) {
  nav_links.forEach((link) => link.classList.remove("navActive"));
  id.classList.add("navActive");
}

function changeActiveNav() {
  console.log("inchange");
  let index = sections.length;

  while (--index && window.scrollY < sections[index].offsetTop) {}

  nav_links.forEach((link) => link.classList.remove("navActive"));
  nav_links[index].classList.add("navActive");
}

changeActiveNav();
window.addEventListener("scroll", changeActiveNav);

const nav_links = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll('section');


function changeActive(id){
    let links = document.querySelectorAll("nav ul li a");

    links.forEach((link) => link.classList.remove("navActive"));

    id.classList.add('navActive');

}

function changeActiveNav(){
    console.log("inchange")
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop){} 

    nav_links.forEach((link) => link.classList.remove('navActive'));
    nav_links[index].classList.add('navActive');

}

changeActiveNav();
window.addEventListener('scroll', changeActiveNav);
function changeActive(id){
    let links = document.querySelectorAll("nav ul li a");

    links.forEach((link) => link.classList.remove("navActive"));

    id.classList.add('navActive');

}
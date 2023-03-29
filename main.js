function responsiveActive () {
    let mainMenu = document.getElementById('main-menu');
    let navResponsive = document.getElementById('nav-responsive');

    navResponsive.addEventListener("click", ()=>{
        mainMenu.classList.toggle("nav-responsive-active");
    })
}

responsiveActive();
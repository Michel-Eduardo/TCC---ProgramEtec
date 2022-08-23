const btnMobile = document.getElementById('btn');
function expandirMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', expandirMenu)
btnMobile.addEventListener('touchstart', expandirMenu)

const ativarMenu = document.getElementById('ling')


function expandirSubmenu(){
    const submenu = document.getElementById('ling')
    submenu.classList.toggle('active')
}
ativarMenu.addEventListener('click', expandirSubmenu)
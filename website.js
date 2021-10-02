const currentlocation = location.href;
const menuitem = document.querySelectorAll('nav-list a');
const menulenght = menuitem.length;

for(let i = 0; i < menulenght; i++){
    if(menuitem[i].href === currentlocation){
        menuitem[i].classList.add('active');
        menuitem[i].classList.remove('navlink');
    }
}



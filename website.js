const currentlocation = location.href;
const menuitem = document.querySelectorAll( '.nav-list a' );

for ( let i = 0; i < menuitem.length; i++ ) {
    if ( menuitem[i].href === currentlocation ) {
        menuitem[i].classList.add( "active" )
    }
}



/*       menu.js       */
/*   ITW - 2.projekt   */
/*   Phamova Thu Tra   */
/*      xphamo00       */
/*    FIT VUT 2024     */

function menu() {
    var links = document.querySelector('.nav-links');
    var active = links.classList.toggle('active');
    
    if (active) {
        document.addEventListener('click', close_menu);
    } else {
        document.removeEventListener('click', close_menu);
    }
}

function close_menu(event) {
    // if clicked away or on the link it will close the menu list
    if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-links')) {
        document.querySelector('.nav-links').classList.remove('active');
    }
}

// gets all the items in menu
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        // hides items by removing the active class
        document.querySelector('.nav-links').classList.remove('active');
    });
});


// closes the menu when scrolled away
const navbar = document.querySelector('.nav-links');
window.addEventListener('scroll', function() {
if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
});

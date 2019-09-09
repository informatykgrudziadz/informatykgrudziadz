const triger = document.querySelector('.triger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
    
    triger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');
      
      //Animate navlinks
      navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 1s cubic-bezier(0.06, 1, 0.15, 1.14) both ${index / 9.2 + 0.65}s`;
  
      });
        //Animate triger - dodanie clasy - utworzenie X
        triger.classList.toggle('toggle');
    });  
   

  //zamykanie nav po kliknięciu elementu li w nav
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
          nav.classList.remove('nav-active');
          triger.classList.remove('toggle');

          navLinks.forEach((link, index) => {
              if (link.style.animation) {
                link.style.animation = `navLinknotFade 1s cubic-bezier(0.06, 1, 0.15, 1.14) both ${index / 17.2 + 0.1}s`;
              } else {
                link.style.animation = '' ;
              }
          });
        });
      });
  //wyjeżdżanie nav na mobile
//zamykanie nav po kliknięciu elementu li w nav
//koniec JS Nav


/**
* dodanie loadera podczas ładowania kontentu strony
*/

let loader = document.querySelector('.lds-roller');

window.addEventListener('load', () => {
loader.style.display = 'none';
});
/**koniec dodawania loadera */

/**skrócony kod o 107 linijek JS dodać w domu do github uwaga kodowanie tylko app oraz dodana klasa do index html */


/**hover na sekcje .GridA  to .grid-container div scale(1.1)*/
let GridZnacznikA = document.querySelectorAll('.GridA');
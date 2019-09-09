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

//start modal na MainSection
let backdrop = document.querySelectorAll('.backdrop');
let modal = document.querySelectorAll('.modal');
let closeButton = document.querySelectorAll('.closeButton');
let sectionAllModal = document.querySelectorAll('.spanModal');

//otwieranie Modal
sectionAllModal.forEach((link,index) => {
  link.addEventListener('click', (e) => {
    modal[index].classList.toggle('show');
    backdrop[index].classList.toggle('show');
  });
});

//zamykanie backdrop
backdrop.forEach((link,index) => {
link.addEventListener('click', (e) => {
    e.target.classList.remove('show');
    modal[index].classList.remove('show');
  
});
});
//zamykanie X
closeButton.forEach((link, index) => {
link.addEventListener('click', (e) => {
  modal[index].classList.remove('show');
  backdrop[index].classList.remove('show');
 
});

});


/**
 * dodanie loadera podczas ładowania kontentu strony
 */

let loader = document.querySelector('.lds-roller');

window.addEventListener('load', () => {
  loader.style.display = 'none';
});
/**koniec dodawania loadera */

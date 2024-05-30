/*

document.addEventListener('DOMContentLoaded', function () {
   const buttons = document.querySelectorAll('.list-map__btn--white');

   buttons.forEach(button => {
      button.addEventListener('click', function () {
         document.querySelectorAll('.map__location--white').forEach(location => {
            location.classList.remove('_active');
         });

         buttons.forEach(btn => {
            btn.classList.remove('_active');
         });

         const targetPath = button.getAttribute('data-btn');

         const targetLocation = document.querySelector(`.map__location--white[data-city="${targetPath}"]`);

         if (targetLocation) {
            targetLocation.classList.add('_active');
         }

         button.classList.add('_active');
      });
   });
});


*/




/*-------------*/
/*
document.addEventListener('DOMContentLoaded', () => {
   // Select all map location elements
   const mapLocations = document.querySelectorAll('.map__location--white');

   mapLocations.forEach(location => {
      location.addEventListener('click', function () {
         // Remove the _active class from all map locations and list buttons
         mapLocations.forEach(loc => loc.classList.remove('_active'));
         document.querySelectorAll('.list-map__btn--white').forEach(btn => btn.classList.remove('_active'));

         // Add the _active class to the clicked map location
         this.classList.add('_active');

         // Find the corresponding list button using the data attribute
         const target = this.getAttribute('data-city');
         const listButton = document.querySelector(`.list-map__btn--white[data-btn="${target}"]`);

         if (listButton) {
            // Add the _active class to the corresponding list button
            listButton.classList.add('_active');
         }
      });
   });
});

*/
/*
const modalController = ({ modal, btnOpen, btnClose, modalMain, time = 300}) => {
   const buttonElems = document.querySelectorAll(btnOpen);
   const modalElem = document.querySelector(modal);
   const modalCont = document.querySelector(modalMain)

   modalElem.style.cssText = `
      display: 'flex';
      visibility: 'hidden';
      opacity: 0;
      transition: opacity 300ms easy-in-out;
      `;

   const closeModal = event => {
      const target = event.target;

      if (target === modalElem || target.closest(btnClose)) {
         modalElem.style.opacity = 0;
         modalCont.style.transform = 'translateY(20px)';
         setTimeout(() => {
            modalElem.style.visibility = 'hidden';
         }, time);
      }
   }

   const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      modalCont.style.transform = 'translateY(0px)';
   };

   buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
   });


   modalElem.addEventListener('click', closeModal);
};
modalController({
   modal: '.modal',
   btnOpen: '.btn__open',
   btnClose: '.btn__close',
   modalMain: '.modal__main',
   time: 1000
});
*/
/*------------------pop-up-----------*/

const scrollController = {
   scrollPosition: 0,
   disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
      document.documentElement.style.scrollBehavior = 'unset';
   },
   enabledScroll() {
      document.body.style.cssText = '';
      window.scroll({ top: scrollController.scrollPosition })
      document.documentElement.style.scrollBehavior = '';
   },
}

const modalController = ({ modal, btnOpen, btnClose, modalMain, time = 300 }) => {
   const buttonElems = document.querySelectorAll(btnOpen);
   const modalElem = document.querySelector(modal);
   const modalCont = document.querySelector(modalMain);

   modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;
   modalCont.style.cssText = `
    transition: transform ${time}ms ease-in-out;
  `;

   const closeModal = event => {
      modalCont.style.transform = 'translateY(20px)';
      const target = event.target;

      if (
         target === modalElem ||
         (btnClose && target.closest(btnClose)) ||
         event.code === 'Escape'
      ) {

         modalElem.style.opacity = 0;

         setTimeout(() => {
            modalElem.style.visibility = 'hidden';
            scrollController.enabledScroll();
         }, time);

         window.removeEventListener('keydown', closeModal);
      }
   }

   const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      window.addEventListener('keydown', closeModal);
      scrollController.disabledScroll();
      modalCont.style.transform = 'translateY(0px)';
   };

   buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
   });

   modalElem.addEventListener('click', closeModal);
};

modalController({
   modal: '.pop-up',
   btnOpen: '.pop-up__open',
   btnClose: '.pop-up__close',
   modalMain: '.pop-up__inner',
   time: 300
});


/*-----------------*/

/*---------pop-up class------*/









/*

document.addEventListener('DOMContentLoaded', () => {
   const modal = document.querySelector('.modal');
   const closeModalBtn = document.querySelector('.modal__btn-close');
   const modalBtns = document.querySelectorAll('.modal__btn');

   modalBtns.forEach(btn => {
      btn.addEventListener('click', () => {

         const modal = document.querySelector('.modal');
         modal.classList.add('_active');
      });
   });

   function handleKeyDown(event) {
      // Check if the pressed key is Escape (keyCode 27)
      if (event.keyCode === 27) {
         // Check if the modal has the _active class
         const modal = document.querySelector('.modal');
         if (modal.classList.contains('_active')) {
            // Remove the _active class from the modal
            modal.classList.remove('_active');
         }
      }
   }
   // Adding keydown event listener to the document
document.addEventListener('keydown', handleKeyDown);

   // Function to remove _active class
   const removeActiveClass = () => {
      modal.classList.remove('_active');
   };

   // Click event listener for the modal close button
   closeModalBtn.addEventListener('click', (event) => {
      removeActiveClass();
   });

   // Click event listener for the modal
   modal.addEventListener('click', (event) => {
      // Check if the clicked element is the modal itself, not the content inside it
      if (event.target === modal) {
         removeActiveClass();
      }
   });
});
*/
/*
const modalControl = ({ modalMain, modalClose, modalOpenBtn }) => {
   document.addEventListener('DOMContentLoaded', () => {
      const modal = document.querySelector(modalMain);
      const closeModalBtn = document.querySelector(modalClose);
      const modalBtns = document.querySelectorAll(modalOpenBtn);

      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {
            modal.classList.add('_active');
         });
      });

      function handleKeyDown(event) {
         if (event.keyCode === 27) {
            if (modal.classList.contains('_active')) {
               modal.classList.remove('_active');
            }
         }
      }

      document.addEventListener('keydown', handleKeyDown);

      const removeActiveClass = () => {
         modal.classList.remove('_active');
      };

      closeModalBtn.addEventListener('click', () => {
         removeActiveClass();
      });

      modal.addEventListener('click', (event) => {
         if (event.target === modal) {
            removeActiveClass();
         }
      });
   });
};

modalControl({
   modalMain: '.modal',
   modalOpenBtn: '.modal__btn',
   modalClose: '.modal__btn-close'
});
*/
/*-----------*/


/*

const modalControl = ({ modalMain, modalClose, modalOpenBtn }) => {

   document.addEventListener('DOMContentLoaded', () => {
      const modal = document.querySelector(modalMain);
      const closeModalBtn = document.querySelector(modalClose);
      const modalBtns = document.querySelectorAll(modalOpenBtn);

      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {

            const modal = document.querySelector(modalMain);
            modal.classList.add('_active');
            scrollController.disabledScroll();
         });
      });

      function handleKeyDown(event) {
         
         if (event.keyCode === 27) {
            const modal = document.querySelector(modalMain);
            if (modal.classList.contains('_active')) {
               modal.classList.remove('_active');
               scrollController.enabledScroll();
            }
         }
      }
      document.addEventListener('keydown', handleKeyDown);

      const removeActiveClass = () => {
         modal.classList.remove('_active');
      };

      closeModalBtn.addEventListener('click', (event) => {
         removeActiveClass();
      });

      modal.addEventListener('click', (event) => {
         if (event.target === modal) {
            removeActiveClass();
         }
      });
   });

};
modalControl({
   modalMain: '.modal',
   modalOpenBtn: '.modal__btn',
   modalClose: '.modal__btn-close',
});
*/

/*----------scroll-----------*/
//this script helps to solve our problem with the scroll, 
//when there is a lot of content in the pop - up, 
//another scroll is added and therefore the content will be jumping
const scrollControl = {
   scrollPosition: 0,
   disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
      document.documentElement.style.scrollBehavior = 'unset';
   },
   enabledScroll() {
      document.body.style.cssText = '';
      window.scroll({ top: scrollController.scrollPosition })
      document.documentElement.style.scrollBehavior = '';
   },
}

/*--------------------------*/

/*------------pop-up--------*/

const modalControl = ({ modalMain, modalClose, modalOpenBtn }) => {

   document.addEventListener('DOMContentLoaded', () => {
      const modal = document.querySelector(modalMain);
      const closeModalBtn = document.querySelector(modalClose);
      const modalBtns = document.querySelectorAll(modalOpenBtn);

      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {
            const modal = document.querySelector(modalMain);
            modal.classList.add('_active');
            scrollController.disabledScroll(); 
         });
      });

      function handleKeyDown(event) {
         if (event.keyCode === 27) {
            const modal = document.querySelector(modalMain);
            if (modal.classList.contains('_active')) {
               modal.classList.remove('_active');
               scrollController.enabledScroll(); 
            }
         }
      }
      document.addEventListener('keydown', handleKeyDown);

      const removeActiveClass = () => {
         modal.classList.remove('_active');
         scrollController.enabledScroll(); 
      };

      closeModalBtn.addEventListener('click', (event) => {
         removeActiveClass();
      });

      modal.addEventListener('click', (event) => {
         if (event.target === modal) {
            removeActiveClass();
         }
      });
   });

};
//here we just add classes in order for the script to work in the script itself, 
//you do not need to change anything
modalControl({
   modalMain: '.modal',
   modalOpenBtn: '.modal__btn',
   modalClose: '.modal__btn-close',
});

/*--------------------------*/

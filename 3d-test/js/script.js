
   document.addEventListener('DOMContentLoaded', function () {
      var bookContainer = document.querySelector('.book__container');

   bookContainer.addEventListener('click', function () {
      // Toggle the 'active' class on click
      this.classList.toggle('active');
      });
   });

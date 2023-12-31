document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      item.addEventListener('click', function() {
        const details = this.querySelector('.details');
          const allDetails = document.querySelectorAll('.details');
          const radioButton = this.querySelector('.radio-button');

        // Showing details of clicked item
        if (details.style.display === 'block') {
            details.classList.remove('active');
            details.parentNode.classList.remove('active');
            radioButton.checked = false;
        } else {
            details.classList.add('active');
            details.parentNode.classList.add('active');
            radioButton.checked = true;
        }
  
        // Hiding details of siblings
        allDetails.forEach(d => {
          if (d !== details) {
              d.classList.remove('active');
              d.parentNode.classList.remove('active');
          }
        });
      });
    });
  });
  
const ratingEls = document.querySelectorAll('.rating');
const backdrop = document.getElementById('backdrop');



ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener('click', (event) => {
    event.stopPropagation();
    removeActive();
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
  });
});


function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove('active');
  });
}

function removeActive2() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove('active');
    ratingEl.parentNode.classList.remove('active');
  });
}

backdrop.addEventListener('click', removeActive2);
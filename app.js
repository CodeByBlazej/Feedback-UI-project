const ratingEls = document.querySelectorAll('.rating');
const backdrop = document.getElementById('backdrop');
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container')

let selectedRating = '';


ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener('click', (event) => {
    event.stopPropagation();
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
  });
});

btnEl.addEventListener('click', () => {
  if (selectedRating !== '') {
    containerEl.innerHTML = `
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `
  }
})


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
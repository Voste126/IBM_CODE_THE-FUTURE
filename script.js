/***************************
 * Car Details Modal
 ***************************/
const detailsButtons = document.querySelectorAll('.details-button');
const carModal = document.getElementById('carModal');
const modalCarName = document.getElementById('modalCarName');
const modalCarPrice = document.getElementById('modalCarPrice');
const modalCarDesc = document.getElementById('modalCarDesc');
const modalClose = document.getElementById('modalClose');

detailsButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = e.target.closest('.car-card');
    modalCarName.textContent = card.getAttribute('data-car');
    modalCarPrice.textContent = "Price: " + card.getAttribute('data-price');
    modalCarDesc.textContent = card.getAttribute('data-desc');
    carModal.classList.add('active');
  });
});

modalClose.addEventListener('click', () => {
  carModal.classList.remove('active');
});
window.addEventListener('click', (e) => {
  if(e.target === carModal) {
    carModal.classList.remove('active');
  }
});

/***************************
 * Checkout Modal
 ***************************/
const buyNowButtons = document.querySelectorAll('.buy-now-button');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutCarName = document.getElementById('checkoutCarName');
const checkoutCarPrice = document.getElementById('checkoutCarPrice');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutForm = document.querySelector('.checkout-form');

buyNowButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = e.target.closest('.car-card');
    checkoutCarName.textContent = "Checkout - " + card.getAttribute('data-car');
    checkoutCarPrice.textContent = "Price: " + card.getAttribute('data-price');
    checkoutModal.classList.add('active');
  });
});

checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.remove('active');
});
window.addEventListener('click', (e) => {
  if(e.target === checkoutModal) {
    checkoutModal.classList.remove('active');
  }
});

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Payment processed successfully!');
  checkoutModal.classList.remove('active');
});

/***************************
 * Contact Form
 ***************************/
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  // Here you could do your own AJAX or fetch call to send data to a server
  // We'll just let it redirect to #success-message for now
});


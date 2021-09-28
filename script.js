const nav = document.querySelector('ul.navbar-nav');
const menuLists = document.querySelectorAll('a.nav-link');

nav.addEventListener('click', (e) => {
  menuLists.forEach((menu) => {
    menu.classList.remove('active');
  });
  e.target.classList.add('active');
});

// Google App Script - Contact Form
const scriptURL =
  'https://script.google.com/macros/s/AKfycbzgF9DJ7KsNGvYsXtzGjnXlU-B2Y0boxGlP4vY7RLEKP-N-eBtLrP3nRKi6crj-IMmTrg/exec';
const form = document.forms['portfolio-b5-contact-form'];

const sendBtn = document.querySelector('.btn-send');
const loadingBtn = document.querySelector('.btn-loading');
const formAlert = document.querySelector('.form-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendBtn.classList.toggle('d-none');
  loadingBtn.classList.toggle('d-none');
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => {
      console.log('Success!', response);
      sendBtn.classList.toggle('d-none');
      loadingBtn.classList.toggle('d-none');
      formAlert.classList.remove('d-none');
      formAlert.classList.remove('fade');
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
// End of App Script

/* Add Custom Animation fadeout alert:(((( */
/* karena kalo pake bawaan bootstrap, gabisa muncul lagi */
const closeAlertBtn = document.querySelector('.btn-close');

closeAlertBtn.addEventListener('click', (e) => {
  formAlert.classList.add('fade');
  setTimeout(() => {
    formAlert.classList.add('d-none');
  }, 500);
});
// End of Custom Animation

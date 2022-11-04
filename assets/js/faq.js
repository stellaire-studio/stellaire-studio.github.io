let faqs = document.querySelectorAll('.faq')
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.querySelector('.content-wrapper').classList.toggle('show-description')
    faq.querySelector('.icon').classList.toggle('rotate-icon')
  });
});

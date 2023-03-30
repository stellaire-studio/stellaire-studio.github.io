let faqsTooltips = document.querySelectorAll('.faq-tooltip')

faqsTooltips.forEach((faqTooltip) => {
  content = faqTooltip.querySelector('.faq-tooltip-content').innerHTML

  tippy(faqTooltip, {
    content: content,
    theme: 'stellaire-dark',
    maxWidth: 500,
    allowHTML: true,
    arrow: false,
  });
});

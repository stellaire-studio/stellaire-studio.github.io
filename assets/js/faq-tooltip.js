const getPreferredScheme = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'stellaire-dark' : 'stellaire-light';

let faqsTooltips = document.querySelectorAll('.faq-tooltip')

faqsTooltips.forEach((faqTooltip) => {
  let content = faqTooltip.querySelector('.faq-tooltip-content').innerHTML

  let visitorThemeMode = getPreferredScheme()
  let tooltipTheme     = faqTooltip.dataset.tooltipTheme || getPreferredScheme() || 'stellaire-light'

  tippy(faqTooltip, {
    content: content,
    theme: tooltipTheme,
    maxWidth: 500,
    allowHTML: true,
    arrow: false
  });
});

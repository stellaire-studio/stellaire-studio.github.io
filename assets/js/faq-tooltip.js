const getPreferredScheme = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'stellaire-dark' : 'stellaire-light';

const faqsTooltips     = document.querySelectorAll('.faq-tooltip')
const visitorThemeMode = getPreferredScheme()

faqsTooltips.forEach((faqTooltip) => {
  let content      = faqTooltip.querySelector('.faq-tooltip-content').innerHTML
  let tooltipTheme = faqTooltip.dataset.tooltipTheme || visitorThemeMode || 'stellaire-light'

  tippy(faqTooltip, {
    content: content,
    theme: tooltipTheme,
    maxWidth: 500,
    allowHTML: true,
    arrow: false
  });
});

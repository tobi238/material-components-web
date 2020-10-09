import { MDCRipple } from '@material/ripple/index';


function init() {
  console.info('init');

  for (const btn of document.querySelectorAll('.mdc-button')) {
    const ripple = new MDCRipple(btn);
  }
}


window.addEventListener('load', () => init());

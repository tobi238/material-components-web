import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar'
import { MDCTextField } from '@material/textfield';

function init() {
  console.info('init');

  // Ripple effect 
  for (const btn of document.querySelectorAll('.mdc-button')) {
    const ripple = new MDCRipple(btn);
  }

  // Top Bar
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  const topAppBar = new MDCTopAppBar(topAppBarElement);

  // Text field
  const textField = new MDCTextField(document.querySelector('.search-field'));
  const searchFieldInput = document.getElementById('search-field-input') as HTMLInputElement;
  searchFieldInput.addEventListener('input', (e) => {
    console.log('search triggered', e);
    e.preventDefault();
    searchFieldInput.value = ''
  })
}


window.addEventListener('load', () => init());

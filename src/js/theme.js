const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const switchEl = document.querySelector('#theme-switch-toggle');

switchEl.addEventListener('change', onSwitchChange);
const STORAGE_KEY = 'lightTheme';
const isLightTheme = localStorage.getItem(STORAGE_KEY);

function changeThemeCheckbox() {
  if (isLightTheme === 'false') {
    bodyEl.classList.add(theme.DARK);
    switchEl.checked = true;
  } else {
    bodyEl.classList.add(theme.LIGHT);
  }
}
changeThemeCheckbox();

function onSwitchChange(evt) {
  bodyEl.classList.toggle(theme.LIGHT);
  bodyEl.classList.toggle(theme.DARK);

  const isLight = bodyEl.classList.contains(theme.LIGHT);
  localStorage.setItem(STORAGE_KEY, isLight);
}

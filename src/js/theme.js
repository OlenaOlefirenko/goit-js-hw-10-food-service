const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const switchEl = document.querySelector('#theme-switch-toggle');

bodyEl.classList.add(theme.LIGHT);
switchEl.addEventListener('change', onSwitchChange);
bodyEl.classList.add(theme.LIGHT);
const STORAGE_KEY = 'lightTheme';
const savedTheme = localStorage.getItem(STORAGE_KEY);

function changeThemeCheckbox() {
  if (savedTheme === 'false') {
    bodyEl.classList.remove(theme.LIGHT);
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

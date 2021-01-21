const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkThemeRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');
console.log(checkThemeRef)
// default
bodyRef.classList.add(`${Theme.LIGHT}`);
localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
const savedTheme = localStorage.getItem('theme');

if (savedTheme === JSON.stringify(Theme.DARK)) {
toDarkTheme()
}

function toDarkTheme() {
  checkThemeRef.setAttribute('checked', 'true');
  bodyRef.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));
}

function toLigthTheme() {
  checkThemeRef.removeAttribute('checked');
  bodyRef.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function changeTheme() {
  if(checkThemeRef.hasAttribute('checked')){
    toLigthTheme()
  }
  toDarkTheme()
}
 //toDarkTheme()
// toLigthTheme()

checkThemeRef.addEventListener('change', changeTheme());

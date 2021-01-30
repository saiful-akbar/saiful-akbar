import Cookies from 'universal-cookie';

// cookie
const cookie = new Cookies();
const cookieTheme = cookie.get('theme');

// Redux state
export const reduxState = {
  theme: Boolean(cookieTheme === 'dark') ? 'dark' : 'light'
};

// Redux action
export const reduxAction = {
  theme: 'SET_THEME'
};

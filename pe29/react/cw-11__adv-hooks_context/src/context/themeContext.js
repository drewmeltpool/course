import {createContext} from "react";

export const themes = {
  light: {
    bg: '#eee',
    primary: '#c2c2c2',
    secondary: '#333'
  },
  dark: {
    bg: '#333',
    primary: '#fefefe',
    secondary: '#efefef'
  }
};

const ThemeContext = createContext(themes.dark);

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
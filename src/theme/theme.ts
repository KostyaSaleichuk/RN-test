export enum Themes {
  dark = 'dark',
  light = 'light',
}

export const darkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(58, 71, 78)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(101, 114, 122)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(255, 255, 255)',
    notification: 'rgb(225, 52, 52)',
  },
};

export const lightTheme = {
  dark: false,
  colors: {
    primary: 'rgb(180, 206, 220)',
    background: 'rgb(244, 243, 244)',
    card: 'rgb(218, 233, 253)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(0, 0, 0)',
    notification: 'rgb(225, 52, 52)',
  },
};

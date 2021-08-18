import { chalkColor, color, label } from './types';

const color = {
  red: 'crimson',
  pink: 'violet',
  purple: 'darkviolet',
  deepPurple: 'blueviolet',
  indigo: 'royalblue',
  blue: 'dodgerblue',
  lightBlue: 'deepskyblue',
  cyan: 'darkturquoise',
  teal: 'mediumseagreen',
  green: 'lime',
  lightGreen: 'greenyellow',
  lime: 'khaki',
  yellow: 'yellow',
  amber: 'gold',
  orange: 'orange',
  deepOrange: 'coral',
  brown: 'rosybrown',
  gray: 'darkgray',
  blueGray: 'lightslategray',
  white: 'white',
  black: 'black',
} as { [key in color]: chalkColor };

const label = {
  log: color.white,
  info: color.blue,
  success: color.green,
  warn: color.orange,
  error: color.red,
} as { [key in label]: color };

export default {
  color,
  label,
};

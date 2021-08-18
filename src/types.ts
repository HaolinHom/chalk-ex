export type chalkColor =
  | 'crimson'
  | 'violet'
  | 'darkviolet'
  | 'blueviolet'
  | 'royalblue'
  | 'dodgerblue'
  | 'deepskyblue'
  | 'darkturquoise'
  | 'mediumseagreen'
  | 'lime'
  | 'greenyellow'
  | 'khaki'
  | 'yellow'
  | 'gold'
  | 'orange'
  | 'coral'
  | 'rosybrown'
  | 'darkgray'
  | 'lightslategray'
  | 'white'
  | 'black';

export type color =
  | 'red'
  | 'pink'
  | 'purple'
  | 'deepPurple'
  | 'indigo'
  | 'blue'
  | 'lightBlue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lightGreen'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'deepOrange'
  | 'brown'
  | 'gray'
  | 'blueGray'
  | 'white'
  | 'black';

export type label = 'log' | 'info' | 'success' | 'warn' | 'error';

type labelFn = (text: string) => string;
type textFn = (...text: unknown[]) => string;

export interface stdLabel {
  // label
  log: string,
  info: string,
  success: string,
  warn: string,
  error: string,
  // color
  red: labelFn,
  pink: labelFn,
  purple: labelFn,
  deepPurple: labelFn,
  indigo: labelFn,
  blue: labelFn,
  lightBlue: labelFn,
  cyan: labelFn,
  teal: labelFn,
  green: labelFn,
  lightGreen: labelFn,
  lime: labelFn,
  yellow: labelFn,
  amber: labelFn,
  orange: labelFn,
  deepOrange: labelFn,
  brown: labelFn,
  gray: labelFn,
  blueGray: labelFn,
  white: labelFn,
  black: labelFn,
}

export interface stdText {
  red: textFn,
  pink: textFn,
  purple: textFn,
  deepPurple: textFn,
  indigo: textFn,
  blue: textFn,
  lightBlue: textFn,
  cyan: textFn,
  teal: textFn,
  green: textFn,
  lightGreen: textFn,
  lime: textFn,
  yellow: textFn,
  amber: textFn,
  orange: textFn,
  deepOrange: textFn,
  brown: textFn,
  gray: textFn,
  blueGray: textFn,
  white: textFn,
  black: textFn,
}

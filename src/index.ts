import chalk from 'chalk';
import config from './config';
import { chalkColor, stdLabel, stdText } from './types';

function createLabel(content, color: chalkColor) {
  return chalk.black.bgKeyword(color)(` ${content} `);
}

function createColorLabel(color: chalkColor) {
  return function (content: string) {
    return createLabel(content, color);
  };
}

function createColorText(color: chalkColor) {
  return function (content: unknown[]) {
    return chalk.keyword(color)(content);
  };
}

let label = {} as stdLabel;
let text = {} as stdText;

for (let l in config.label) {
  label[l] = createLabel(l.toUpperCase(), config.label[l]);
}

for (let c in config.color) {
  label[c] = createColorLabel(config.color[c]);
  text[c] = createColorText(config.color[c]);
}

function log(...args: unknown[]) {
  console.log(...args);
}

export {
  log,
  label,
  text,
};

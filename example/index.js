const std = require('../index');
const color = require('../config/color');

std('Hello world!');
std.log('Hello world!');
std.info('Hello world!');
std.success('Hello world!');
std.warn('Hello world!');
std.error('Hello world!');
std.label('test')('Hello world!');

console.log(`
`);

Object.values(color).forEach((color) => {
  std.label(color)[color](color);
});
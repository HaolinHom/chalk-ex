const std = require('../index');
const color = require('../config/color');

std('foo bar');
std.log('foo bar');
std.info('foo bar');
std.success('foo bar');
std.warn('foo bar');
std.error('foo bar');
std.label('test')('foobar');

console.log(`
`);

Object.values(color).forEach((color) => {
  std.label(color)[color](color);
});
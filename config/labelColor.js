const label = require('./label');
const color = require('./color');

module.exports = {
  [label.log]: color.white,
  [label.info]: color.blue,
  [label.success]: color.green,
  [label.warn]: color.orange,
  [label.error]: color.red,
};
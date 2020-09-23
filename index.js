const chalk = require('chalk');
const color = require('./config/color');
const colorKeyword = require('./config/colorKeyword');
const label = require('./config/label');
const labelColor = require('./config/labelColor');
const fromEntries = require('./utils/fromEntries');

const colors = fromEntries(
  Object.values(color).map(color => [
    color,
    {
      get() {
        this._obj.color = color;
        return this;
      },
    }
  ])
);

const labelList = Object.values(label);

const labels = fromEntries(
  labelList.map(label => [
    label,
    {
      get() {
        this._obj.label = label.trim().toLowerCase();
        this._obj.color = labelColor[this._obj.label];
        return this;
      }
    }
  ])
);

function stdLogger(...args) {
  let content = [];

  const _label = stdLogger._obj.label;
  const _color = colorKeyword[stdLogger._obj.color || _label && labelColor[_label] || color.white];

  if (_label) {
    content.push(chalk.black.bgKeyword(_color)(` ${_label.toUpperCase()} `));
  }

  if (args.length > 0) {
    args.forEach((arg) => {
      content.push(
        typeof arg === 'string' ? chalk.keyword(_color)(arg) : arg
      );
    });
  }

  console.log(...content);
  stdLogger.reset();
}

stdLogger._obj = {
  label: null,
  color: null,
};

stdLogger.reset = function () {
  this._obj.label = null;
  this._obj.color = null;
};

var std = Object.defineProperties(stdLogger, {
  ...colors,
  ...labels,
  label: {
    get() {
      return (label) => {
        if (label && typeof label === 'string') {
          this._obj.label = label.trim().toLowerCase();
          if (labelList.includes(this._obj.label)) {
            this._obj.color = labelColor[this._obj.label];
          }
        }
        return this;
      };
    },
  },
});

Object.freeze(std);

module.exports = std;
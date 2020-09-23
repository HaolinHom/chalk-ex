# std-terminal-logger

An easy use console print terminal with string styling.

## Installation

```bash
npm i std-terminal-logger
```

## Usage

```javascript
const std = require('std-terminal-logger');

std('Hello world!');
```

### use with provide additional preset label

* log
* info
* success
* warn
* error

```javascript
const std = require('std-terminal-logger');

std.log('Hello world!');
```

### use with custom label

```javascript
const std = require('std-terminal-logger');

std.label('custom_label')('Hello world!');
```

### use with additional preset color

* red
* pink
* purple
* deepPurple
* indigo
* blue
* lightBlue
* cyan
* teal
* green
* lightGreen
* lime
* yellow
* amber
* orange
* deepOrange
* brown
* gray
* blueGray
* white
* black

```javascript
const std = require('std-terminal-logger');

std.red('Hello world!');
```

### freely combine and use `label` and `color`

```javascript
const std = require('std-terminal-logger');

std.info.green('Hello world!');

std.orange.log('Hello world!');

std.label('label').blue('Hello world!');
```
# std-logger

An easy use console print terminal with string styling.

## Installation

```bash
npm i std-logger
```

## Usage

```javascript
const std = require('std-logger');

std('std-logger');
```

### use with provide additional preset label

* log
* info
* success
* warn
* error

```javascript
const std = require('std-logger');

std.log('std-logger');
```

### use with custom label

```javascript
const std = require('std-logger');

std.label('custom_label')('std-logger');
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
const std = require('std-logger');

std.red('std-logger');
```

### freely combine and use `label` and `color`

```javascript
const std = require('std-logger');

std.info.green('std-logger');

std.orange.log('std-logger');

std.label('label').blue('std-logger');
```
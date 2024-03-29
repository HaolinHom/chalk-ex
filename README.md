# chalk-ex

An easy use console print terminal with string styling with [chalk](https://github.com/chalk/chalk).

This package is now pure ESM, Require Node.js ^12.20.0 || ^14.13.1 || >=16.0.0.

## Installation

pnpm

```bash
pnpm add chalk chalk-ex
```

npm

```bash
npm i chalk chalk-ex
```

yarn

```bash
yarn add chalk chalk-ex
```

## Usage

```javascript
import { label, text } from 'chalk-ex';

console.log(label.green('Hello world!'), text.orange('Hello world!'));
```

![](https://raw.githubusercontent.com/HaolinHom/pic-go-bag/std-terminal-logger/usage-hello-world.png)

### use with the preset label

* log
* info
* success
* warn
* error

```javascript
import { label } from 'chalk-ex';

console.log(label.log, label.info, label.success, label.warn, label.error);
```

![](https://raw.githubusercontent.com/HaolinHom/pic-go-bag/std-terminal-logger/usage-default-label.png)

### use with the preset color

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
import { label, text } from 'chalk-ex';

console.log(label.green('Foo'), text.green('bar'));
```

![](https://raw.githubusercontent.com/HaolinHom/pic-go-bag/std-terminal-logger/usage-label-text.png)

All color:

![](https://raw.githubusercontent.com/HaolinHom/pic-go-bag/std-terminal-logger/usage-all-color.png)

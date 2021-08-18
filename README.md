# std-terminal-logger

An easy use console print terminal with string styling.

## Installation

pnpm

```bash
pnpm add std-terminal-logger chalk
```

npm

```bash
npm i std-terminal-logger chalk
```

yarn

```bash
yarn add std-terminal-logger chalk
```

## Usage

```javascript
import { log, label, text } from 'std-terminal-logger';

log(label.green('Hello world!'), text.orange('Hello world!'));
```

![](https://raw.githubusercontent.com/HaolinHom/pic-go-bag/std-terminal-logger/usage-hello-world.png)

### use with the preset label

* log
* info
* success
* warn
* error

```javascript
import { log, label } from 'std-terminal-logger';

log(label.log, label.info, label.success, label.warn, label.error);
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
import { log, label, text } from 'std-terminal-logger';

log(label.green('Foo'), text.green('bar'));
```

![](https://raw.githubusercontent.com/HaolinHom/pic-go-bag/std-terminal-logger/usage-label-text.png)

All color:

![](https://raw.githubusercontent.com/HaolinHom/pic-go-bag/std-terminal-logger/usage-all-color.png)

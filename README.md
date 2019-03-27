# Is Module

Check whether a source string looks like an ES6 module.
This doesn't actually execute the code,
and doesn't check other module types.
So source strings without any module loaders returns `false`.

This is just what I need from https://github.com/yahoo/js-module-formats, which actually executes the sauce string in a subcontext.

## API

```js
var isES6Module = require('is-module');

console.log(isES6Module('import * from "emitter";')) // => true
```
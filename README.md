# ez-map

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

A basic `Map`-like implementation.

## Installation

```
npm install ez-map
```

## Usage

``` javascript
var EzMap = require('ez-map')
var map   = new EzMap([
  ['foo', 'bar']
])

map.set('baz')
map.has('foo') // => true
map.get('baz') // => undefined

map.keys()    // => ['foo', 'baz']
map.values()  // => ['bar', undefined]
map.entries() // => [['foo', 'bar'], ['baz', undefined]]
map.size()    // => 2

map.forEach(function(value, key, context) {
  console.log(value)   // => <value>
  console.log(key)     // => <key>
  console.log(context) // => <map>
})

map.delete('foo') // => true
map.delete('qux') // => false
map.clear()
```

## Differences

- `.entries()` is the only way to get the entries.
- `.size()` (instead of `.size`) to get the size of the entries.
- `.forEach()` has no parameter for passing the context.

## See also

- [arrays-to-object](https://github.com/gummesson/arrays-to-object)

[npm-img]: https://img.shields.io/npm/v/ez-map.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ez-map
[license-img]: http://img.shields.io/npm/l/ez-map.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/ez-map.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/ez-map

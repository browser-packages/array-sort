# bp-array-sort

bp-array-sort is a failover implemenations for faulty Array.prototype.sort method browser's implementation

###### Stage: **work in progress**


## Installation

We use [requirehit](http://github.com/requirehit) for loading it into the browser, but you should be able to use it with other browser module manager.

To use on `nodejs`:

```
npm i --save bp-array-sort
```

## Usage

You could access `sort` method by saving it into a var:

```js
var sort = require( 'bp-array-sort' );

var myArray = [ 3, 6, 2, 5, 7, 4, 9, 8 ];

sort( myArray );
```

Or you can replace engine's native method:

```js
require( 'bp-array-sort' ).prototify();

var myArray = [ 3, 6, 2, 5, 7, 4, 9, 8 ];

myArray.sort();
```

It also behaves as engine's native method, that means that you could provide a `function` to run on each iteration:
```js
require( 'bp-array-sort' ).prototify();

var myArray = [ 3, 6, 2, 5, 7, 4, 9, 8 ];

// Randomly sort with 1:4 positive ratio
myArray.sort(function () {
  return ( Math.random() - 0.25 ) > 0;
});
```


## Motivation

Gabriel found out that some browsers where deployed with a faulty `sort`, so he ended up creating our own.
Inspite it's tiny as hell, that doesn't ovelaps how important it is for every frontend developers, as so,
we brought it to the Open-Source comunity so anyone could use, contribute and enjoy it.


## Maintainers

* [Gabriel Conceição (@gabrielpconceicao)](http://github.com/gabrielpconceicao)
* [José Moreira (@cusspvz)](http://github.com/cusspvz)
* [Hugo Passo (@hpvcd)](http://github.com/hpvcd)

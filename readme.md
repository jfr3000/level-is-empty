# level-is-empty

checks if your LevelDB is empty.

## Usage

``` javascript
var isEmpty = require('level-is-empty');
isEmpty(myDB, function(err, empty) {
    console.log('my db is ' + (empty ? 'empty' : 'not empty'));
});

```


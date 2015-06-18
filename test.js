var test = require('tape');
var level = require('level-test')({mem: true});
var isEmpty = require('./');

test('call callback with true when DB is empty', function(t) {
    t.timeoutAfter(500);
    var db = level('testDB');
    isEmpty(db, function(err, empty) {
        t.equal(err, null);
        t.equal(empty, true);
        t.end();
    });
});

test('call callback with false when DB is not empty', function(t) {
    t.timeoutAfter(500);
    var db = level('testDB');
    db.put('test', 'test', function() {
        isEmpty(db, function(err, empty) {
            t.equal(err, null);
            t.equal(empty, false);
            t.end();
        });
    });
});

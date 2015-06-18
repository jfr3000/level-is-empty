module.exports = function isEmpty(db, cb) {
    var readStream = db.createReadStream || db.readStream;
    var stream = readStream.apply(db, {
        keys: true,
        values: false,
        limit: 1
    });
    stream.on('data', function(data) {
        if (cb) cb(null, false);
        cb = null;
    });
    stream.on('end', function() {
        if (cb) cb(null, true);
        cb = null;
    });
    stream.on('error', function(err) {
        if (cb) cb(err);
        cb = null;
    });
};

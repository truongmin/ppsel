var compressor = require('node-minify');

// Using Google Closure Compiler
compressor.minify({
    compressor: 'gcc',
    input: ['index.js', 'views/dashboard/dashboard.js', 'views/device/device.js'],
    output: 'index.min.js',
    callback: function (err, min) {}
});

compressor.minify({
    compressor: 'csso',
    input: 'content/site.css',
    output: 'content/site.min.css',
    options: {
        restructureOff: true // turns structure minimization off
    },
    callback: function (err, min) { }
});
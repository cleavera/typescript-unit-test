var index = require('./index');

function getFlags(arguments) {
    var x,
        out = {};

    for (x = 0; x < arguments.length; x++) {
        var arg = arguments[x];

        if (arg.substring(0, 2) === '--') {
            out[arg.substring(2)] = arguments[++x];
        }
    }

    return out;
}

index(process.argv[process.argv.length - 1], getFlags(process.argv));
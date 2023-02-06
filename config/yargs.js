const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'This is the multiplicand (base).'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'List the table on console'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'This is the multiplier'

    })
    .check((argv,options) => {
        if (isNaN(argv.base)){
            throw 'Multiplicand must be a number';
        } 
        return true;
    })
    .check((argv,options) => {
        if (isNaN(argv.hasta)){
            throw 'Multiplier must be a number';
        } 
        return true;
    })
    .argv;

    module.exports = argv;
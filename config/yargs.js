

const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
                    .command('listar', 'Imprime en consola la tabla de multiplicacion', options)
                    .command('crear', 'Generar un archivo con la tabla de multiplicacion', options)
                    .help()
                    .argv;

module.exports = {
    argv
}
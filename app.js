
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

const argv  = require('./config/yargs').argv;

var colors = require('colors');


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// let argv2= process.argv;

// console.log('limite', argv.limite);


let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( nameFile => console.log(`Archivo creado: ${nameFile.blue}`))
            .catch(error => console.log(error));
    break;
    default:
        console.log('Comando no reconocido');
}


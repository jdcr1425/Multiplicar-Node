const {argv} = require('./config/yargs');
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then((archivo)=>{
            console.log(`Archivo creado con nombre ${archivo.green}`);
        })
        .catch((err)=>{
            console.log(err);
        }); 
    break;
    default:
    
    break;
}

//let base = process.argv[2].split('=')[1];
console.log(argv);
console.log(process.argv);


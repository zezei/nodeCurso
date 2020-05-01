// console.log(module) //Nos da informacion actula de la estrucuta del modulo
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10,
//         }
//     })
//     .command('crear', 'Crea una tabla de multiplicar pasando una base y un limite', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10,
//         }
//     })
//     .help()
//     .argv
const { argv } = require('./config/yargs');
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];
console.log(argv)
switch (comando) {
    case 'listar':
        listarTabla(argv.b, argv.l)
        break
    case 'crear':
        crearArchivo(argv.b, argv.l)
            .then(mensaje => console.log(`Archivo creado$ ${colors.red(mensaje)}`))
            .catch(e => console.log(e))
        break
    default:
        console.log("nada")
}
// let argv2 = process.argv

console.log(argv.limite)
// console.log(argv2)
// let parametro = argv[2]
// let base = parametro.split('=')[1]
// console.log(base)

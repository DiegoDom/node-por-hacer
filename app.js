const argv = require('./config/yargs').argv;
var colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        listado.forEach((tarea) => {
            let estado = tarea.completado == true ? colors.green('Compleado') : colors.red('No compleado');
            console.log('==========Por hacer=========='.bgBrightMagenta);
            console.log(tarea.descripcion);
            console.log(`Estado : ${ estado }`);
        });
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}
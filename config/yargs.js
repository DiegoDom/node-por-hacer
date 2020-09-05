const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const compleado = {
    default: true,
    alias: 'c',
    desc: 'Enviar el estado  de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, compleado })
    .command('listar', 'Obtener el listado de las tareas por hacer')
    .command('borrar', 'Elimina una tarea por hacer', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}
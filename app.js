// const argv = require('yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

const argv = require('./config/yargs').argv;

const comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('Crea una tarea por hacer');

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        // console.log('Muestra todas las tareas por hacer');

        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log('------------Por Hacer--------------'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('-----------------------------------'.green);

        }

        break;

    case 'actualizar':
        // console.log('Actualiza una tarea por hacer');
        const actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        /* if (actualizado) {
            console.log('Tarea actualizada');

        } else {
            console.log('La tarea no se pudo actualizar');
        } */

        break;
    case 'borrar':
        // console.log('Tarea eliminada');
        const borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
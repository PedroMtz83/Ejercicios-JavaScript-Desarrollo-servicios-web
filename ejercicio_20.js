//creacion de CRUD: Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:
// Agregar una tarea.
// Eliminar una tarea por id.
// Marcar una tarea como completada.
function crearTareas() {
    let tareas = [
        { id: 1, descripcion: "Tarea 1", completado: false },
        { id: 2, descripcion: "Tarea 2", completado: false },
        { id: 3, descripcion: "Tarea 3", completado: false },
        ];
        return tareas;
        };

function agregarTarea(){
    let tareas = crearTareas();
    let nuevaTarea = { id: tareas.length + 1, descripcion: prompt("Ingresa nueva tarea: "),
        completado: false
        };
        tareas.push(nuevaTarea);
        return tareas;
        };

        function eliminarTarea(){
            let tareas = crearTareas();
            let idTarea = parseInt(prompt("Ingresa id de la tarea a eliminar: "));
            let indice = tareas.findIndex(tarea => tarea.id === idTarea);
            if (indice !== -1) {
                tareas.splice(indice, 1);
                return tareas;
                } else {
                    return "Tarea no encontrada";
                    }
            };

        function tareaCompletada(){
            let tareas = crearTareas();
            let idTarea = parseInt(prompt("Ingresa id de la tarea a completar: "));
            let indice = tareas.findIndex(tarea => tarea.id === idTarea);
            if (indice !== -1) {
                tareas[indice].completado = true;
                return tareas;
                } else {
                    return "Tarea no encontrada";
                    }
        };
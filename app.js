// Función para obtener la lista de estudiantes
function getEstudiantes() {
    axios.get('http://127.0.0.1:8000/api/estudiantes')
        .then(function (response) {
            const estudiantes = response.data;
            const studentsList = document.getElementById('students');
            studentsList.innerHTML = '';
            estudiantes.forEach(function (estudiante) {
                const li = document.createElement('li');
                li.textContent = `${estudiante.nombre} ${estudiante.apellidos}`;
                studentsList.appendChild(li);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Función para obtener la lista de asignaturas
function getAsignaturas() {
    axios.get('http://127.0.0.1:8000/api/asignaturas')
        .then(function (response) {
            const asignaturas = response.data;
            const assignmentsList = document.getElementById('assignments');
            assignmentsList.innerHTML = '';
            asignaturas.forEach(function (asignatura) {
                const li = document.createElement('li');
                li.textContent = `${asignatura.nombre} - Curso: ${asignatura.curso}`;
                assignmentsList.appendChild(li);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Función para obtener la media global de las notas
function getMediaGlobal() {
    axios.get('http://127.0.0.1:8000/api/media')
        .then(function (response) {
            const mediaGlobal = response.data.media_global;
            document.getElementById('global-media').textContent = `La media global de las notas es: ${mediaGlobal}`;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Llamadas a las funciones cuando la página se cargue
window.onload = function() {
    getEstudiantes();
    getAsignaturas();
    getMediaGlobal();
};

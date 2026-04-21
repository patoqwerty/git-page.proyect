/**
 * Datos de ejemplo para la lista de tareas.
 * En una aplicación real, estos datos podrían venir de una API o LocalStorage.
 */
const tasks = [
    {
        id: 1,
        title: "COMPRAR PAN",
        description: "DEBE COMPRAR PAN PARA REGALAR.",
        status: "PENDIENTE"
    },
    {
        id: 2,
        title: "COMPRAR JABON",
        description: "LAVAR ROPA EN LA TARDE.",
        status: "pendiente"
    },
    {
        id: 3,
        title: "COMER 3 VECES AL DIA",
        description: "COMER A LAS HORAD CORRECTAS.",
        status: "pendiente"
    },
    {
        id: 4,
        title: "Reparar la bicicleta",
        description: "Ajustar los frenos delanteros y limpiar la cadena antes de la salida del domingo.",
        status: "pendiente"
    },
    {
        id: 5,
        title: "Actualizar currículum",
        description: "Añadir la última certificación de Diseño de Interfaces y revisar los datos de contacto.",
        status: "pendiente"
    }
];

/**
 * Función para renderizar las tareas en el DOM.
 */
function renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    
    // Limpiar el contenedor antes de renderizar (por si acaso)
    taskListContainer.innerHTML = '';

    tasks.forEach(task => {
        // Crear elemento de la tarjeta
        const card = document.createElement('article');
        card.className = 'task-card';

        // Determinar clases de estado
        const isCompleted = task.status === 'completada';
        const badgeClass = isCompleted ? 'status-completed' : 'status-pending';
        const statusLabel = isCompleted ? 'Completado' : 'En progreso';

        // Construir el contenido HTML
        card.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>
            <span class="status-badge ${badgeClass}">${statusLabel}</span>
        `;

        // Añadir al DOM
        taskListContainer.appendChild(card);
    });
}

// Ejecutar el renderizado cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de tareas cargado correctamente.");
    renderTasks();
});
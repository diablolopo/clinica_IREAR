const medicamentos = [];
const dispositivos = [];

// Función para agregar un medicamento
function agregarMedicamento() {
    const nombre = document.getElementById('medicamento-nombre').value;
    const fecha = document.getElementById('medicamento-fecha').value;

    if (nombre && fecha) {
        const medicamento = { nombre, fecha };
        medicamentos.push(medicamento);
        mostrarMedicamentos();
        alert(`Recordatorio creado para el medicamento: ${nombre} el ${fecha}`);
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Función para mostrar la lista de medicamentos
function mostrarMedicamentos() {
    const lista = document.getElementById('lista-medicamentos');
    lista.innerHTML = '';

    medicamentos.forEach(med => {
        const li = document.createElement('li');
        li.textContent = `Medicamento: ${med.nombre} - Recordatorio: ${med.fecha}`;
        lista.appendChild(li);
    });
}

// Función para agregar un dispositivo
function agregarDispositivo() {
    const nombre = document.getElementById('dispositivo-nombre').value;
    const tipo = document.getElementById('dispositivo-tipo').value;

    if (nombre && tipo) {
        const dispositivo = { nombre, tipo };
        dispositivos.push(dispositivo);
        mostrarDispositivos();
        alert(`Dispositivo agregado: ${nombre} - Tipo: ${tipo}`);
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Función para mostrar la lista de dispositivos
function mostrarDispositivos() {
    const lista = document.getElementById('lista-dispositivos');
    lista.innerHTML = '';

    dispositivos.forEach(dis => {
        const li = document.createElement('li');
        li.textContent = `Dispositivo: ${dis.nombre} - Tipo: ${dis.tipo}`;
        lista.appendChild(li);
    });
}

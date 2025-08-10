// Datos de la malla: { id, nombre, semestre, prereq }
const ramos = [
    // Semestre 1
    { id: "ODO103", nombre: "Introducción a la Odontología", semestre: 1, prereq: [] },
    { id: "MED103O", nombre: "Anatomía Topográfica y Embriología I", semestre: 1, prereq: [] },
    { id: "QIM201D", nombre: "Química", semestre: 1, prereq: [] },
    { id: "BIO214O", nombre: "Biología Celular I", semestre: 1, prereq: [] },
    { id: "ODO104", nombre: "Bioestadística", semestre: 1, prereq: [] },
    { id: "VRA100C", nombre: "Examen de Comunicación Escrita", semestre: 1, prereq: [] },
    { id: "VRA2000", nombre: "English Test", semestre: 1, prereq: [] },

    // Semestre 2
    { id: "ODO105", nombre: "Histología", semestre: 2, prereq: ["MED103O"] },
    { id: "MED104O", nombre: "Anatomía Topográfica y Embriología II", semestre: 2, prereq: ["MED103O"] },
    { id: "FIS109O", nombre: "Física para Odontología", semestre: 2, prereq: [] },
    { id: "BIO216O", nombre: "Biología Celular II", semestre: 2, prereq: ["BIO214O"] },
    { id: "FIL2001", nombre: "Filosofía ¿Para Qué?", semestre: 2, prereq: [] },

    // Semestre 3
    { id: "ODO205", nombre: "Neurociencias, Dolor y Oclusión", semestre: 3, prereq: ["ODO105", "MED104O"] },
    { id: "ODO206", nombre: "Preclínico de Odontología Restauradora I", semestre: 3, prereq: ["MED104O", "ODO105", "QIM201D"] },
    { id: "BIO254O", nombre: "Fisiología para Odontología", semestre: 3, prereq: ["BIO216O", "QIM201D", "ODO105"] },
    { id: "ODO207", nombre: "Epidemiología", semestre: 3, prereq: ["ODO104"] },
    { id: "TTF", nombre: "Electivo Formación Teológica", semestre: 3, prereq: [] },

    // ... Continuar con los demás semestres igual ...
];

// Generar HTML
function generarMalla() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

    const completados = JSON.parse(localStorage.getItem("completados")) || [];

    const semestres = [...new Set(ramos.map(r => r.semestre))];

    semestres.forEach(num => {
        const semestreDiv = document.createElement("div");
        semestreDiv.classList.add("semestre");

        const titulo = document.createElement("h2");
        titulo.textContent = `Semestre ${num}`;
        semestreDiv.appendChild(titulo);

        const ramosDiv = document.createElement("div");
        ramosDiv.classList.add("ramos");

        ramos.filter(r => r.semestre === num).forEach(ramo => {
            const div = document.createElement("div");
            div.classList.add("ramo");
            div.textContent = `${ramo.id} - ${ramo.nombre}`;

            const tienePrereq = ramo.prereq.length > 0;
            const cumplidos = ramo.prereq.every(p => completados.includes(p));

            if (tienePrereq && !cumplidos) {
                div.classList.add("bloqueado");
            }

            if (completados.includes(ramo.id)) {
                div.classList.add("completado");
            }

            div.addEventListener("click", () => {
                div.classList.toggle("completado");
                guardarProgreso();
                generarMalla();
            });

            ramosDiv.appendChild(div);
        });

        semestreDiv.appendChild(ramosDiv);
        contenedor.appendChild(semestreDiv);
    });
}

function guardarProgreso() {
    const completados = Array.from(document.querySelectorAll(".completado"))
        .map(div => div.textContent.split(" - ")[0]);
    localStorage.setItem("completados", JSON.stringify(completados));
}

window.onload = generarMalla;

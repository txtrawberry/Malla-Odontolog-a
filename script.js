const ramos = [
    // SEMESTRE 1
    { id: "ODO103", nombre: "Introducción a la Odontología", semestre: 1, prereq: [] },
    { id: "MED103O", nombre: "Anatomía Topográfica y Embriología I", semestre: 1, prereq: [] },
    { id: "QIM201D", nombre: "Química", semestre: 1, prereq: [] },
    { id: "BIO214O", nombre: "Biología Celular I", semestre: 1, prereq: [] },
    { id: "ODO104", nombre: "Bioestadística", semestre: 1, prereq: [] },
    { id: "VRA100C", nombre: "Examen de Comunicación Escrita", semestre: 1, prereq: [] },
    { id: "VRA2000", nombre: "English Test", semestre: 1, prereq: [] },

    // SEMESTRE 2
    { id: "ODO105", nombre: "Histología", semestre: 2, prereq: ["MED103O"] },
    { id: "MED104O", nombre: "Anatomía Topográfica y Embriología II", semestre: 2, prereq: ["MED103O"] },
    { id: "FIS109O", nombre: "Física para Odontología", semestre: 2, prereq: [] },
    { id: "BIO216O", nombre: "Biología Celular II", semestre: 2, prereq: ["BIO214O"] },
    { id: "FIL2001", nombre: "Filosofía ¿Para Qué?", semestre: 2, prereq: [] },

    // SEMESTRE 3
    { id: "ODO205", nombre: "Neurociencias, Dolor y Oclusión", semestre: 3, prereq: ["ODO105", "MED104O"] },
    { id: "ODO206", nombre: "Preclínico de Odontología Restauradora I", semestre: 3, prereq: ["MED104O", "ODO105", "QIM201D"] },
    { id: "BIO254O", nombre: "Fisiología para Odontología", semestre: 3, prereq: ["BIO216O", "QIM201D", "ODO105"] },
    { id: "ODO207", nombre: "Epidemiología", semestre: 3, prereq: ["ODO104"] },
    { id: "TTF", nombre: "Electivo Formación Teológica", semestre: 3, prereq: [] },

    // SEMESTRE 4
    { id: "ODO211", nombre: "Introducción a la Clínica Odontológica", semestre: 4, prereq: [] },
    { id: "ODO210", nombre: "Preclínico de Odontología Restauradora II", semestre: 4, prereq: ["FIS109O", "ODO206"] },
    { id: "ODO208", nombre: "Microbiología", semestre: 4, prereq: ["BIO216O", "ODO105"] },
    { id: "ODO212", nombre: "Imagenología Diagnóstica I", semestre: 4, prereq: ["MED104O", "FIS109O"] },
    { id: "ODO209", nombre: "Patología General", semestre: 4, prereq: ["BIO254O", "BIO216O", "MED104O"] },
    { id: "EFG", nombre: "Electivo Formación General", semestre: 4, prereq: [] },

    // SEMESTRE 5
    { id: "ODO309", nombre: "Odontología Clínica I", semestre: 5, prereq: ["ODO211", "ODO210", "ODO212", "ODO209", "ODO208"] },
    { id: "ODO310", nombre: "Preclínico de Rehabilitación Oral I", semestre: 5, prereq: ["ODO211", "ODO210"] },
    { id: "ODO311", nombre: "Preclínico de Periodoncia", semestre: 5, prereq: ["ODO208", "ODO209", "ODO211", "ODO212"] },
    { id: "ODO314", nombre: "Farmacología", semestre: 5, prereq: ["ODO209", "ODO208"] },
    { id: "ODO312", nombre: "Fisiopatología y Semiología", semestre: 5, prereq: [] },
    { id: "ODO313", nombre: "Patología Bucomaxilo-facial I", semestre: 5, prereq: [] },
    { id: "EFG5", nombre: "Electivo Formación General", semestre: 5, prereq: [] },

    // SEMESTRE 6
    { id: "ODO315", nombre: "Odontología Clínica II", semestre: 6, prereq: ["ODO309", "ODO314", "ODO310", "ODO313"] },
    { id: "ODO316", nombre: "Preclínico de Rehabilitación Oral II", semestre: 6, prereq: ["ODO310"] },
    { id: "ODO319", nombre: "Preclínico de Endodoncia", semestre: 6, prereq: ["ODO314", "ODO313"] },
    { id: "ODO317", nombre: "Salud Pública", semestre: 6, prereq: ["ODO207"] },
    { id: "ODO318", nombre: "Ética Clínica", semestre: 6, prereq: [] },
    { id: "EFG6A", nombre: "Electivo Formación General", semestre: 6, prereq: [] },
    { id: "EFG6B", nombre: "Electivo Formación General", semestre: 6, prereq: [] },

    // SEMESTRE 7
    { id: "ODO418", nombre: "Clínica Integral del Niño I", semestre: 7, prereq: [] },
    { id: "ODO419", nombre: "Clínica Integral del Adulto I", semestre: 7, prereq: [] },
    { id: "ODO420", nombre: "Cirugía Bucal I", semestre: 7, prereq: [] },
    { id: "ODO421", nombre: "Imagenología Diagnóstica II", semestre: 7, prereq: ["ODO313", "ODO312"] },
    { id: "EFG7", nombre: "Electivo Formación General", semestre: 7, prereq: [] },

    // SEMESTRE 8
    { id: "ODO423", nombre: "Clínica Integral del Niño II", semestre: 8, prereq: ["ODO418", "ODO420", "ODO421"] },
    { id: "ODO424", nombre: "Clínica Integral del Adulto II", semestre: 8, prereq: ["ODO419", "ODO420", "ODO421"] },
    { id: "ODO425", nombre: "Cirugía Bucal II", semestre: 8, prereq: ["ODO421", "ODO420"] },
    { id: "ODO422", nombre: "Patología Bucomaxilo-facial II", semestre: 8, prereq: ["ODO313", "ODO421"] },
    { id: "EFG8", nombre: "Electivo Formación General", semestre: 8, prereq: [] },

    // SEMESTRE 9
    { id: "ODO518", nombre: "Clínica Integral del Niño III", semestre: 9, prereq: ["ODO423"] },
    { id: "ODO519", nombre: "Clínica Integral del Adulto III", semestre: 9, prereq: ["ODO424", "ODO422"] },
    { id: "ODO520", nombre: "Cirugía Bucal III", semestre: 9, prereq: ["ODO425", "ODO422"] },
    { id: "ODO521", nombre: "Odontología Geriátrica I", semestre: 9, prereq: ["ODO422", "ODO424", "ODO425"] },
    { id: "ODO522", nombre: "Odontología Legal", semestre: 9, prereq: ["ODO317"] },

    // SEMESTRE 10
    { id: "ODO525", nombre: "Clínica Integral del Niño IV", semestre: 10, prereq: ["ODO518"] },
    { id: "ODO523", nombre: "Clínica Integral del Adulto IV", semestre: 10, prereq: ["ODO519"] },
    { id: "ODO524", nombre: "Cirugía Bucal IV", semestre: 10, prereq: ["ODO520"] },
    { id: "ODO526", nombre: "Odontología Geriátrica II", semestre: 10, prereq: ["ODO521"] },
    { id: "ODO527", nombre: "Administración en Salud", semestre: 10, prereq: ["ODO522"] },

    // SEMESTRE 11
    { id: "ODO619", nombre: "Internado", semestre: 11, prereq: ["ODO525", "ODO526", "ODO527", "ODO523", "ODO524"] },

    // SEMESTRE 12
    { id: "ODO620", nombre: "Cuidados Especiales en Odontología", semestre: 12, prereq: [] },
    { id: "ODO621", nombre: "Clínica Práctica Avanzada", semestre: 12, prereq: ["ODO527", "ODO620", "ODO525", "ODO526"] },
    { id: "ODO330X", nombre: "Optativo", semestre: 12, prereq: [] }
];

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

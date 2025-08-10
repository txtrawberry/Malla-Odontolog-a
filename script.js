body {
    font-family: Arial, sans-serif;
    background: #f8f9fa;
    text-align: center;
    margin: 0;
    padding: 0;
}

h1 {
    background: #004080;
    color: white;
    padding: 15px 0;
    margin: 0 0 20px 0;
}

.semestre {
    background: white;
    margin: 20px auto;
    padding: 15px;
    border-radius: 8px;
    width: 90%;
    max-width: 900px;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
}

.semestre h2 {
    color: #004080;
    margin-bottom: 15px;
}

.ramos {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.ramo {
    padding: 10px;
    background: white;
    border: 2px solid #ccc;
    border-radius: 6px;
    width: 250px;
    cursor: pointer;
    transition: all 0.3s;
}

.ramo:hover {
    border-color: #004080;
}

.bloqueado {
    opacity: 0.4;
    pointer-events: none;
}

.completado {
    background-color: lightgreen;
    border-color: green;
}

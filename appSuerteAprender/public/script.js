document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        displayFiles(this.dataset.subject);
    });
});

function displayFiles(subject) {
    const fileDisplayArea = document.getElementById('fileDisplayArea');
    fileDisplayArea.innerHTML = '';  // Limpiar área de archivos

    if (!subject) {
        fileDisplayArea.innerHTML = '<p>Por favor, selecciona una asignatura.</p>';
        return;
    }

    const files = {
        'Lengua y Literatura': ['1.pdf'],
        'Matemáticas': ['2.pdf'],
        'Inglés': ['3.pdf'],
        'Francés': ['4.pdf'],
        'Historia': ['Historia.pdf'],
        'Física y Química': ['FisicaQuimica.pdf']
    };

    const themes = {
        'Lengua y Literatura': ['Gramática', 'Literatura', 'Ortografía'],
        'Matemáticas': ['Álgebra', 'Geometría', 'Cálculo'],
        'Inglés': ['Gramática', 'Vocabulario', 'Pronunciación'],
        'Francés': ['Conjugación', 'Vocabulario', 'Expresiones'],
        'Historia': ['Mundo Contemporáneo', 'Historia de España', 'Historia Antigua'],
        'Física y Química': ['Física', 'Química', 'Laboratorio']
    };



    const themeList = themes[subject] || [];
    themeList.forEach(theme => {
        const themeButton = document.createElement('button');
        themeButton.innerText = theme;
        themeButton.className = 'theme-button';
        themeButton.onclick = function() {
            showThemeContent(files[subject][0]);
        };
        fileDisplayArea.appendChild(themeButton);
    });
}

function showThemeContent(file) {
    const contentDisplay = document.createElement('div');
    contentDisplay.innerHTML = `<p>Contenido de ${file}: <a href="/recursos/${file}" target="_blank">Descargar ${file}</a></p>`;
    fileDisplayArea.appendChild(contentDisplay);
}

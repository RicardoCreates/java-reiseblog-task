const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Funktion zum Speichern des Darkmode-Zustands im localStorage
function saveDarkModePreference(isDarkMode) {
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
}

// Funktion zum Laden des Darkmode-Zustands aus dem localStorage
function loadDarkModePreference() {
    const darkModePreference = localStorage.getItem('dark-mode');
    if (darkModePreference === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = 'Dark Mode';
    }

    // Stelle sicher, dass alle relevanten Elemente die korrekte Klasse erhalten
    const elements = document.querySelectorAll('header, nav a, main, h2, footer');
    elements.forEach(el => el.classList.toggle('dark-mode', body.classList.contains('dark-mode')));
}

// Event-Listener zum Umschalten des Darkmodes
toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    saveDarkModePreference(isDarkMode);
    toggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

    // Stelle sicher, dass alle relevanten Elemente die korrekte Klasse erhalten
    const elements = document.querySelectorAll('header, nav a, main, h2, footer');
    elements.forEach(el => el.classList.toggle('dark-mode', isDarkMode));
});

// Darkmode-Präferenz beim Laden der Seite wiederherstellen
loadDarkModePreference();

// Archivo: data_loader.js
// Este script se encarga de consolidar los datos de todos los archivos
// en dos variables globales que usará la aplicación.

// Las variables window.theoreticalContent y window.quizData
// ya han sido inicializadas y pobladas por los archivos individuales.
// Aquí solo nos aseguramos de que existan, aunque el código
// de cada archivo individual ya hace esta comprobación.

if (typeof window.theoreticalContent === 'undefined') {
    window.theoreticalContent = {};
}

if (typeof window.quizData === 'undefined') {
    window.quizData = {};
}
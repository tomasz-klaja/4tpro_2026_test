let mix = require('laravel-mix');

// wyłączenie powiadomień systemowych
mix.disableNotifications();

// ustawienie ścieżki do miejsca kompilacji plików
mix.setPublicPath('assets/dist');

// wskazanie plików źródłowych oraz nazw plików wynikowych
mix.js('assets/src/js/Index.js', 'script.js');
mix.sass('assets/src/scss/Index.scss', 'style.css');
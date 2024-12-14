// Function to set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get cookie value
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to set theme
function setTheme(theme) {
    var root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--font-color', '#FFFFFF');
        root.style.setProperty('--button-color', '#F08080');
        root.style.setProperty('--bg-color', '#202020');
        root.style.setProperty('--hr-color', '#C0C0C0');
        root.style.setProperty('--footer-bg-color', '#37444D');
        root.style.setProperty('--footer-font-color', '#FFFFFF');
    } else {
        root.style.setProperty('--font-color', '#000000');
        root.style.setProperty('--button-color', '#FDCA7E');
        root.style.setProperty('--bg-color', '#FFFFFF');
        root.style.setProperty('--hr-color', '#C0C0C0');
        root.style.setProperty('--footer-bg-color', '#37444D');
        root.style.setProperty('--footer-font-color', '#FFFFFF');
    }
}

// Function to toggle between light and dark themes
function toggleTheme() {
    var currentTheme = document.body.className || 'light';
    var newTheme = (currentTheme === 'light') ? 'dark' : 'light';
    document.body.className = newTheme;
    setCookie('theme', newTheme, 365); // Save theme preference in cookie for 1 year
    setTheme(newTheme); // Apply theme

    // Change the theme icon
    var themeIcon = document.getElementById('themeIcon');
    themeIcon.src = (newTheme === 'light') ? 'assets/sun.png' : 'assets/moon.png';
    var accountIcon = document.getElementById('accountIcon');
    accountIcon.src = (newTheme === 'light') ? 'assets/account.png' : 'assets/account_dark.png';
    var cartIcon = document.getElementById('cartIcon');
    cartIcon.src = (newTheme === 'light') ? 'assets/cart.png' : 'assets/cart_dark.png';
    var menuIcon = document.getElementById('menuIcon');
    menuIcon.src = (newTheme === 'light') ? 'assets/burger_menu.png' : 'assets/burger_menu_dark.png';
}

// Function to apply stored theme preference
window.onload = function() {
    var savedTheme = getCookie('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        setTheme(savedTheme); // Apply stored theme preference
        // Change the theme icon accordingly
        var themeIcon = document.getElementById('themeIcon');
        themeIcon.src = (savedTheme === 'light') ? 'assets/sun.png' : 'assets/moon.png';
        var accountIcon = document.getElementById('accountIcon');
        accountIcon.src = (savedTheme === 'light') ? 'assets/account.png' : 'assets/account_dark.png';
        var cartIcon = document.getElementById('cartIcon');
        cartIcon.src = (savedTheme === 'light') ? 'assets/cart.png' : 'assets/cart_dark.png';
        var menuIcon = document.getElementById('menuIcon');
        menuIcon.src = (savedTheme === 'light') ? 'assets/burger_menu.png' : 'assets/burger_menu_dark.png';
    }
};

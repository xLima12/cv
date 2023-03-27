const changeThemeBtn = document.querySelector('#change-theme');

function toogleDarkMode() {
    document.querySelector('.cardLeft').classList.toggle('dark');
    document.querySelector('.about').classList.toggle('dark');
    document.querySelector('.works').classList.toggle('dark');
    document.querySelector('.education').classList.toggle('dark');
    document.querySelector('.projects').classList.toggle('dark');
}

//load theme save
function loadTheme() {
    const darkTheme = localStorage.getItem('dark');

    if(darkTheme) {
        toogleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener('change', () => {
    toogleDarkMode();

    //save or remove dark theme
    localStorage.removeItem('dark');

    if(document.querySelector('.cardLeft').classList.contains('dark') && 
        document.querySelector('.about').classList.contains('dark') &&
        document.querySelector('.works').classList.contains('dark') &&
        document.querySelector('.education').classList.contains('dark') &&
        document.querySelector('.projects').classList.contains('dark')) {
        localStorage.setItem('dark', 1);
    }
})

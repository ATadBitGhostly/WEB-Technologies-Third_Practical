// Didn't use getElementbyClassName cause well it would select all elements with navbar, and I would have to write [0] at the end.
// Used querySelector cause it can find any CSS Selector and always returns the first element.
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})

const date = new Date();
document.getElementById('dynamicDate').innerHTML = date.getFullYear();


const footer = document.querySelector('footer');

footer.addEventListener('mouseenter', function() {
    footer.classList.add('hoverEffect');
    // console.log('YOU SHALL ENTER!');
})

footer.addEventListener('mouseleave', function() {
    footer.classList.remove('hoverEffect');
    // console.log('YOU SHALL LEAVE!');
})


const btn = document.getElementById('themeToggler');
const darkIcon = document.getElementById('dark-mode-icon');

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkIcon.classList.remove('bi-moon-stars')
        darkIcon.classList.add('bi-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        darkIcon.classList.add('bi-moon-stars')
        darkIcon.classList.remove('bi-sun');
        localStorage.setItem('theme-icon', 'dark');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkIcon.classList.remove('bi-moon-stars')
    darkIcon.classList.add('bi-sun');
}

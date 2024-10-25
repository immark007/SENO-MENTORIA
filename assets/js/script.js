const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');

    if (navigation.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

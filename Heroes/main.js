const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li')
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        //animation

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }


        })

        //burger animation
        burger.classList.toggle('toggle')
    });


}

navSlide()


//collapsible contents

document.querySelectorAll('.btnStory').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('btnStory--active');
        if (button.classList.contains('btnStory--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    })
})

//login and registration

let loginButton = document.querySelector('#login');
let loginWindow = document.querySelector('.login-window');
let regWindow = document.querySelector('.reg-window');
let regButton = document.querySelector('#registration')

loginButton.addEventListener('click', () => {
    loginWindow.classList.toggle("login-windowVisible");
    regWindow.classList.remove("reg-windowVisible");
    ú
})

regButton.addEventListener('click', () => {
    regWindow.classList.toggle("reg-windowVisible");
    loginWindow.classList.remove("login-windowVisible")
})
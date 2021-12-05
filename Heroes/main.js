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
let regButton = document.querySelector('#registration');
let regB = document.querySelector('#reg');
let regRequest = document.querySelector('#regRequest');
let loginRequest = document.querySelector('#loginRequest')
let pwForget = document.querySelector('#forgottenPass')
let reminderWindow = document.querySelector('.reminder-window')
let close = document.querySelector("#close")
let close2 = document.querySelector("#close2")
let close3 = document.querySelector("#close3")

loginButton.addEventListener('click', () => {
    loginWindow.classList.toggle("login-windowVisible");
    regWindow.classList.remove("reg-windowVisible");

})

regButton.addEventListener('click', () => {
    regWindow.classList.toggle("reg-windowVisible");
    loginWindow.classList.remove("login-windowVisible")
    reminderWindow.classList.remove("reminder-windowVisible")
})

regB.addEventListener('click', () => {
    loginWindow.classList.remove("login-windowVisible")
    regWindow.classList.toggle("reg-windowVisible");
    reminderWindow.classList.remove("reminder-windowVisible")
})



pwForget.addEventListener('click', () => {
    loginWindow.classList.remove("login-windowVisible")
    reminderWindow.classList.add("reminder-windowVisible")
})

close.addEventListener('click', () => {
    reminderWindow.classList.remove("reminder-windowVisible")
})
close2.addEventListener('click', () => {
    regWindow.classList.remove("reg-windowVisible")
})
close3.addEventListener('click', () => {
    loginWindow.classList.remove("login-windowVisible")
})

loginRequest.addEventListener('click', (e) => {
    e.preventDefault
})

regRequest.addEventListener('click', (e) => {
    e.preventDefault
})


//Parallax back to the top of the page button opacity effect by scrolling

window.addEventListener('scroll', () => {
    let parWindow = document.querySelector('.parWindow')
    let position = window.pageYOffset / 600;
    if (position < 1.2) {
        parWindow.style.opacity = (0)
    } else {
        parWindow.style.opacity = (1)
    }


})
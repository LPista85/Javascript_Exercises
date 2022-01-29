const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks')

hamburger.addEventListener('click', ()=>{
   
    hamburger.classList.toggle('hamburgerTwo')
    navLinks.classList.toggle('navLinkstwo')
    
})


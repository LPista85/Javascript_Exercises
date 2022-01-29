let hamburger = document.querySelector('.hamburger')
let navLinks = document.querySelector('.navLinks')
let tripcontainer = document.querySelector('.tripContainer');

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('navLinks2')
    hamburger.classList.toggle('hamburger2')
})



window.addEventListener('scroll', ()=> {
    let pozition = window.pageYOffset;
    let intro = document.querySelector('.introduction')
    
    if( pozition < 250){
        intro.style.height = "700px"
    } else if(pozition >= 250 && pozition <= 790){
      intro.style.height = 700 - (pozition / 2) + 160 + "px";
    
    } else {
        intro.style.height = "483px"
    }
})

window.addEventListener('scroll', () =>{
    let pozition = window.pageYOffset;
    let adventure = document.querySelector('.adventure');
    let navBar = document.querySelector('.navbar')
    let introductionSection = document.querySelector('.introduction')
    if( pozition >= 530){
        adventure.style.transform = "translateX(0%)";
        navBar.style.backgroundColor = "#070707ff"
        navBar.style.borderBottom = "2px solid #f5af19"
        introductionSection.style.backgroundColor = "#fafafa"
        introductionSection.style.borderLeft = " 1px solid #ddd"
        introductionSection.style.borderRight = " 1px solid #ddd"
    
    } else{
        adventure.style.transform = "translateX(-100%)"
        navBar.style.backgroundColor = "#07070771"
        navBar.style.borderBottom = "2px solid #070707"
        introductionSection.style.backgroundColor = "#fff"
        introductionSection.style.borderLeft = " none"
        introductionSection.style.borderRight = " none"
    }

   if(pozition > 1960){
        tripcontainer.style.backgroundColor = "#fafafa"
        tripcontainer.style.borderLeft = " 1px solid #ddd"
        tripcontainer.style.borderRight = " 1px solid #ddd"
   } else {
    tripcontainer.style.backgroundColor = "#fff"
    tripcontainer.style.borderLeft = " none"
    tripcontainer.style.borderRight = " none"
   }
   
    console.log(pozition)
    
})

//mouse over advert

let advert = document.querySelector('#advert1')

advert.addEventListener('mouseenter', ()=> {
    let purple = document.querySelector('#purple')
    let paragraphs = purple.querySelectorAll("p")

    for(par of paragraphs){
        
        par.style.transform = "translateX(0)"
        
    }

    
    
})
advert.addEventListener('mouseleave', ()=> {
    let purple = document.querySelector('#purple')
    let paragraphs = purple.querySelectorAll("p")

    for(par of paragraphs){
        par.style.transform = "translateX(-100%)"
    }
    
})


//Cards



let tenHighest = [{mountain: "Scafell Pike", height: "978m", carpark: "Seascale CA20 1EX", photo: "img/scafell_pike.jpg", date: "Tbc" }, 
{mountain: "Scafell", height: "964", carpark: "Seascale CA20 1EX", photo: "img/scafell.jpg", date: "Tbc" }, 
{mountain: "Helvellyn", height: "950m", carpark: "Keswick CA12 4TW", photo: "img/helvellyn.jpg", date: "27/03/2022" }, 
{mountain: "Skiddaw", height: "931m", carpark: "Keswick CA12 4QE", photo: "img/skiddaw.jpg", date: "Tbc" },
{mountain: "Great End", height: "910m", carpark: "Seascale CA20 1EX", photo: "img/great_end.jpg", date: "Tbc" },
{mountain: "Bowfell", height: "902m", carpark: "Seascale CA20 1EX", photo: "img/Bowfell.jpg", date: "Tbc" },
{mountain: "Great Gable ", height: "899m", carpark: "Seascale CA20 1EX", photo: "img/great_gable.jpg", date: "Tbc" },
{mountain: "Pillar ", height: "892m", carpark: "Seascale CA20 1EX", photo: "img/pillar.jpg", date: "Tbc" },
{mountain: "Nethermost Pike", height: "891m", carpark: "Keswick CA12 4TW", photo: "img/Nethermost_Pike.jpg", date: "27/03/2022" },
{mountain: "Catsty cam", height: "891m", carpark: "Keswick CA12 4TW", photo: "img/Catstycam.jpg", date: "27/03/2022" },
]




for(let i = 0 ; i < tenHighest.length ; i++){
    
    //list of mountains

    let mountainList = document.querySelector('#mountainList')
    let listOfMoutnains = document.createElement("p")
    listOfMoutnains.innerText = tenHighest[i].mountain
    mountainList.append(listOfMoutnains)


    //event Cards
    let mountainCard = document.createElement('div');
    mountainCard.classList.add("mountainCard");

    let photoSection = document.createElement('div')
    photoSection.classList.add("photoSection")
    photoSection.style.backgroundImage = `url("${tenHighest[i].photo}")`;

    let textSection = document.createElement("div");
    textSection.style.backgroundColor = "#eee"
    textSection.classList.add("textSection")
    
    
    let h2 = document.createElement("h2");
    h2.innerText = tenHighest[i].mountain;
    h2.style.textAlign = "center"

    let h4 = document.createElement("h4");
    h4.innerText = `Height: ${tenHighest[i].height}`;

    let h42 = document.createElement("h4")
    h42.innerText = `Date: ${tenHighest[i].date}`

    let join = document.createElement("a");
    join.innerText = "Join"
    join.href = "mailto:pistalaszlo@ymail.com"
    
    let carpark = document.createElement('p');
    carpark.innerText = ` Carpark: ${tenHighest[i].carpark}`;

    textSection.append(h2, h4, h42, carpark, join);
    mountainCard.append(photoSection)
    mountainCard.append(textSection)

    tripcontainer.append(mountainCard)


    
    
}
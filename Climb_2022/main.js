let tenHighest = [{mountain: "Scafell Pike", height: "978m", carpark: "Seascale CA20 1EX", photo: "img/scafell_pike.jpg" }, 
{mountain: "Scafell", height: "964", carpark: "Seascale CA20 1EX", photo: "img/scafell.jpg" }, 
{mountain: "Helvellyn", height: "950m", carpark: "Keswick CA12 4TW", photo: "img/helvellyn.jpg" }, 
{mountain: "Skiddaw", height: "931m", carpark: "Keswick CA12 4QE", photo: "img/skiddaw.jpg" },
{mountain: "Great End", height: "910m", carpark: "Seascale CA20 1EX", photo: "img/great_end.jpg" },
{mountain: "Bowfell", height: "902m", carpark: "Seascale CA20 1EX", photo: "img/Bowfell.jpg" },
{mountain: "Great Gable ", height: "899m", carpark: "Seascale CA20 1EX", photo: "img/great_gable.jpg" },
{mountain: "Pillar ", height: "892m", carpark: "Seascale CA20 1EX", photo: "img/pillar.jpg" },
{mountain: "Nethermost Pike", height: "891m", carpark: "Keswick CA12 4TW", photo: "img/Nethermost_Pike.jpg" },
{mountain: "Catsty cam", height: "891m", carpark: "Keswick CA12 4TW", photo: "img/Catstycam.jpg" }]


let tripcontainer = document.querySelector('.tripContainer');

for(let i = 0 ; i < tenHighest.length ; i++){
    let mountainCard = document.createElement('div');
    mountainCard.classList.add("mountainCard");
    let photoSection = document.createElement('div')
    photoSection.classList.add("photoSection")
    photoSection.style.backgroundImage = `url("${tenHighest[i].photo}")`;
    let textSection = document.createElement("div");
    textSection.style.backgroundColor = "#eee"
    textSection.classList.add("textSection")
    mountainCard.append(photoSection)
    tripcontainer.append(mountainCard)
    let h2 = document.createElement("h2");
    h2.innerText = tenHighest[i].mountain;
    h2.style.textAlign = "center"
    let h4 = document.createElement("h4");
    h4.innerText = `Height: ${tenHighest[i].height}`;
    let carpark = document.createElement('p');
    carpark.innerText = ` Carpark: ${tenHighest[i].carpark}`;
    textSection.append(h2, h4, carpark);
    mountainCard.append(textSection)


    
    
}
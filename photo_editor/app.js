//global variables

let photoCanvas = document.querySelector('.photoCanvas');

let contrastRange = document.querySelector('#contrast');
let contrastReset = document.querySelector('.contrastReset');

let brightnessRange = document.querySelector('#brightness');
let brightnessReset = document.querySelector('.brightnessReset');

let saturationRange = document.querySelector('#saturation');
let saturationReset = document.querySelector('.saturationReset')

let upload = document.querySelector('#upload');
let uploadButton = document.querySelector('#uploadButton');


//byPass filters



// functions
function contrastfunction(){
    contrastRange.value = 100;
    photoCanvas.style.filter = `contrast(100%) brightness(${brightnessRange.value}%) saturate(${saturationRange.value}%)`
}

function brightnessfunction(){
    brightnessRange.value = 100;
    photoCanvas.style.filter = `contrast(${contrastRange.value}%) brightness(100%) saturate(${saturationRange.value}%)`
}

function saturationfunction(){
    saturationRange.value = 100;
    photoCanvas.style.filter = `contrast(${contrastRange.value}%) brightness(${brightnessRange.value}%) saturate(100%)`
}

function doItAll(){
    photoCanvas.style.filter = `contrast(${contrastRange.value}%) brightness(${brightnessRange.value}%) saturate(${saturationRange.value}%)`
}
//contrast
contrastRange.addEventListener('mousemove', ()=>{
    doItAll()
})

contrastReset.addEventListener('click', ()=> {
    contrastfunction()
})


//brightness


brightnessRange.addEventListener('mousemove', ()=>{
    doItAll()
})

brightnessReset.addEventListener('click', ()=> {
    brightnessfunction()
})

//saturation
saturationRange.addEventListener('mousemove', ()=>{
    doItAll()
})

saturationReset.addEventListener('click', ()=> {
    saturationfunction()
})

//upload
uploadButton.addEventListener('click', ()=>{
    let process = upload.value
    if(process == ''){
        window.alert('nincs file kiválasztva')
    } else{
        let process2 = process.replace(/\\/g, '+');
        let processArray = process2.split('+')
        photoCanvas.style.backgroundImage = `url('img/${processArray[processArray.length-1]}')`
        contrastfunction()
        brightnessfunction()
        saturationfunction()
    }
    
})
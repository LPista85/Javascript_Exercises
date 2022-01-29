let newGame = document.querySelector('#newGame')
let shuffle = document.querySelector('#shuffle')
let playerOne = document.querySelector('.playerOne')
let playerTwo = document.querySelector('.playerTwo')
let playerThree = document.querySelector('.playerThree')
let playerFour = document.querySelector('.playerFour')
let cardPack = []
let shuffled = []
let shuffled2 = []
let playerOneNum = []
let playerTwoNum = []
let playerThreeNum = []
let playerFourNum = []

newGame.addEventListener('click', (e)=>{
    e.preventDefault()
    

})


function append (){

    function appendOne(){
        let paragraphs = playerOne.querySelectorAll('p')
        for(p of paragraphs){
            p.remove()
        }

        for(let i = 0; i < playerOneNum.length ; i++){
            let newP = document.createElement('p')
            newP.innerText = playerOneNum[i]
            playerOne.append(newP)
        }
        
    }
    appendOne()

    function appendTwo(){
        let paragraphs = playerTwo.querySelectorAll('p')
        for(p of paragraphs){
            p.remove()
        }

        for(let i = 0; i < playerTwoNum.length ; i++){
            let newP = document.createElement('p')
            newP.innerText = playerTwoNum[i]
            playerTwo.append(newP)
        }
        
    }
    appendTwo()

    function appendThree(){
        let paragraphs = playerThree.querySelectorAll('p')
        for(p of paragraphs){
            p.remove()
        }

        for(let i = 0; i < playerThreeNum.length ; i++){
            let newP = document.createElement('p')
            newP.innerText = playerThreeNum[i]
            playerThree.append(newP)
        }
        
    }
    appendThree()

    function appendFour(){
        let paragraphs = playerFour.querySelectorAll('p')
        for(p of paragraphs){
            p.remove()
        }

        for(let i = 0; i < playerFourNum.length ; i++){
            let newP = document.createElement('p')
            newP.innerText = playerFourNum[i]
            playerFour.append(newP)
        }
        
    }
    appendFour()

}

function deal (){
    playerOneNum = []
    playerTwoNum = []
    playerThreeNum = []
    playerFourNum = []

    playerOneNum.push(shuffled2.pop())
    playerTwoNum.push(shuffled2.pop())
    playerThreeNum.push(shuffled2.pop())
    playerFourNum.push(shuffled2.pop())
    playerOneNum.push(shuffled2.pop())
    playerTwoNum.push(shuffled2.pop())
    playerThreeNum.push(shuffled2.pop())
    playerFourNum.push(shuffled2.pop())

    append()
}



shuffle.addEventListener('click', (e)=> {
    e.preventDefault()

    
    for(let i = 1; i <=52; i++){
        let ran = Math.floor(Math.random()*2)+1;
        if(ran == 1){
            cardPack.push(i)
        } else if(ran == 2){
            cardPack.unshift(i)
        }
        
    }
    for(let j = 0; j <cardPack.length ; j++){
        let ran2 = Math.floor(Math.random()*2)+1;
        if(ran2 == 1){
            shuffled.push(cardPack[j])
        } else if(ran2 == 2){
            shuffled.unshift(cardPack[j])
        }
    }
    for(let k = 0; k <shuffled.length ; k++){
        let ran2 = Math.floor(Math.random()*2)+1;
        if(ran2 == 1){
            shuffled2.push(shuffled[k])
        } else if(ran2 == 2){
            shuffled2.unshift(shuffled[k])
        }
    }
  
    deal()
    

})
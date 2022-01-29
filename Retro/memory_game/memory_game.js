let cardPack = [
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/1.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/1.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/2.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/2.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/3.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/3.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/4.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/4.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/5.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/5.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/6.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/6.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/7.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/7.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/8.jpg'},
    {cardFront: 'img/cardBack.jpg', cardBack: 'img/8.jpg'},
]



let gameEnd = document.querySelector('.gameEnd');
let tryParagraph = document.querySelector('.tries')

let newGameButton = document.querySelector('.newGame')
newGameButton.addEventListener('click', ()=>{
    
    function endGame(){
        shuffled = [];
        tries = 0
        let cards = document.querySelectorAll('.card')
        for(let i = 0; i < cards.length; i++){
            if(cards[i].classList.contains('card2')|| cards[i].classList.contains('card3')){
                cards[i].classList.remove('card2', 'card3')
            }
        }
        
    }
    setTimeout(endGame, 500)

    function veryNewGame(){
        shuffle()
        newGame()
        gameEnd.innerText = ''
        tryParagraph.innerText = ''
        
    }
    setTimeout(veryNewGame, 1000)
    

    
})



function clearAll(){
    let alldivs = document.querySelectorAll('.card')
    for(let i = 0; i < alldivs.length; i++){
        alldivs[i].remove()
    }
}


let cardPositon = [ 12, 0, 1, 6,4,3,8,15, 11, 2, 5 , 10, 14, 7, 9 , 13]
let shuffled = [];

function shuffle(){
   
    for(let i = 0 ; i < 16; i++){
        let decision = Math.floor(Math.random()*4)+1
        if(decision == 1){
            shuffled.push(cardPositon.pop())
        } else if( decision == 2){
            shuffled.push(cardPositon.shift())
        } else if( decision == 3){
            shuffled.unshift(cardPositon.pop())
        } else if( decision == 4){
            shuffled.unshift(cardPositon.shift())
        }
        
    }
    cardPositon = [ 12, 0, 1, 6,4,3,8,15, 11, 2, 5 , 10, 14, 7, 9 , 13];

}
shuffle()


function newGame(){
    let gameField = document.querySelector('.gamePlatform')
    clearAll()
    for(let i = 0; i< cardPack.length ; i++){
        let card = document.createElement('div')
        card.classList.add('card')
        let cardFront = document.createElement('div')
        cardFront.classList.add('cardFront')
        let cardBack = document.createElement('div')
        cardBack.classList.add('cardBack')

        cardFront.style.backgroundImage = `url('${cardPack[i].cardFront}')`
        cardBack.style.backgroundImage = `url('${cardPack[shuffled[i]].cardBack}')`

        card.append(cardFront, cardBack)
        gameField.append(card)

    }
    gamebody()
}
newGame()




let counter = 0;
let tries = 0;
let array = []


function countIt(){
    let counted =  document.querySelectorAll('.card')
    let done = 0
    

    for(let i = 0 ; i< counted.length ;i++){
        if(counted[i].classList.contains('card3')){
            done++
            
        }
    }
    if(counted.length - done == 0){
        gameEnd.innerText = 'Congrats, You Win;'
        tryParagraph.innerText = `It took ${tries} tries.`
    }
}



function gamebody(){
    let cards = document.querySelectorAll('.card')
    for(let j = 0; j < cards.length; j++){
        cards[j].addEventListener('click', ()=> {
            cards[j].classList.toggle('card2')
            array.push(cards[j])
            counter ++;
    
            
            if(counter == 2){
                
                tries ++
                
                if(array[0].querySelector('.cardBack').style.backgroundImage == array[1].querySelector('.cardBack').style.backgroundImage){
                    for(let i = 0 ; i < cards.length; i++){
                        if(cards[i].classList.contains('card2')){
                            function functionTwo(){
                                cards[i].classList.remove('card2')
                                cards[i].classList.add('card3')
                                countIt()
                            }
                            setTimeout(functionTwo, 500) 
                        }
                    }
                    countIt()
                } else{
                    for(let j = 0; j < cards.length ; j++){
                        if(cards[j].classList.contains('card2')){
                            function functionOne(){
                                cards[j].classList.remove('card2')
                            }
                            setTimeout(functionOne, 500)
                            
                        }
                    }
                }
                array = []
               counter = 0
            }
            
            
        })
    }

}




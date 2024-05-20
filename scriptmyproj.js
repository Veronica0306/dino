let canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d")
let stavka = 10

let money = document.getElementById('money')
let balans = 100;
let starttur = false;

canvas.width = 1500
canvas.height = 500

let game = new Image()
let game_2 = new Image()
game.src = "gamee2.png"
game_2.src = "dino2.png"


 


let but = document.getElementsByClassName("but");
window.onload = function(){
    ctx.drawImage(game, 0,0,1500,500)
    ctx.drawImage(game_2, 60,85,90,90)
    ctx.drawImage(game_2, 60,205,90,90)
    ctx.drawImage(game_2, 60,325,90,90)
}




function plus(){
  if(stavka<=90){
    stavka = stavka + 10 
    document.getElementById("chan").innerHTML = stavka
  
}}
function min(){
    if( stavka> 10){
        stavka = stavka - 10
        document.getElementById("chan").innerHTML = stavka
}
    
}
let dino = -1;
function butt(numBut){
    for(let i=0; i<but.length; i++){
        if(i==numBut){
            but[i].style.backgroundColor = "green";
        }
        else{
            but[i].style.backgroundColor = "WhiteSmoke";
        }
    }
    dino = numBut
}


let n1=60
let u1 = 1
let n2 =60
let u2 = 1
let n3=60
let u3 =1
let time=0
let priser;
function start(){
    console.log(dino)
    if(dino>=0){
        if(balans>=stavka){
            console.log(32432)
            balans = balans - stavka
            money.innerHTML = balans
            starttur = true; 
            requestAnimationFrame(go);
            money.style.color = "red"   
        }
        else if(balans==0){
            alert(" Ваш баланс исчерпан😔 ")}
        else if(balans<stavka){
            alert("Упс,похоже не хватает денежек😔Сделай ставку поменьше")}
        
    }
    else{
        alert("Выберите игрока🙈 ")
    }   
}


function go(){
    if(starttur==true){
      requestAnimationFrame(go)
        time++;  
    
    
    if(time%200==0){
        u1= Math.round(Math.random()*3+1)
        u2=Math.round(Math.random()*3+1)
        u3=Math.round(Math.random()*3+1)
    }
    n1+=u1
    n2+=u2
    n3+=u3
    if(n1>=1400){
        starttur=false;
        priser = 0
        gameover()
        
    }
    else if(n2>=1400){
        starttur=false
        priser = 1
        gameover()
        
    }
    else if(n3>=1400){
        starttur=false
        priser = 2
        gameover()
        
    }
    console.log("1"+n1+"   2"+n2+"    3"+n3)
    console.log(priser)
   

    ctx.drawImage(game, 0,0,1500,500)
    ctx.drawImage(game_2, n1,85,90,90)
    ctx.drawImage(game_2, n2,205,90,90)
    ctx.drawImage(game_2, n3,325,90,90)
}

}

function gameover(){
    if(dino==priser){
        alert("Поздравляем!Ваша ставка успешна🥇 ")
        balans= balans + stavka*3
        money.innerHTML = balans;
        money.style.color = "green"
        
        setTimeout(restart, 1000)
    }
    else{
        alert("Оу, в этот раз не повезло( Попробуй ещё!!✊")
        setTimeout(restart, 1000)
    }
}

function restart(){
    n1 = 60
    n2 = 60
    n3 = 60
    u1 = 1
    u2 = 1
    u3 = 1
    ctx.drawImage(game, 0,0,1500,500)
    ctx.drawImage(game_2, n1,85,90,90)
    ctx.drawImage(game_2, n2,205,90,90)
    ctx.drawImage(game_2, n3,325,90,90)
    dino = -1
    for(let i=0; i<but.length; i++) { 
        but[i].style.backgroundColor = "WhiteSmoke";} 
    
}
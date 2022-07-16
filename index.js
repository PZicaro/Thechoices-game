let PlayerRange= document.querySelector('.playerRange');
let Pipe = document.querySelector(".pipe");
let Pipe2 = document.querySelector(".pipe2");
let Score = document.querySelector(".score");
let PlayAgain = document.querySelector(".playAgain");
let Lobby = document.querySelector(".lobby");
let GameOver= document.querySelector("#EndGame")
let ScoreSum = 00;

   

function game (){
  let  interval = setInterval(function ScoreCounter(){
      ScoreStatic=ScoreSum++;

      Score.innerText = ScoreStatic;
   },1);
   

//método que faz o boneco pular quando qualquer tecla é apertada
document.addEventListener('keydown', jump =()=>{

   PlayerRange.classList.add('jump');
  
// seta o tempo pra que a função RemoveJump seja acionada
   setTimeout(RemoveJump, 800);

})
// remove Jump pq não tem como colocar a função de pular 2x, wntõ se n existir essa função o personagem só pula 1 x
 RemoveJump =()=>{

   PlayerRange.classList.remove('jump');


  

}

//roda as condições de parada do game-over

const loop = setInterval(function pass(){
let PipeLeft = Number( Pipe.offsetLeft);
let PipeLeft2 = Number( Pipe2.offsetLeft);
let PlayerPosition = Number(window.getComputedStyle(PlayerRange).bottom.replace("px", ""));


if(( PipeLeft<=120 || PipeLeft2<=120) && PlayerPosition< 80 ){
   clearInterval(interval)
   Pipe.style.left = `${PipeLeft}px`;
   Pipe2.style.left =`${PipeLeft2}px` ;
   PlayerRange.style.bottom =`${PlayerPosition}px`
 EndGame()
}
  

})

}
function EndGame(){
   GameOver.style.display="block"
   Lobby.style.display = "block";
   PlayAgain.style.display ="block";
   
}

PlayAgain.addEventListener("click", ()=>{
   document.location.reload(true);
});
function Lobby(){
let LeftArrow=document.querySelector(".LeftArrow");
let RightArrow=document.querySelector(".RightArrow");
let Player=document.querySelector(".player");

let Characters = [
   {
      name:"Ícaro",
      img: "./Imagens/Ícaro.gif",
      width: "65px"
   },
   {
      name:"Sostenes",
      img: "./Imagens/Sostenes.gif",
      width: "20px"
   },
   {
      name:"Luiz",
      img: "./Imagens/Luiz.gif",
      width: "65px"
   },
   {
      name:"Carvalho",
      img: "./Imagens/Carvalho.gif",
      width: "65px"
   },
   {
      name:"Macello",
      img: "./Imagens/Macello.gif",
      width: "65px"
   },
   {
      name:"Joao",
      img: "./Imagens/Joao.gif",
      width: "65px"
   }
]
LeftArrow.addEventListener("click", function LeftButton(){
   
      
})















}
game()

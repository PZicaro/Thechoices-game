
function Menu(){
    let LeftArrow=document.querySelector(".LeftArrow");
    let RightArrow=document.querySelector(".RightArrow");
    let Player=document.querySelector(".player");
    let name=document.querySelector(".name");
    
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
    let IndexPlayer=0;
    
    LeftArrow.addEventListener("click", ()=>{
     
       
       IndexPlayer--;
       ChangePlayer(IndexPlayer)
    })
    
    RightArrow.addEventListener("click", ()=>{
     
       
       IndexPlayer++;
       ChangePlayer(IndexPlayer)
    
    })
    function ChangePlayer(IndexPlayer){
    
      console.log(  Characters[IndexPlayer])
    
    
    }
    
    
    
    
    }
    
    Menu()
    
    
    
    
    
    
    
    
    
    Menu
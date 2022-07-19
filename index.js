
function Menu(){
    let LeftArrow=document.querySelector(".LeftArrow");
    let RightArrow=document.querySelector(".RightArrow");
    let Player=document.querySelectorAll(".player")
    let NamePosition=document.querySelector(".name");
    
    //as caracteristicas de cada personagem
    let Characters = [
       {
          name:"Ícaro",
          img: "./Imagens/Ícaro.gif",
          width: "150px"
       },
       {
          name:"Sostenes",
          img: "./Imagens/Sostenes.gif",
          width: "80px"
       },
       {
          name:"Luiz",
          img: "./Imagens/Luiz.gif",
          width: "165px"
       },
       {
          name:"Carvalho",
          img: "./Imagens/Carvalho.gif",
          width: "150px"
       },
       {
          name:"Macello",
          img: "./Imagens/Macello.gif",
          width: "150px"
       },
       {
          name:"João",
          img: "./Imagens/Joao.gif",
          width: "150px"
       }
    ]
    //index pra coletar
    let IndexPlayer=0;
    

    //muda o index e chama a função de mudar player
    LeftArrow.addEventListener("click", ()=>{
     
      
       IndexPlayer--;
       ChangePlayer(IndexPlayer)
    })
        //muda o index e chama a função de mudar player
    RightArrow.addEventListener("click", ()=>{

       IndexPlayer++;
       ChangePlayer(IndexPlayer)
      
    })
    //muda o player
    function ChangePlayer(IndexPlayer){
      

         let  name= Characters[IndexPlayer].name;
         let  src= Characters[IndexPlayer].img;
         let  width= Characters[IndexPlayer].width;
         Player[0].setAttribute("src", `${src}`);
         Player[0].style.width= `${width}`;
         NamePosition.innerHTML = `${name}`

    console.log(name);
    console.log(src)
    console.log(width)
   
    
    }  
    }
    
    Menu()
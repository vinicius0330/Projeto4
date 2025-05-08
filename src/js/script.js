//DECLARANDO O ARRAY DE IMAGES

let imagens =[
    'src/assets/Imagem1.jpg',
    'src/assets/Imagem2.jpg',
    'src/assets/Imagem3.jpg',
];

//DECLARANDO AS VARIAVEIS

let index=0;
let tempo=3000;

//CRIANDO A FUNÇÃO SLIDESHOW

function slideShow(){
    document.getElementById("image").src=imagens[index];
    index++;

    if(index == imagens.lenght){
        index=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();
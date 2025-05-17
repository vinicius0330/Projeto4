//Declarando o array de imagem

let imagens = [
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
];

//Declarando as variaveis

let index = 0;
let tempo = 3000;

//Criando a função SlideShow

function slideShow(){
    document.getElementById("image").src = imagens[index]
    index++;
    if (index == imagens.length){
        index=0;
    }
    setTimeout("slideShow()", tempo)
}
slideShow();
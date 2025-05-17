//Evento que carrega a pagina automaticamente
document.addEventListener('DOMContentLoaded', ()=>{
    //Declarando as variaveis
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta =document.getElementById('proximo');
    const mensagem = document.getElementById('message');
    const containerPerguntas =document.getElementById('container-perguntas');
    const containerResultado =document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn');
    
    //Declarando o array de perguntas
    const questoes =[
        "Qual Linguagem de Programação você utiliza",
        "Descreva essa Linguagem",
        "Em que ano surgiu a Linguagem Utilizada",
        "Você se considera um programador sênior ?",
    ];
    
    //Declarando as variaveis
    let perguntas =0;
    const respostas = [];
    
    //Criando a função de mostrar pergunta
    
    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent=questoes[perguntas];
            resposta.value='';
            mensagem.textContent='';
        }else{
            mostrarResultado();
        }
    }
    
    //Criando a função de mostrar resultado
    
    function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';
    
        questoes.forEach((questoes,i)=>{
                const listaItem =document.createElement('li');
                listaItem.innerHTML=`<strong>${questoes}</strong><br>
                Sua Resposta: <span>${respostas[i]}</span>`
                listaResultado.appendChild(listaItem);
            })
        }
    
        //Função para a proxima pergunta
    
        function nextQuestao(){
            const respostaAtual = resposta.value.trim();
            if(respostaAtual === ''){
                mensagem.textContent="Por favor , digite sua resposta";
                return;
            }
            respostas.push(respostaAtual);
            perguntas++;
            mostrarPergunta();
        }
    
        function reiniciarQuiz(){
            perguntas =0;
            respostas.length =0;
            containerResultado.classList.add('hidden');
            containerPerguntas.classList.remove('hidden');
            mostrarPergunta();
        }
        proximaPergunta.addEventListener('click',nextQuestao);
        reiniciarBotao.addEventListener('click',reiniciarQuiz);
        mostrarPergunta();
    
    })
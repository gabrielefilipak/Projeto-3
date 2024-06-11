const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " O vestibular é de extrema importância para garantir um futuro instável e próspero, afinal ele é a forma de ingressar em uma faculdade, mas para que isso aconteça é necessário uma longa jornada de estudos, que demanda muito foco e atenção. E você já pensou em prestar vestibular?",
        alternativas: [
            "Sim, quero garantir o meu futuro",
            "Não me importo com isso"
        ]
    },
    {
        enunciado: "Você já sabe o que quer do seu futuro?",
        alternativas: [
            "Sim, estou complatamente certo(a)!",
            "Ainda não sei direito"
        ]
    },
    {
        enunciado: "Já parou para pensar onde você quer estar daqui à alguns anos?",
        alternativas: [
            "Sim, sempre penso no meu futuro!",
            "Nunca parei para pensar"
        ]
    },
    {
        enunciado: "Você se esforça para conquistar suas metas?",
        alternativas: [
            "Sim, muito!",
            "Não muito"
        ]
    },
    {
        enunciado: "Vocẽ já parou para pensar qual faculdade/universidade quer estudar? ",
        alternativas: [
            "Já tenho algumas em mente",
            "Não faço à mínima ideia"
        ]
    },
    

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

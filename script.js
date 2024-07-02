const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " O vestibular é de extrema importância para garantir um futuro instável e próspero, afinal ele é a forma de ingressar em uma faculdade, mas para que isso aconteça é necessário uma longa jornada de estudos, que demanda muito foco e atenção. E você já pensou em prestar vestibular?",
        alternativas: [
            {
                texto:  "Sim, quero garantir o meu futuro",
                afirmacao:"Ao prestar o vestibular você pode garantir um futuro brilhante. Além de garantir conhecimento na área/profissão escolhida, estudos comprovam que pessoas com ensino superior possuem uma taxa menor de desemprego."
            },
            {
                texto: "Não me importo com isso",
                afirmacao: " Ao não prestar vestibular você poderá estar desperdiçando seu futuro, por isso pense bem na sua decisão!"
            }
           
        ]
    },
    {
        enunciado: "Você já sabe o que quer do seu futuro?",
        alternativas: [
            {
                texto: "Sim, estou completamente certo(a)!",
                afirmacao:"Isso indica que você planeja seu futuro e se continuar assim certamente irá trilhar uma carreira de sucesso."
            },
            {
                texto: "Ainda não sei direito",
                afirmacao:"Algumas pessoas se sentem inseguras e talvez indecisas com o futuro, mas não se preocupe com o tempo as coisas vão fluir! Mas é sempre bom começar a pensar nas coisas futuras, principlamente em metas e objetivos para se alcançar ao longo da vida."
            }
           
        ]
    },
    {
        enunciado: "Já parou para pensar onde você quer estar daqui à alguns anos?",
        alternativas: [
            {
                texto:"Sim, sempre penso no meu futuro!",
                afirmacao: "Que maravilha! É sinal que você já deu um grande passo, afinal todas as conquistas se iniciam com um sonho e com a vontade de fazer ele virar realidade."
            },
            {
                texto:  "Nunca parei para pensar",
                afirmacao:"Nem todas as pessoas conseguem se ver no futuro e isso é muito comum, mas lembre-se que é sonhando que se faz acontecer, e se imaginar exercendo a profissão tão sonhada é o combustível que alimenta esse sonho."
            }
            
        ]
    },
    {
        enunciado: "Você se esforça para conquistar suas metas?",
        alternativas: [
            {
                texto:"Sim, muito!",
                afirmacao:" Se você continuar se esforçando dessa maneira, certamente vai ir muito longe. Pessoas geniais chegam a lugares incriveis, mas pessoas esforçadas chegam a lugares extraordinários!"
            },
            {
                texto: "Não muito",
                afirmacao:"Para se alcançar uma meta é necessário muito esforço e dedicação, afinal de contas as coisa não caem do céu, muito pelo contrário, elas vêm com muito esforço, por isso trate de se empenhar par alcançar suas metas, porque na vida não há lugar para todos, apenas para os melhores."
            }
          
        ]
    },
    {
        enunciado: "Vocẽ já parou para pensar qual faculdade/universidade quer estudar? ",
        alternativas: [
            {
                texto: "Já tenho algumas em mente",
                afirmacao: "É sempre bom traçar metas, e a escolha da faculdade/universidade é uma decissão muito importante. "
            },
            {
                texto: "Não faço à mínima ideia",
                afirmacao:"Comece procurar e pesquisar a respeito, afinal a escolha da faculadade/universidade é o ínicio de tudo."
            }
           
        ]
    },
    

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();

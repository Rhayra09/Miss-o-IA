 const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaFeedback = document.querySelector(".caixa-feedback");
const textoFeedback = document.querySelector(".texto-feedback");
const botaoProxima = document.querySelector(".botao-proxima");

const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const resumoEscolhas = document.querySelector(".resumo-escolhas");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

const progresso = document.querySelector(".progresso");
const numeroPergunta = document.querySelector("#numero-pergunta");
const porcentagem = document.querySelector("#porcentagem");
const barraProgresso = document.querySelector(".barra-progresso-preenchida");

const perguntas = [
  {
    enunciado:
      "Sua escola vai organizar um evento para centenas de estudantes. A organização pretende utilizar copos e pratos descartáveis pela praticidade. O que você faria?",

    alternativas: [
      {
        texto: "Concordo com a escolha, pois a praticidade deve ser a prioridade, mesmo que seja gerada uma grande quantidade de resíduos.",
        afirmacao:
          "A praticidade é importante, mas não deve ser o único critério. O uso excessivo de descartáveis aumenta a geração de lixo e o consumo de recursos naturais. É possível buscar alternativas reutilizáveis e organizar corretamente a coleta de resíduos."
      },
      {
        texto: "Proponho o uso de materiais reutilizáveis e um sistema de coleta seletiva, considerando também a viabilidade da organização.",
        afirmacao:
          "Excelente! Você compreende que a sustentabilidade exige planejamento e responsabilidade coletiva, buscando reduzir os impactos ambientais sem ignorar as necessidades práticas."
      }
    ]
  },

  {
    enunciado:
      "Ao trocar de celular, você percebe que seu aparelho atual ainda funciona, mas um modelo novo foi lançado com pequenas melhorias. Qual seria sua atitude?",

    alternativas: [
      {
        texto:
          "Compro o novo aparelho, pois acompanhar os lançamentos é mais importante do que prolongar a vida útil dos produtos.",
        afirmacao:
          "Repense essa escolha! A fabricação de aparelhos eletrônicos consome matérias-primas, água e energia. Substituir produtos que ainda funcionam pode aumentar a extração de recursos naturais e a geração de lixo eletrônico."
      },
      {
        texto:
          "Continuo usando meu aparelho e avalio a possibilidade de manutenção ou troca somente quando houver necessidade real.",
        afirmacao:
          "Muito bem! Você pratica o consumo consciente ao prolongar a vida útil dos produtos, reduzindo a demanda por novas matérias-primas e a quantidade de resíduos eletrônicos."
      }
    ]
  },

  {
    enunciado:
      "Você encontra nas redes sociais uma publicação afirmando que a reciclagem, sozinha, é suficiente para resolver o problema da poluição. O que você faz?",

    alternativas: [
      {
        texto:
          "Verifico a informação em fontes confiáveis e procuro explicar a importância de reduzir o consumo, reutilizar e reciclar.",
        afirmacao:
          "Ótima atitude! Você alia responsabilidade ambiental ao pensamento crítico, reconhecendo que a preservação do meio ambiente depende de diferentes ações e de informações confiáveis."
      },
      {
        texto:
          ": Compartilho a publicação sem verificar as informações, pois a reciclagem já é uma solução ambiental importante.",
        afirmacao:
          "Cuidado! Embora a reciclagem seja fundamental, ela não elimina todos os impactos ambientais. Reduzir o consumo, reutilizar materiais e evitar desperdícios também são medidas essenciais. Compartilhar informações sem verificá-las pode disseminar ideias incompletas"
      }
    ]
  },

  {
    enunciado:
      "Você percebe que um terreno próximo a um rio está sendo utilizado para o descarte irregular de entulho. Alguns moradores dizem que isso não é problema deles. Qual seria sua atitude?",

    alternativas: [
      {
        texto:
          "Ignoro a situação, pois a fiscalização ambiental é responsabilidade exclusiva do poder público.",
        afirmacao:
          "Essa atitude contribui para a permanência do problema. Embora a fiscalização seja uma responsabilidade pública, a participação dos cidadãos é importante para comunicar irregularidades e proteger os recursos naturais."
      },
      {
        texto:
          "Registro a situação sem me colocar em risco e comunico o caso aos órgãos responsáveis, incentivando a comunidade a buscar uma solução.",
        afirmacao:
          "Parabéns! Você reconhece a importância da participação cidadã na proteção ambiental. O descarte irregular pode contaminar o solo e a água, além de prejudicar os ecossistemas."
      }
    ]
  },

  {
    enunciado:
      "Sua turma planeja uma campanha de arborização na cidade. Um colega sugere plantar qualquer espécie de árvore disponível, sem considerar as características do local. O que você faria?",

    alternativas: [
      {
        texto:
          "Concordo, pois o mais importante é plantar o maior número possível de árvores, independentemente da espécie.",
        afirmacao:
          "Plantar árvores é importante, mas a escolha inadequada das espécies pode prejudicar a biodiversidade, competir com plantas nativas e causar problemas nas calçadas e na infraestrutura urbana. A arborização precisa de planejamento."
      },
      {
        texto:
          "Sugiro pesquisar espécies nativas adequadas ao clima e ao espaço disponível, buscando orientação de profissionais ou dos órgãos ambientais.",
        afirmacao:
          "Excelente! Você entende que a conservação ambiental exige mais do que boas intenções: é necessário considerar o equilíbrio dos ecossistemas, a biodiversidade local e os efeitos das decisões a longo prazo."
      }
    ]
  }
];

let atual = 0;
let escolhas = [];

function atualizarProgresso() {
  const total = perguntas.length;
  const numeroAtual = Math.min(atual + 1, total);
  const percentual = Math.round((atual / total) * 100);

  numeroPergunta.textContent =
    `Pergunta ${numeroAtual} de ${total}`;

  porcentagem.textContent = `${percentual}%`;
  barraProgresso.style.width = `${percentual}%`;
}

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];

  caixaResultado.hidden = true;
  caixaFeedback.hidden = true;
  caixaAlternativas.hidden = false;

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.replaceChildren();

  botaoProxima.textContent =
    atual === perguntas.length - 1
      ? "Ver resultado →"
      : "Próxima pergunta →";

  atualizarProgresso();

  perguntaAtual.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");

    const letra = document.createElement("span");
    letra.className = "letra-alternativa";
    letra.textContent = String.fromCharCode(65 + indice);

    const texto = document.createElement("span");
    texto.textContent = alternativa.texto;

    botao.append(letra, texto);

    botao.addEventListener("click", () => {
      selecionarAlternativa(alternativa);
    });

    caixaAlternativas.appendChild(botao);
  });
}

function selecionarAlternativa(alternativa) {
  escolhas[atual] = alternativa;

  caixaAlternativas.hidden = true;
  caixaFeedback.hidden = false;

  textoFeedback.textContent = alternativa.afirmacao;
}

function proximaPergunta() {
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "";
  caixaAlternativas.hidden = true;
  caixaFeedback.hidden = true;
  progresso.hidden = true;

  caixaResultado.hidden = false;
  resumoEscolhas.replaceChildren();

  textoResultado.textContent =
    "Ao longo desta jornada, você refletiu sobre os riscos, as oportunidades e a responsabilidade no uso da Inteligência Artificial. O futuro não depende apenas da tecnologia, mas também das decisões das pessoas que a desenvolvem e utilizam.";

  escolhas.forEach((escolha, indice) => {
    const item = document.createElement("article");
    item.className = "item-resumo";

    const titulo = document.createElement("strong");
    titulo.textContent = `Pergunta ${indice + 1}: ${escolha.texto}`;

    const mensagem = document.createElement("p");
    mensagem.textContent = escolha.afirmacao;

    item.append(titulo, mensagem);
    resumoEscolhas.appendChild(item);
  });

  barraProgresso.style.width = "100%";
  porcentagem.textContent = "100%";
  numeroPergunta.textContent = "Jornada concluída";
}

function reiniciarJogo() {
  atual = 0;
  escolhas = [];

  progresso.hidden = false;
  mostraPergunta();
}

botaoProxima.addEventListener("click", proximaPergunta);
botaoReiniciar.addEventListener("click", reiniciarJogo);

mostraPergunta();
const perguntas =[
    {
        pergunta : "Pergunta 1:\n Opção- (a) \n Opção- (b) \n Opção- (c)",
        resposta : "a"
    },
    {
        pergunta : "Pergunta 2:\n Opção- (a) \n Opção- (b) \n Opção- (c)",
        resposta : "b"
    },
    {
        pergunta : "Pergunta 3:\n Opção- (a) \n Opção- (b) \n Opção- (c)",
        resposta : "a"
    },
]
let acertos = 0;
const totalPerguntas = perguntas.length;

alert("Seja bem vindo ao jogos das perguntas")

for(let i=0; i< totalPerguntas; i++){
    let respostaUsuario;
    let valida = false;

    while(!valida){
        respostaUsuario = prompt(perguntas[i].pergunta).toLowerCase();
        if(respostaUsuario === 'a' || respostaUsuario === 'b' ||respostaUsuario === 'c'){            
        }else{
            alert("Digite uma opção válida")
        }
    }
    if(respostaUsuario === perguntas[i].resposta){
        alert("Você acertou a pergunta")
        acertos++;
    }else{
        alert(`Você errou! A resposta correta é: ${perguntas [i].resposta.toUpperCase()} `)
    }
}
document.getElementById("msg").innerHTML = `Você acertou ${acertos} de ${perguntas}`;

/*APRENDEMOS 
-DECLARAÇÃO
-VARIAVEIS
-TIPOS DE DADOS(TRUE,FALSE)
-ARRAY
-OBJETO
-METODOS(toUpperCase,toLowerCase,alert, console, lenght)
-PROPRIEDADES (pergunta, resposta)
-CONDICONAL COM IF/ELSE
-REPETIÇÃO COM FOR , WHILE
-COMPARAÇÃO || , === 
-STRING LITERAIS ``
-DOM (DOCUMENT OBJECT MODEL)
-FUNÇÃO

*/
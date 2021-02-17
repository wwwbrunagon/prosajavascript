const isNodeJS = typeof window === 'undefined'

async function read_line(question) {
  // Se for nodejs usa readline, se for browser usa a função interna prompt
  if (isNodeJS) {
    const rl = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    // A função rl.question pede um callback no segundo parâmetro, uma boa prática é encapsular numa Promise
    // o que é importante para evitar callback hell
    return new Promise((res, rej) => {
      rl.question(question, res)
    }).finally(() => rl.close()) // Quando a Promise for resolvida, ela vai fechar o rl independente de dar erro ou não
  } else {
    return Promise.resolve(prompt(question))
  }
}

function show_line(line) {
  if (isNodeJS) {
    console.log(line)
  } else {
    alert(line)
  }
}

// Não posso dar await em chamadas no toplevel, só dentro de funções
(async function () {
  let nome = await read_line("Qual o seu nome?")
  let idade = await read_line("Quantos anos você tem?")

  // Um jeito de interpolar texto é usando essa sintaxe.
  // Outro também é somar os pedaços de texto, por isso que 2+2 = 4 mas "2"+"2" = "22"
  show_line(`Seu nome é '${nome}' e você tem ${idade} anos!`)
})()

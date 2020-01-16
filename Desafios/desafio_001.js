
//melhorar esse código para que a frase final seja: 
//${assuntos[index]} é o ${cronograma[index]} assunto do pŕoximo Encontro com JS

// revisão de classe é o 1º assunto do próximo Encontro com JS

//comentar esse código e fazer outrro código com sua autoria

const programacaoHoje = {
  cronograma: ['1º', '2º', '3º'],
  assuntos: ['revisão de classe', 'template string', 'objeto literal'],
  resumo: function() {
    this.assuntos.forEach(r => {
      console.log(`${r} é assunto do Encontro com JS de hoje`);
    })
  }
}

// programacaoHoje.resumo('ASSUNTO 1', 'ASSUNTO 2'), ...

programacaoHoje.resumo()



var nomes = ['bruna', 'lucas', 'naty', 'johny', 'luiza', 'bruno']


for(var i = 0; i < nomes.length; i++){
  console.log(nomes[i])
}

nomes.forEach(function(i){
  console.log(i)
})

//------------------------------

let valor = 0

if(true){ 
  let valor = 1
  console.log(valor)
}
console.log(valor)

//------------------------------

var hw = function(nome){
  return "Hello World, seja bem vind@ " + nome
}

hw('Bruna')

const hw = nome => `Hello ${nome}, seja bem vind@`

hw('Lucas')

const equipe = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    this.membros.forEach(membro => {
      console.log(`${membro} é da equipe ${this.nome}`);
    })
  }
}

equipe.nome
equipe.membros
equipe.membrosDaEquipe()


## Métodos Auxiliares para Array
### referência:
* [ Métodos Auxiliares para Array](https://medium.com/@joaocrulhas/es6-m%C3%A9todos-auxiliares-para-array-47ee7399bd32) - por Joao Pedro Rubira Crulhas

##### forEach():
O forEach é muito utilizado quando desejamos obter informações de todos os elementos do Array, para imprimir alguma informação do Array.

```
let amigas = ['thilla', 'bruna', 'cintia', 'mayara']

amigas.forEach(function(miga){
    console.log(miga)
})
```


##### map():
O forEach, conforme vimos anteriormente conseguimos acessar as informações que pertence ao array e realizar alguma ação sobre elas, agora vamos imaginar que desejamos modificar os elementos pertencentes ao Array, quando isso for necessário, devemos utilizar o Map.

```
let numeros = [1, 2, 3, 4, 5]

let dobro = numeros.map(function(num){
  return num*2
})

console.log(dobro)

```

##### filter():
Quando em uma lista desejamos buscar alguma informação, o primeiro pensamento que vêm a nossa cabeça é construir um for, rodar elemento por elemento, e assim que achar um que possua a condição exigida, retornar este valor e trabalharmos com ele, porém o ES6 nos fornece um método chamado filter.

```
let amigas = [
  {nome: 'thilla', idade: 26},
  {nome: 'cintia', idade: 25},
  {nome: 'bruna', idade: 33}
];

let trintonas = amigas.filter(function(amiga){
  return amiga.idade >=30;
})

console.log(trintonas)

```

##### filter():
O Find é utilizado quando desejamos buscar uma única situação em nosso Array, geralmente um atributo que apenas um objeto o possua, isso porque o método Find irá retornar apenas o primeiro elemento que satisfaça essa condição.

```
let amigas = [
  {nome: 'thilla', idade: 26},
  {nome: 'cintia', idade: 25},
  {nome: 'bruna', idade: 33}
];

let amigaNOTtrintou = amigas.find(function(amiga){
  return amiga.idade < 30;
})
console.log(amigaNOTtrintou)

console.log(trintonas)

```

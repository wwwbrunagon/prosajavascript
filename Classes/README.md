# Classes

Uma das maiores dificuldades dos estudos de JavaScript é entender a maneira como a herença funciona.
No JS herança funciona por prototipagem. A ideia por trás da funcionalidade de classes no ES6 é que possamos criar uma hierarquia de objetos que por debaixo dos panos ainda funciona em cima dessa herança de prototipagem. Então a ideia é que a gente consiga ter uma outra maneira de otimizar herança de prototipagem mas de uma forma mais fácil, chamamos isso de syntax sugar. [(fonte: Diego Pinho)]( www.diegopinho.com.br)

------------

Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.  [(Fonte: MDN) ](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)

------------

#####  Resumindo: Classe É uma função construtora.

##### Atenção: JavaScript não possui classes!


Ou seja, uma estrutura que descreve estados e comportamentos de um objeto.
Foram introduzidas no ECMAScript 6 e são simplificações da linguagem para as heranças baseadas nos protótipos. Mas 
A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. É apenas uma abstração! Ou seja, uma forma mais simples -principalmente para quem veio de linguagens orientadas a objeto- de criar objetos e lidar com herança.

##### Vantagens
* Sintaxe simples e convencional.
* Mais familiar para as pessoas com base em linguagem baseada em classe.
* Antes do ES6, haviam várias implementações. Agora, apenas uma.

##### Desvantagens
* Não é possível instanciar uma classe sem o new.
* Os detalhes na instanciação ficam expostos para a API de chamada.
* Quebram o princípio aberto / fechado. Ou seja, uma API deve estar aberta para extensão, mas fechada para modificação.
* Tentação para criar heranças com extends.
* Problema ao migrar para funções fábrica.

[(fonte: Classes vs Funções Construtoras vs Funções Fábrica) ](https://medium.com/@viniazvd/classes-vs-fun%C3%A7%C3%B5es-construtoras-vs-fun%C3%A7%C3%B5es-f%C3%A1brica-b92a6afa70a4)

---------------------------



### Leitura indicada
* [Herança e cadeia de protótipos (prototype chain)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
* [Classes no Javascript](https://www.devmedia.com.br/classes-no-javascript/23866) 
* [Class basic syntax](https://javascript.info/class)
* [Understanding Classes in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
* [Orientação a Objetos em Javascript & Função Construtora](http://wbruno.com.br/javascript-puro/orientacao-a-objetos-em-javascript-funcao-construtora/)




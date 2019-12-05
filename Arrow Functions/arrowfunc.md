# Arrow Functions
### referência:
* [ES6 Arrow Functions: Fat and Concise Syntax in JavaScript](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/) (em inglês)

As funções de seta - também chamadas de funções “fat arrow” (seta gorda), do CoffeeScript (uma linguagem transcompilada) - é uma sintaxe mais concisa para escrever expressões de função. Eles utilizam um novo token, =>, que se parece com uma flecha gorda. As funções de seta são anônimas e alteram a maneira como isso se liga (bind) na função. (Kyle Pennell)

* [Arrow functions - MDN ](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (em português)
Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors). (MDN)


```
let amigas = ['thilla', 'bruna', 'cintia', 'mayara']

amigas.forEach(function(miga){
    console.log(miga)
})
```
```
//arrowfunction =>
amigas.forEach(miga => console.log(miga)

(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements }
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements }

```
```
//MDN 
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]


```

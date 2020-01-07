# Arrow Functions

* [ES6 Arrow Functions: Fat and Concise Syntax in JavaScript](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/) (em inglês)

"As funções de seta - também chamadas de funções “fat arrow” (seta gorda), do CoffeeScript (uma linguagem transcompilada) - é uma sintaxe mais concisa para escrever expressões de função. Eles utilizam um novo token, =>, que se parece com uma flecha gorda. As funções de seta são anônimas e alteram a maneira como isso se liga (bind) na função." (Kyle Pennell)

* [Arrow functions - MDN ](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (em português)

"Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors)." (MDN)


```
let amigas = ['thilla', 'bruna', 'cintia', 'mayara']

amigas.forEach(function(miga){
    console.log(miga)
})
```
```
//arrowfunction =>
amigas.forEach(miga => console.log(miga))

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
### Quando (e por que) você deve usar as funções de seta ES6 - e quando não deve
#### [fonte: When (and why) you should use ES6 arrow functions — and when you shouldn’t ](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/) by freecodecamp.org

### ES5 syntax:

```
function timesTwo(params) {  return params * 2}function timesTwo(params) {
  return params * 2
}

timesTwo(4);  // 8

```

### Mesma função expressa com arrowfunction 
```
ar timesTwo = params => params * 2

timesTwo(4);  // 8

```
### Variações

**a_ Sem Parâmetro**

Se não houver parâmetros, você pode colocar parênteses vazios antes de =

```
() => 42

```
Mas na real mesmo Hermanes, nem precisa dos parênteses!

```
_ => 42

```


**b_ Parâmetro único**

Quando os parêmetros são opicionais

```
x => 42  || (x) => 42
```


**c_ Parâmetros múltiplos**

Parênteses são necessários

```
(x, y) => 42
```

**d_ Declarações (ao contrário de expressões)**

É importante lembrar que as declarações precisam ter chaves. 

```
var feedTheCat = (cat) => {
  if (cat === 'hungry') {
    return 'Feed the cat';
  } else {
    return 'Do not feed the cat';
  }
}
```


**e_ “Block body”**

Quando a função estiver em um bloco é importante usar _return statement_

```
var addValues = (x, y) => {
  return x + y
}
```


**f_ Objetos literais**

Se você estiver retornando um objeto literal, ele precisará ser colocado entre parênteses. Isso força o intérprete a avaliar o que está entre parênteses e o objeto é retornado.

```
x =>({ y: x })
```



### Leitura indicada

* [ES6: arrow functions em 5 minutos](https://raphaelfabeni.com/es6-arrow-functions/) 

* [JavaScript: Arrow Functions for Beginners](https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc) 




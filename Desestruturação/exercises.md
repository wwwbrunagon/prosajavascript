# Exercícios:

## Exercício 1:
Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
Dica: use object destructuring.

```
const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

----> // complete a assinatura da função abaixo

const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
```

## Exercício 2:
Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
Dica: use array destructuring .
```
const assert = require('assert');

const myList = [1, 2, 3];

-----> // escreva swap abaixo

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
```


## Exercício 3:
Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
Dica: use object destructuring .

```
const assert = require('assert');

const ships = [
    {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
];

-----> // escreva shipLength abaixo

assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');
```
# Estrutura de uma HOF
As Higher Order Functions que veremos hoje são parecidas entre si: elas mudam em alguns pontos específicos, mas todas possuem a mesma estrutura. Para demonstrar, olhe o exemplo de uma HOF que imprime na tela cada valor do array:

```
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

=> Cada elemento do array: josé
   Cada elemento do array: 50
   Cada elemento do array: 0.25
   Cada elemento do array: { comida: 'Chocolate' }
```

### Suas partes:
1. arrayOfValues - Nome do array que será percorrido;
2. .forEach - A HOF , pode ser, .find , .some , .every ;
3. element - Valor do elemento do array;
4. (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade .
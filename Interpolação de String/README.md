# Interpolação de strings

Uma tarefa muito comum para quem usa o Javascript no dia a dia é juntar texto. Uma tarefa bastante trivial
no Javascript, o jeito mais difundido é usar o operador de adição (`+`) mas existe também uma outra forma
que deixa o código um pouco mais limpo, também evita ter que usar alguns escapes como o `\'` ou o `\"`.

---

A técnica de interpolação mencionada, template strings, se resume a ao invés de usar `"` e `'`, usar ``` ` ``` e usar `${expressão}` para adicionar expressões Javascript no meio do texto. Funciona igualmente em Typescript.

## Exemplo:

```javascript
const resposta = 42
console.log(`A resposta do sentido da vida, universo e tudo mais é ${resposta}`)
```

## Aviso

Este formato de interpolação não vai dar erros por causa do tipo do dado sendo interpolado para texto. Se o valor passado for um `undefined` ele será convertido para a string undefined por exemplo.



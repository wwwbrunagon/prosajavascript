// 1. Objects:
// 1.1. Desestruturação te ajuda a extrair os pares de chave /objeto dos objetos e guardá-los em uma variável
// O nome da variável que ficar dentro dos { } da desestruturação deve ser o mesmo da chave que se quer extrair
const myObject = {
  a: 1,
  b: 2,
  c: 3,
}

const { a, b, c } = myObject
console.log(`1.1 Object, propridade a: ${a}`)
console.log(`1.1 Object, propridade b: ${b}`)
console.log(`1.1 Object, propridade c: ${c}`)

// 1.2. Você pode, opcionalmente, renomear a variável ao extrair:
const { a: keyA } = myObject
console.log(`1.2 Object, propridade renomeada: ${keyA}`)

// 1.3. Você também pode determinar um valor padrão para uma chave que não existir dentro do objeto:
const mySecondObject = {
  d: 4, 
  e: 5,
}
const { d, e, f = 6 } = mySecondObject
console.log(`1.3 Objecto, propridade com valor default: ${f}`)

// 2. Arrays:
// 2.1 Funciona de forma parecida com os objetos, mas é necessário prestar atenção ao index do item que está sendo extraído, uma vez que as variáveis criadas seguem a ordem exata dos indíces:
const myArray = [1, 2, 3]

const [index0, index1] = myArray

console.log(`1. Arrays, index 0: ${index0}`)
console.log(`1. Arrays, index 1: ${index1}`)

// 2.2 Então, como eu poderia extrair SOMENTE o terceito item do Array? Para isso se usa o Undeline( _ ). Que irá ignorar os valores forem precedidos por ele
const [_ignoredIndex0, _ignoredIndex1, index2] = myArray
console.log(`2.2 Arrays, usando underline: ${index1}`)

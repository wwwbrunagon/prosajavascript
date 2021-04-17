// # Array.forEach
// Como foi visto nos exemplos anteriores, o forEach percorre o array e executa a função passada para cada um dos seus valores. O forEach não retorna nenhum valor .

const emailListInData = [
  "roberta@email.com",
  "paulo@email.com",
  "anaroberta@email.com",
  "fabiano@email.com"
];

emailListInData.forEach = elemento => {
  console.log(elemento)
}
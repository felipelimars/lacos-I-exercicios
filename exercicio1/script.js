/* Utilizando o laço `while`, escreva um código que recebe um `prompt`
 perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”,
 e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir,
 e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**,
  devemos imprimir o valor total da conta.

  */

const usuarioDeCoxinhas = () => {
  
  let usuario = prompt(`Deseja comer mais coxinhas? Digite "S = sim ou N = não"`).toUpperCase()
  let conta = 0
  while(usuario === `S`){
  conta += 2.50;    //<- abreviacao de ``conta = conta + 2.5``

  usuario = prompt(`Deseja comer mais coxinhas? Digite "S = sim ou N = não"`).toUpperCase()
  }
  console.log(`O valor total da conta é: R$ ${conta}`);
}

usuarioDeCoxinhas()
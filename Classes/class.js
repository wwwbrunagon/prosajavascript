class Carro {
  constructor(modelo, chassi, qtdPortas){
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;    
  } 

  get andar() {
    console.log('vrum vrum')
  }
} 

// const carroBasico = new Carro('Basico', '123456789', '2')

// console.log(carroBasico.modelo, carroBasico.chassi, carroBasico.qtdPortas)

// carroBasico.andar()

class Ferrari extends Carro {
  get ligarTurbo(){
    console.log('tuna ai fi')
  }

}

const ferrari = new Ferrari()
ferrari.ligarTurbo
ferrari.andar
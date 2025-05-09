// Estratégias (funções diferentes)
const freteNormal = (peso) => peso * 5;
const freteExpresso = (peso) => peso * 10;
const freteGratis = (_) => 0;


// Contexto que usa a estratégia
class CalculadoraFrete {
  constructor(estrategia) {
    this.estrategia = estrategia;
  }

  // Define a estratégia em tempo de execução
  setEstrategia(novaEstrategia) {
    this.estrategia = novaEstrategia;
  }

  calcular(peso) {
    return this.estrategia(peso);
  }
}

// Usando a calculadora com diferentes estratégias
const calculadora = new CalculadoraFrete(freteNormal);

console.log("Frete Normal:", calculadora.calcular(10)); // 50
calculadora.setEstrategia(freteExpresso);
console.log("Frete Expresso:", calculadora.calcular(10)); // 100
calculadora.setEstrategia(freteGratis);
console.log("Frete Grátis:", calculadora.calcular(10)); // 0
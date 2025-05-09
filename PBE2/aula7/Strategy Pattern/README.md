# **Strategy Pattern**  

Permite alterar o comportamento de um objeto em tempo de execução, separando diferentes algoritmos em classes distintas.

---

### **Introdução**

No desenvolvimento de software, muitas vezes precisamos criar diferentes comportamentos para determinadas ações, como **formas de pagamento**, **cálculos** ou **ordenações**. Para evitar o uso excessivo de estruturas condicionais como _if_, _else_ e _switch_, e tornar o sistema mais flexível e fácil de manter, utilizamos **padrões de projeto**.

Um dos padrões mais utilizados nesse tipo de situação é o **Strategy**, que pertence à categoria de **padrões comportamentais**.

---

### **O que é?**

O Strategy é um padrão de projeto comportamental que permite definir uma família de algoritmos ou comportamentos de forma separada, encapsulando cada um deles em uma classe específica, chamada de estratégia. Essas estratégias podem ser trocadas dinamicamente durante a execução do programa, sem a necessidade de modificar o código do objeto principal.

Em vez de usar várias estruturas condicionais para decidir qual comportamento executar, o padrão Strategy propõe que cada comportamento seja encapsulado e que o objeto principal delegue a responsabilidade para uma dessas estratégias.

A ideia central é separar o "o que fazer" do "como fazer", promovendo um código mais organizado, reutilizável e de fácil manutenção.

Esse padrão segue o princípio de composição sobre herança.

---

### **Vantagens e Desvantagens**

| **VANTAGENS**                                                      | **DESVANTAGENS**                                                   |
|--------------------------------------------------------------------|-------------------------------------------------------------------|
| Flexibilidade para mudar comportamentos em tempo de execução.  | Pode gerar muitos arquivos/classes, aumentando a complexidade.|
| Evita duplicação de código e grandes blocos condicionais.      | O programador precisa entender bem como usar as estratégias corretas. |
| Facilita testes, manutenção e adição de novas estratégias.| Pode ser exagero em casos simples, tornando o código mais complicado do que precisa ser.|
|Deixa o código mais organizado e legível.|Nem sempre é fácil escolher a melhor estratégia em tempo de execução.|


---

### **Como Funciona o Strategy?**

Cria-se uma interface ou classe abstrata que define o que todas as estratégias devem fazer. Por exemplo, uma interface chamada PagamentoStrategy com um método pagar().

Cada estratégia concreta implementa esse comportamento de forma diferente. Uma classe PagamentoComCartao implementa pagar() de um jeito, e PagamentoComPayPal de outro.

O contexto, que é a parte do programa que precisa usar o comportamento (como um carrinho de compras), recebe dinamicamente a estratégia escolhida e a usa sem se preocupar com os detalhes.


Ou seja, o contexto não precisa saber como o pagamento acontece. Ele apenas chama o método da estratégia que foi passada para ele.

---

### **Aplicações do Padrão Strategy**

O Strategy é muito útil quando você tem várias formas diferentes de executar uma mesma ação, dependendo da situação. Aqui vão alguns exemplos práticos:

* Formas de pagamento diferentes (cartão, boleto, Pix).

* Algoritmos de ordenação diferentes (por nome, por data, por preço).

* Lógicas de validação que mudam dependendo do tipo de usuário.

* Cálculo de frete baseado em transportadoras diferentes.

* Comportamento de personagens em jogos, como diferentes modos de ataque (melee, ranged, mágica).

* Filtros em uma galeria de imagens, onde cada filtro é uma estratégia que aplica um efeito.

---

### **Exemplo**
Calculo de Frete

```js
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
```
---

#### Feito por: 
* João Lucas Ribeiro Leite 
* Maria E. Da Silva B.
* Milena F. Da Silva
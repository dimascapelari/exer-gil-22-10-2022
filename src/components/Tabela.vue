<template>
  <div class="container bg-light">
    <hr />
    <h2 class="text-center">Página Tabela Pai</h2>
    <h4>Mensagem recebida: {{ mensagemTabela }}</h4>

    <p>Mensagem: {{ mensagem }}</p>

    <hr />
    <Clientes :dados="dados" @clicou="recebi" />
    <Produtos :dadosProdutos="dadosProdutos" />
    <hr />
  </div>
</template>

<script>
import Clientes from "../views/Clientes/index.vue";
import Produtos from "../views/Produtos/index.vue";
export default {
  components: {
    Clientes,
    Produtos,
  },
  props: {
    mensagemTabela: String,
  },
  methods: {
    recebi(mensagemCliente) {
      //   alert("O filho clicou...");
      this.mensagem = mensagemCliente;
    },
  },
  data() {
    return {
      mensagem: "",
      dados: [
        {
          nome: "Dimas",
          email: "dimas@gmail.com",
          telefone: "(01)1234-5678",
          dataNascimento: "01/01/2001",
        },
        {
          nome: "Mariana",
          email: "mariana@gmail.com",
          telefone: "(01)1234-5678",
          dataNascimento: "01/01/2001",
        },
        {
          nome: "Gideão",
          email: "gideao@gmail.com",
          telefone: "(01)1234-5678",
          dataNascimento: "01/01/2001",
        },
        {
          nome: "Ana Karolina",
          email: "anakarolina@gmail.com",
          telefone: "(01)1234-5678",
          dataNascimento: "01/01/2001",
        },
      ],
      dadosProdutos: [
        {
          produto: "Camiseta Preta",
          valor: "100,00",
          tamanho: "P",
          quantidade: 10,
          marca: "Personalize Estampas",
        },
        {
          produto: "Camiseta Vermelha",
          valor: "90,00",
          tamanho: "M",
          quantidade: 15,
          marca: "Personalize Estampas",
        },
        {
          produto: "Camiseta Cinza",
          valor: "80,00",
          tamanho: "G",
          quantidade: 20,
          marca: "Personalize Estampas",
        },
        {
          produto: "Camiseta Branca",
          valor: "70,00",
          tamanho: "GG",
          quantidade: 25,
          marca: "Personalize Estampas",
        },
      ],
    };
  },
};
</script>

<style>
</style>
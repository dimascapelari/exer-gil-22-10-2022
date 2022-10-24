<template>
  <nav>
    <router-link to="/">Clientes</router-link> |
    <router-link to="/about">Produtos</router-link> |
    <router-link to="/tabela">Tabela</router-link>
    <Tabela :mensagemTabela="mensagemTabela" />
  </nav>
  <router-view />
</template>

<script>
import Tabela from "./components/Tabela.vue";

export default {
  data() {
    return {
      mensagemTabela: "Mensagem via props da página APP",
    };
  },
  components: {
    Tabela,
  },
};
</script>

<style>
</style>

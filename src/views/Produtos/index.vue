<template>
  <div>
    <h2 class="text-center">Produtos Filho 2</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Valor</th>
          <th>Tamanho</th>
          <th>Quantidade</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produto, index) in dadosProdutos" :key="index">
          <td>{{ produto.produto }}</td>
          <td>{{ produto.valor }}</td>
          <td>{{ produto.tamanho }}</td>
          <td>{{ produto.quantidade }}</td>
          <td>{{ produto.marca }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dadosProdutos: Array,
  },
  // data() {
  //   return {
  //     dados: [
  //       {
  //         produto: "Camiseta Preta",
  //         valor: "100,00",
  //         tamanho: "P",
  //         quantidade: 10,
  //         marca: "Personalize Estampas",
  //       },
  //       {
  //         produto: "Camiseta Vermelha",
  //         valor: "90,00",
  //         tamanho: "M",
  //         quantidade: 15,
  //         marca: "Personalize Estampas",
  //       },
  //       {
  //         produto: "Camiseta Cinza",
  //         valor: "80,00",
  //         tamanho: "G",
  //         quantidade: 20,
  //         marca: "Personalize Estampas",
  //       },
  //       {
  //         produto: "Camiseta Branca",
  //         valor: "70,00",
  //         tamanho: "GG",
  //         quantidade: 25,
  //         marca: "Personalize Estampas",
  //       },
  //     ],
  //   };
  // },
};
</script>

<style>
</style>
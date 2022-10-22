<template>
  <div>
    <h1>Clientes</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Data de Nascimento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in dados" :key="index">
          <td>
            {{ cliente.nome }}
          </td>
          <td>
            {{ cliente.email }}
          </td>
          <td>
            {{ cliente.telefone }}
          </td>
          <td>
            {{ cliente.dataNascimento }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>

<style>
</style>
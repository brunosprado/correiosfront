<template>
  <div>
    <v-app id="inspire">
      <v-app-bar class="main-bar" dark style="height: 100px;">
        <v-toolbar-title style="margin-top: 30px;">
          <h2>Guesser Encomendas</h2>
          <h4>Cadastro</h4>
        </v-toolbar-title>
      </v-app-bar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Registro</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }"></template>
                  </v-tooltip>
                  <v-tooltip right>
                    <template v-slot:activator="{ on }"></template>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Nome" name="nome" type="text"></v-text-field>
                    <v-text-field label="CPF" name="cpf" type="text"></v-text-field>
                    <v-text-field label="E-mail" name="email" type="text"></v-text-field>
                    <v-text-field label="Telefone" name="telefone" type="text"></v-text-field>
                    <v-text-field
                      :rules="[rules.required, rules.min]"
                      :type="showPassword ? 'text' : 'password'"
                      name="input-10-2"
                      label="Senha"
                      hint="Mínimo 8 caracteres"
                      class="input-group--focused"
                      prepend-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary">Voltar</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">Registrar</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      showPassword: false,
      password: "Password",
      rules: {
        required: value => !!value || "Insira sua senha.",
        min: v => v.length >= 8 || "Mínimo 8 caracteres"
      }
    };
  }
};
</script>
<style>
v-content {
  margin: auto;
}
</style>
<template>
  <div>
    <v-app id="inspire">
      <v-app-bar class="main-bar" app color="primary" dark style="height: 100px;">
        <v-toolbar-title >
          <h2>Guesser Encomendas {{tst}}</h2>
          <h4>Login</h4>
        </v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field label="CPF" name="login" type="text"></v-text-field>

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
                  <v-btn color="primary" @click="acessou">Cadastrar-se</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="primary" app>
        <span class="white--text">&copy; 2019 - FEAN POO3</span>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      tst: 'kkk',
      showPassword: false,
      password: "Password",
      rules: {
        required: value => !!value || "Insira sua senha.",
        min: v => v.length >= 8 || "Mínimo 8 caracteres",
        emailMatch: () => "O CPF e/ou a senha não estão registrados"
      }
    };
  },
  methods: {
    acessou() {
      this.$router.push({ path: "/cadastro" });
    }
  }
};
</script>
<style>
.main-bar {
  background-image: url("../assets/msg.jpg");
  background-size: cover;
  background-position: center;
  margin-top: 30px;
}
v-content {
  margin: auto;
}
</style>
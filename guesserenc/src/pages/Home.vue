<template>
  <div>
    <div id="app">
      <v-app id="inspire">
        <v-app-bar class="main-bar" dark prominent>
          <v-col>
            <v-toolbar-title style="margin-top: 30px;">
              <h2>Guesser Encomendas</h2>
              <h4>Início</h4>
            </v-toolbar-title>
          </v-col>
          <v-col></v-col>
          <v-col :lg="1">
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn style="margin-top: 70px;" color="accent" dark v-on="on">Adicionar Código</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>Adiconar Código</v-card-title>
                  <v-text-field
                    v-model="tst"
                    style="margin: 0px 15px;"
                    label="Código"
                    name="codigo"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="xd"
                    style="margin: 0px 15px;"
                    label="Nome"
                    name="nome"
                    type="text"
                  ></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="add">Cadastrar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-col>
        </v-app-bar>
        <v-spacer></v-spacer>
        <v-content>
          <v-expansion-panels fluid fill-height>
            <v-expansion-panel v-for="(item,i) in prod" :key="i">
              <v-expansion-panel-header>
                <v-col>{{prod[i].code}}</v-col>
                <v-col>{{prod[i].product}}</v-col>
                <v-col>{{receba[i].data[0].localState}}</v-col>
                <v-col>{{receba[i].data[0].description}}</v-col>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul v-for="(items,index) in receba[i].data" :key="index">
                  <li>Data: {{ receba[i].data[index].date }}</li>
                  <li>Horário: {{ receba[i].data[index].time }}</li>
                  <li>Localização {{ receba[i].data[index].localState }}</li>
                  <li>Descrição: {{ receba[i].data[index].description }}</li>
                  <br />
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-footer color="primary" app>
            <span class="white--text">&copy; 2019 - FEAN POO3</span>
          </v-footer>
        </v-content>
      </v-app>
    </div>
  </div>
</template>
<script>
import Code from "../service/codes";

export default {
  mounted() {
    this.acc();
  },
  methods: {
    add() {
      this.prod.push({ code: this.xd, name: this.tst });
    },
    acc() {
      for (let index = 0; index < this.tracking.length; index++) {
        const element = this.tracking[index];
        Code.listar(element.code).then(resposta => {
          this.receba[index] = resposta;
        });
      }
    }
  },
  data() {
    return {
      tst: "kkkkkkkkkkkkk",
      prod: [
        { code: "LX008580575US", name: "Placa de vídeo" },
        { code: "PX426417452BR", name: "Air fryer" },
        { code: "PX426417452BR", name: "Dinossauro" }
      ],
      panel: [],
      items: 5,
      receba: [],
      codeOne: [{ codexd: "LX008580575US" }, { codexd: "PX426417452BR" }]
    };
  }
};
</script>
<style>
</style>
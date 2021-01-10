( function() {

    
  var vm = new Vue({
    vuetify: new Vuetify(),
    el: document.querySelector('#mount'),
    template: `
    <div data-app="true" class="v-application v-application--is-ltr theme--light" id="app">
    
    <v-container >

      <v-row>
        <v-col cols='12' sm='6'>
          <v-card
            class="mx-auto"
            max-width="450"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="/wp-content/uploads/2021/01/feature2.jpg"
            >
              <v-card-title>ENVÍOS AÉREOS</v-card-title>
            </v-img>

            <v-card-title class="pb-0">Calculado por Peso</v-card-title>

            <v-card-text class="text--primary">
              <div>Peso Real (PR) y Peso Volumétrico (PV) en Lb</div>
              <div class="font-weight-bold">PESO (Lb) x TARIFA (US$4.80)</div>

              <div class="text-center mt-2">
                <p>Introduce las dimensiones de tu caja (pulgadas):</p>
                <v-form>
                   <v-row align="center" justify="center">
                     <v-col cols='12' sm="4"  class="pb-0 mb-0">
                       <v-text-field
                        v-model="a_large"
                        label="Largo"
                        solo
                      ></v-text-field>
                     </v-col>
                     <v-col cols='12' sm="4"  class="pb-0 mb-0">
                       <v-text-field
                        v-model="a_high"
                        label="Alto"
                        solo
                      ></v-text-field>
                     </v-col>
                     <v-col cols='12' sm="4" class="pb-0 mb-0">
                       <v-text-field
                      v-model="a_width"
                        label="Ancho"
                        solo
                      ></v-text-field>
                     </v-col>
                     <v-col cols='12' sm="8" class="pt-0 mt-0">
                       <v-text-field
                          v-model="a_real"
                          label="Peso Real (PR) en LB"
                          dense
                          solo
                        ></v-text-field>
                     </v-col>

                   </v-row>

                  <v-row align="center" justify="center">
                    <v-col cols='12' sm="8">

                      <v-btn
                        @click.prevent="totalAereo"
                          color="primary"
                          class="white--text mr-2" >
                          Calcular
                          <v-icon right dark>mdi-calculator</v-icon>
                      </v-btn>
                      <v-btn
                          @click.prevent="cleanAereo"
                          color="grey lighten-1"
                          class="white--text mr-2" >
                          Limpiar
                          <v-icon right dark>mdi-close-circle</v-icon>
                      </v-btn>

                      <v-text-field
												class="mt-3"
                        v-model="a_volumen"
                        label="Peso Volumétrico (PV)"
                        dense
                        filled
                        rounded
                        readonly
                        v-if="a_total>0"
                      ></v-text-field>

                      <p class="font-weight-bold" v-if="a_total>0">Tarifa Estimada (US$)</p>

                      <v-text-field
                        v-if="a_total>0"
                        v-model="a_total"
                        label="Costo Total (US$)"
                        dense
                        filled
                        rounded
                        readonly
                        class="display-1"
                      ></v-text-field>


                    </v-col>
                  </v-row>


                </v-form>

              </div>
              <v-alert color="orange accent-4" dark icon="mdi-hand" dense class="mt-2">
                <strong>IMPORTANTE</strong>: la tarifa estimada considera el mayor valor entre el Peso Volumétrico (PV) y el Peso Real (PR)
              </v-alert>

            </v-card-text>

          </v-card>

        </v-col>

        <v-col cols='12' sm='6'>
          <v-card
            class="mx-auto"
            max-width="450"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="/wp-content/uploads/2021/01/feature1.jpg"
            >
              <v-card-title>ENVÍOS MARÍTIMOS</v-card-title>
            </v-img>

            <v-card-title class="pb-0">Calculado por VOLUMEN en pies cúbicos (PC)</v-card-title>

            <v-card-text class="text--primary">
              <div>largo x ancho x alto = (PC)</div>
              <div class="font-weight-bold">VOLUMEN (PC) x TARIFA ($14.00)</div>

              <div class="text-center">
                <p>Introduce las dimensiones de tu caja (pulgadas):</p>
                <v-form>
                  <v-row align="center" justify="center">
                     <v-col cols='12' sm="4"  class="pb-0 mb-0">
                       <v-text-field
                          v-model="m_large"
                          label="Largo"
                          solo
                        ></v-text-field>
                     </v-col>
                     <v-col cols='12' sm="4"  class="pb-0 mb-0">
                       <v-text-field
                          v-model="m_high"
                          label="Alto"
                          solo
                        ></v-text-field>
                     </v-col>
                     <v-col cols='12' sm="4"  class="pb-0 mb-0">
                        <v-text-field
                          v-model="m_width"
                            label="Ancho"
                            solo
                          ></v-text-field>
                     </v-col>
                  </v-row>
                  <v-row align="center" justify="center">
                    <v-col cols='12' sm="8">
                      <v-btn
                        @click.prevent="totalMaritimo"
                          color="primary"
                          class="white--text mb-4 mr-2" >
                          Calcular
                          <v-icon right dark>mdi-calculator</v-icon>
                      </v-btn>
                      <v-btn
                          @click.prevent="cleanMaritimo"
                          color="grey lighten-1"
                          class="white--text mb-4" >
                          Limpiar
                          <v-icon right dark>mdi-close-circle</v-icon>
                      </v-btn>

                      <v-text-field
                        v-if="m_total>0"
                        v-model="m_volumen"
                        label="Volumen (PC)"
                        dense
                        filled
                        rounded
                        readonly
                      ></v-text-field>

                      <p class="font-weight-bold"  v-if="m_total>0">Tarifa Estimada (US$) </p>

                      <v-text-field
                        v-if="m_total>0"
                        v-model="m_total"
                        label="Costo Total (US$)"
                        dense
                        filled
                        rounded
                        readonly
                        class="display-1"
                      ></v-text-field>


                    </v-col>
                  </v-row>


                </v-form>

              </div>

            </v-card-text>

          </v-card>

        </v-col>

      </v-row>


      </v-container>

    </div>`,
    mounted: function(){
      console.log("Hello Vueee!");
    },
    data: () => ({
        a_large: null,
        a_high: null,
        a_width: null,
        a_volumen: null,
        a_total: null,
        a_real: null,
        m_large: null,
        m_high: null,
        m_width: null,
        m_volumen: null,
        m_total: null,
    }),
    methods: {
      totalAereo(){
        this.a_volumen = (this.a_large * this.a_high * this.a_width) / 166;
        if (this.a_volumen > this.a_real) {
          this.a_total = Number (this.a_volumen * 4.80 ).toFixed(2);
        } else {
           this.a_total = Number (this.a_real * 4.80).toFixed(2);
        }
      },
      cleanAereo(){
        this.a_large = null
        this.a_high = null
        this.a_width = null
        this.a_volumen = null
        this.a_total = null
      },
      totalMaritimo(){
        this.m_volumen = (this.m_large * this.m_high * this.m_width) / 1728;
        this.m_total = Number( this.m_volumen * 14.00 ).toFixed(2);
      },
      cleanMaritimo(){
        this.m_large = null
        this.m_high = null
        this.m_width = null
        this.m_volumen = null
        this.m_total = null
      },
    }
  });



})();
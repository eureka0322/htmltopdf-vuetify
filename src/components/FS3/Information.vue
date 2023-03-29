<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>F</h2></v-avatar>
          <h3>Payer Information</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs8 class="info_content">
      <v-card>
        <v-card-text class="pb-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader><h3>Business Name</h3></v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-layout row wrap>
          <v-flex xs4>
            <v-subheader style="height: 40px;"><h3>Business Address</h3></v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-card-text class="py-0 px-0">
              <v-layout row>
                <v-flex xs3>
                  <v-subheader class="px-0 caption">House /No.</v-subheader>
                </v-flex>
                <v-flex xs7>
                  <v-text-field
                    name="input-3"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>


            <v-card-text class="py-0 px-0">
              <v-layout row>
                <v-flex xs3>
                  <v-subheader class="px-0 caption">Street</v-subheader>
                </v-flex>
                <v-flex xs7>
                  <v-text-field
                    name="input-3"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-card-text class="py-0 px-0">
              <v-layout row>
                <v-flex xs3>
                  <v-subheader class="px-0 caption">Locality</v-subheader>
                </v-flex>
                <v-flex xs7>
                  <v-text-field
                    name="input-3"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-flex>
        </v-layout>




        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader><h3>Postcode</h3></v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                ref="zip"
                :rules="[() => !!zip || 'This field is required']"
                v-model="zip"
                required
                placeholder="###-###-####"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader class="pr-0"><h3>Telephone Number</h3></v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-1-3"
                single-line
                prepend-icon="phone"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs5>
              <v-subheader><h3>Principal's Full Name</h3></v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs5>
              <v-subheader><h3>Principal's Position</h3></v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs5>
              <v-subheader><h3>Principal's Signature</h3></v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-layout row wrap>
        <v-flex xs6 offset-xs5>
          <span class="caption" style="color: #07544e;">Payer P.E.No.</span>
        </v-flex>
        <v-flex xs9 offset-xs3>
          <v-layout row class="payer-input">
            <v-flex xs2 offset-xs1>
              <v-subheader class="px-0">F1</v-subheader>
            </v-flex>
            <v-flex xs10>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap style="padding-top: 360px;">
        <v-flex xs6 offset-xs3>
          <span class="caption" style="color: #07544e;">Date</span>
        </v-flex>
        <v-flex xs12>
          <v-layout row class="payer-input">

            <v-flex xs2 offset-xs1>
              <v-subheader class="px-0">F2</v-subheader>
            </v-flex>
            <v-flex xs10>
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                :return-value.sync="date"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="date"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Information',
    data() {
      return {
        zip: null,
        date: null,
        menu: false,
      }
    },
    mounted() {
      console.log('----- FS3 / Payer Information mounted -----')
    }
  }
</script>

<style scoped>
  .teal {
    border-radius: 0 !important;
  }

  .chip .teal h2 {
    color: white;
  }

  .info_content {
    padding-left: 38px;
  }

  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 13px;

  }
  .payer-input .subheader {
    color: #02a596;
    font-weight: 200;
  }

  .info_content .subheader {
    color: #07544e;
    font-weight: 200;
    height: 50%;
  }
  .chip {
    border-radius: 0 !important;
    background-color: #c2ded7 !important;
    width: 260px;
  }
  .chip h3 {
    color: #059e90;
  }
  .payer-1 {
    display: flex;
    align-items: flex-end;
  }
  .payer-input {
    display: flex;
    align-items: center;
  }
  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }
</style>


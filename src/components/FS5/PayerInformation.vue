<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>A</h2></v-avatar>
          <h2>Payer Information</h2>
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

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader class="pr-0"><h3>Business Address</h3></v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-2"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>House /No.</v-subheader>
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
            <v-flex xs4>
              <v-subheader>Street</v-subheader>
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
            <v-flex xs4>
              <v-subheader>Locality</v-subheader>
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
            <v-flex xs4>
              <v-subheader><h3>Fax Number</h3></v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

      </v-card>
    </v-flex>
    <v-flex xs4 class="payer-1">
      <v-layout row wrap>
        <v-flex xs12>
          <v-layout row class="payer-input">
            <v-flex xs3 offset-xs1>
              <v-subheader>A1</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout row class="payer-input">
            <v-flex xs3 offset-xs1>
              <v-subheader>A2</v-subheader>
            </v-flex>
            <v-flex xs7>
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
    name: 'PayerInformation',
    data() {
      return {
        zip: null,
        date: null,
        menu: false,
      }
    },
    mounted() {
      console.log('----- AFS5 Payer Information mounted -----')
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

  .info_content .card__text {

  }

  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 14px;

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
    width: 360px;
  }

  .chip h2 {
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


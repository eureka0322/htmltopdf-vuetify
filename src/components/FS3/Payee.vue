<template>
  <v-layout row wrap>
    <v-flex xs6 style="height: 40px;">
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>A</h2></v-avatar>
          <h3>Payee Information</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs6 style="height: 40px;">
      <v-layout row wrap>
        <v-flex xs7 class="pt-3">
          <h4 style="color: #07544e; font-weight: 300; font-size: 14px;">For Year Ended 31 December</h4>
        </v-flex>
        <v-flex xs5>
          <v-layout row class="payer-input">
            <v-flex xs3 offset-xs1>
              <v-subheader class="px-0" style="color: #07544e;">A1</v-subheader>
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
    <v-flex xs7 class="info_content">
      <v-card>
        <v-card-text class="pb-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader><h3>Surname</h3></v-subheader>
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
              <v-subheader class="pr-0"><h3>First Name</h3></v-subheader>
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
              <v-subheader class="pr-0"><h3>Address</h3></v-subheader>
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

      </v-card>
    </v-flex>
    <v-flex xs5 class="payer-1 pt-4">
      <v-layout row wrap>
        <v-flex xs8 offset-xs3>
          <span class="caption" style="color: #07544e;">Payee's ID Card/IT Reg.No.</span>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <v-subheader style="color: #07544e;">A2</v-subheader>
        </v-flex>
        <v-flex xs9>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
        <v-flex xs8 offset-xs3>
          <span class="caption" style="color: #07544e;">Payee's Social Security No.</span>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <v-subheader style="color: #07544e;">A3</v-subheader>
        </v-flex>
        <v-flex xs9>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
        <v-flex xs8 offset-xs3>
          <span class="caption" style="color: #07544e;">Supouse's ID Card/IT Reg. No.</span>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <v-subheader style="color: #07544e;">A4</v-subheader>
        </v-flex>
        <v-flex xs9>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Payee',
    data() {
      return {
        zip: null,
        date: null,
        menu: false,
      }
    },
    mounted() {
      console.log('----- FS3 Payee Information mounted -----')
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

  .chip {
  border-radius: 0 !important;
  background-color: #c2ded7 !important;
  width: 260px;
  }

  .chip h3 {
  color: #059e90;
  }

  .info_content {
    padding-left: 38px;
  }

  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 13px;
  }

  .info_content .subheader {
    color: #07544e;
    font-weight: 200;
    height: 50%;
  }

  .payer-input {
    display: flex;
    align-items: center;
  }

  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }
</style>


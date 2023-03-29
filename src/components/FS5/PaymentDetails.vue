<template>
  <v-layout row wrap>
    <v-flex xs8>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>E</h2></v-avatar>
          <h2>Payment Details</h2>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs4>
      <div class="text-xs-center">
        <h1 style="color: green;">€</h1>
      </div>
    </v-flex>
    <v-flex xs6>
      <v-layout row wrap class="pl-5">
        <v-flex xs5>
          <h3>Date of Payment</h3>
        </v-flex>
        <v-flex xs7>
          <v-layout row>
            <v-flex xs10>
              <v-menu
                ref="menu1"
                :close-on-content-click="false"
                v-model="menu1"
                :nudge-right="40"
                :return-value.sync="date1"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="date1"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="date1" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs6>
      <v-layout row wrap class="pl-5">
        <v-flex xs4>
          <h3>Total Payment</h3>
        </v-flex>
        <v-flex xs7>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>E1</v-subheader>
            </v-flex>
            <v-flex xs10>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-card-text class="pl-5 pt-2 pb-1">
      <v-divider></v-divider>
    </v-card-text>
    <v-flex xs6>
      <v-layout row wrap class="pl-5">
        <v-flex xs12>
          <h2>Details of cheque(if applicable)</h2>
        </v-flex>
        <v-flex xs3>
          <h3>Bank</h3>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <h3>Branch</h3>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs6>
      <v-layout row wrap class="pl-5">
        <v-flex xs4>
          <h3>Cheque No.</h3>
        </v-flex>
        <v-flex xs7>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>E2</v-subheader>
            </v-flex>
            <v-flex xs10>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <h3 style="color: #07544e; font-weight: 500;">Bank Account No.</h3>
        </v-flex>
        <v-flex xs2>
          <v-subheader>E3</v-subheader>
        </v-flex>
        <v-flex xs9>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-card-text class="pl-5 pt-2 pb-1">
      <v-divider></v-divider>
    </v-card-text>
    <v-layout row wrap class="pl-5">
      <v-flex xs12>
        <h2>Details of person making payment</h2>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs3>
            <h3>Full Name</h3>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-1"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs3>
            <h3>Signature</h3>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-1"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-card-text class="pl-5 pt-2 pb-1">
      <v-divider></v-divider>
    </v-card-text>
    <v-layout class="pl-5" row wrap>
      <v-flex xs12>
        <h2>For Official Use Only</h2>
      </v-flex>
      <v-flex xs5 offset-xs3>
        <v-layout row wrap>
          <v-flex xs3>
            <h3>Receipt No:</h3>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-1"
            ></v-text-field>
          </v-flex>
          <v-flex xs2>
            <h3>Date</h3>
          </v-flex>
          <v-flex xs9>
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
      <v-flex xs4>
        <v-text-field
          name="input-1"
          textarea
          rows="3"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
  export default {
    name: 'PaymentDetails',
    data () {
      return {
        date: null,
        menu: false,
        date1: null,
        menu1: false,
      }
    },
    mounted() {
      console.log('----- FS5 Payment Details mounted -----')
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
    width: 360px;
  }

  .chip h2 {
    color: #179a8e;
  }

  .pl-5 {
    display: flex;
    align-items: center;
  }

  .pl-5 .xs3 {
    display: flex;
    align-items: center;
  }
  .pl-5 .xs2 {
    display: flex;
    align-items: center;
  }

  .pl-5 .xs2 .subheader {
    color: #07544e;
    font-weight: 200;
  }


  .pl-5 .xs4 h3, .pl-5 .xs3 h3, .pl-5 .xs5 h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 14px;
  }

  .pl-5 .xs12 h2 {
    color: #07544e;
    font-weight: 500;
    font-size: 17px;
  }

  .number-input {
    display: flex;
    align-items: center;
  }


  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }
</style>


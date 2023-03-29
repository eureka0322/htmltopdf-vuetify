<template>
  <v-layout row wrap>
    <v-flex xs8>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>A</h2></v-avatar>
          <h3>Payer Information</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs8 class="info_content">
      <v-card>
        <div style="border: solid 1px green;">
          <v-text-field
            name="input-1"
            textarea
            rows="2"
            style="padding-top: 0;"
            dark
          ></v-text-field>
        </div>
        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs5>
              <v-subheader class="pt-2"><h3>Telephone Number</h3></v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                name="input-1"
                single-line
                prepend-icon="phone"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs5>
              <v-subheader class="pr-0"><h3>Principal's Full Name</h3></v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                name="input-2"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs5>
              <v-subheader class="pr-0"><h3>Principle's Position</h3></v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                name="input-2"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs5>
              <v-subheader class="pr-0"><h3>Principle's Signature</h3></v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                name="input-2"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs4 class="pt-4">
      <v-layout row wrap>
        <v-flex xs8 offset-xs4>
          <span class="caption" style="color: #07544e;">For Year Ended 31 December</span>
        </v-flex>
        <v-flex xs2 offset-xs4>
          <v-subheader style="color: #075442;">A1</v-subheader>
        </v-flex>
        <v-flex xs6>
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
        <v-flex xs8 offset-xs4>
          <span class="caption" style="color: #07544e;">Payer P.E.No</span>
        </v-flex>
        <v-flex xs2 offset-xs2>
          <v-subheader style="color: #07544e;">A2</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
        <v-flex xs8 offset-xs3>
          <span class="caption" style="color: #07544e;">IT Reg.No</span>
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
          <span class="caption" style="color: #07544e;">ETC Reg.No</span>
        </v-flex>
        <v-flex xs9 offset-xs3>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs8 style="padding-left: 25px;">
      <v-layout row wrap class="under_content">
        <v-flex xs8>
          <v-subheader style="font-size: 12px;">Have you paid or reimbursed the cost of Childcare
            Facility for the benifit of the Employees?
          </v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-radio-group v-model="row" row>
            <v-radio label="Yes" value="radio-1"></v-radio>
            <v-radio label="No" value="radio-2"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex xs7>
          <v-subheader class="pr-0" style="font-size: 12px;">If yes insert amount paid and number of Employees
          </v-subheader>
        </v-flex>
        <v-flex xs1>
          <v-subheader style="font-size: 12px;">€</v-subheader>
        </v-flex>
        <v-flex xs2 class="pr-1">
          <span class="caption" style="color: #07544e;">Amount</span>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
        <v-flex xs2>
          <span class="caption" style="color: #07544e;">No.Employees</span>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs4>
      <v-layout class="pt-4" row wrap>
        <v-flex xs9 offset-xs3>
          <span class="caption" style="color: #07544e;">Date</span>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <v-subheader style="color: #07544e;">A4</v-subheader>
        </v-flex>
        <v-flex xs9>
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
</template>
<script>
  export default {
    name: 'Payer',
    data() {
      return {
        date: null,
        menu: false,
        date1: null,
        menu1: false,
        row: null
      }
    },
    mounted() {
      console.log('----- FS7 / Payer Information mounted -----')
    }
  }
</script>
<style>
  .teal {
    border-radius: 0 !important;
  }

  .chip .teal h2 {
    color: white;
  }

  .chip {
    border-radius: 0 !important;
    background-color: #c2ded7 !important;
    width: 230px;
  }

  .chip h3 {
    color: #1f8e53;
  }

  .info_content {
    padding-left: 38px;
  }

  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 12px;
  }

  .under_content .subheader {
    height: 70px;
    color: #07544e;
    font-weight: 300;
  }

  .info_content .subheader {
    color: #07544e;
    font-weight: 200;
    height: 50%;
  }

  .info_content .pt-5 {
    color: #07544e;
  }

  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }

  .input-group.radio-group.radio-group--row {
    padding-top: 5px;
  }

  .input-group.radio-group.radio-group--row .input-group__details {
    display: none !important;
  }

  .info_content card .input-group.input-group--text-field.input-group--textarea.primary--text .input-group__input {
    padding: 0 !important;
  }
</style>

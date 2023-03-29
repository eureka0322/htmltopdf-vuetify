<template>
  <v-layout row wrap>
    <v-flex xs6>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>D</h2></v-avatar>
          <h2>Tax Deductions and SSC due to IRD</h2>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs5 offset-xs1>
      <v-layout row wrap>
        <v-flex xs11>
          <div class="text-xs-center">
            <h1 style="color: green;">€</h1>
          </div>
        </v-flex>
        <v-flex xs1>
          <div class="text-xs-center pr-5">
            <h1 style="color: green;">c</h1>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap class="pl-5">
        <v-flex xs7>
          <h3>Tax Deductions (FSS Main or Fss Other applies)</h3>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>D1</v-subheader>
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
    <v-flex xs12>
      <v-layout row wrap class="pl-5">
        <v-flex xs7>
          <h3>Tax Deductions (FSS Part-time method applies)</h3>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>D2</v-subheader>
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
    <v-flex xs12>
      <v-layout row wrap class="pl-5">
        <v-flex xs7>
          <h3>Tax Arrears Dedictopms (as per amount on PCU2(A))</h3>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>D3</v-subheader>
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
    <v-flex xs12>
      <v-layout row wrap class="pl-5">
        <v-flex xs7>
          <h3>Total Tax Deductions</h3>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>D4</v-subheader>
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
    <v-flex xs12>
      <v-layout row wrap class="pl-5">
        <v-flex xs7>
          <h3>Social Security Contributions</h3>
        </v-flex>
        <v-flex xs5>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>D5</v-subheader>
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
    <v-flex xs12>
      <v-layout row wrap class="pl-5">
        <v-flex xs7>
          <h3>Maternity Fund COntributions</h3>
        </v-flex>
        <v-flex xs5>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>D5a</v-subheader>
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
    <v-flex xs12>
      <v-layout row wrap class="pl-5">
        <v-flex xs7>
          <h3>Total Due to Lnland Revenue</h3>
        </v-flex>
        <v-flex xs5>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>D6</v-subheader>
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
  </v-layout>
</template>

<script>
  export default {
    name: 'TaxDeductions',
    data() {
      return {}
    },
    mounted() {
      console.log('----- FS5 Tax Deductions mounted -----')
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
    height: 40px;
    display: flex;
  }

  .pl-5 .xs7 h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 14px;

  }

  .number-input {
    display: flex;
    align-items: center;
  }

  .number-input .subheader {
    color: #07544e;
    font-weight: 200;

  }


  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }
</style>


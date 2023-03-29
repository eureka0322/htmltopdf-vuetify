<template>
  <v-layout row wrap>
    <v-flex xs6>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>D</h2></v-avatar>
          <h3>Tax Deductions due as per FS3s attached</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs5 offset-xs1>
      <v-layout row wrap>
        <v-flex xs11>
          <div class="text-xs-center">
            <h5 style="color: green; padding-top: 30px;">€</h5>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap class="item">
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
      <v-layout row wrap class="item">
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
      <v-layout row wrap class="item">
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
      <v-layout row wrap class="item">
        <v-flex xs7>
          <h5 style="color: green;">Total Tax Deductions</h5>
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
  </v-layout></template>
<script>
  export default {
    name: 'Tax',
    data() {
      return {

      }
    },
    mounted() {
      console.log('----- FS7 / Tax Deductions due per FS3s attached mounted-----')
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
    width: 350px;
  }

  .chip h3 {
    color: #179a8e;
  }

  .item {
    display: flex;
    align-items: center;
    height: 40px;
    display: flex;
    padding-left: 36px;
  }

  .item .xs7 h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 12px;
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

<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>B</h2></v-avatar>
          <h2>Number of Payees</h2>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs8>
          <v-subheader><h3>Number of Payees (FSS Main or FSS Other Tax Deduction Method applies)</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs3>
              <v-subheader>B1</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs8>
          <v-subheader><h3>Number of Payees (FSS Part time Tax Deduction Method applies)</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs3>
              <v-subheader>B2</v-subheader>
            </v-flex>
            <v-flex xs9>
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
    name: 'NumberPayees',
    data() {
      return {}
    },
    mounted() {
      console.log('----- FS5 Number Payees mounted -----')
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

  .info_content {
    padding-left: 38px;
    height: 40px;
    display: flex;
  }

  .info_content .xs8 {
    display: flex;
    align-items: center;
  }

  .info_content .subheader {
    color: #07544e;
    font-weight: 200;
  }

  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 14px;

  }

  .number-input {
    display: flex;
    align-items: center;
  }

  .payer-input {
    display: flex;
    align-items: center;
  }
  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }
</style>


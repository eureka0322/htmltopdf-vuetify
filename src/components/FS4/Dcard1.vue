<template>
  <v-layout row wrap class="bcard-1">
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>D</h2></v-avatar>
          <h3>Other Emolument Income</h3>
        </v-chip>
      </div>
    </v-flex>

    <v-layout row wrap class="small-des-row">
      <v-flex xs5 offset-xs7>
        <v-subheader class="small-description px-0 pl-4"><h5>(Tick either box D2 or D3)</h5></v-subheader>
      </v-flex>
      <v-flex xs11 offset-xs1>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs10>
          <v-subheader class="pr-0"><h3>Deduct at the prescribed rate (20%)</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">D1</v-subheader>
            </v-flex>
            <v-flex xs8>
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
        <v-flex xs10>
          <v-subheader class="pr-0">
            <h3>
              Deduct at a higher rate
              <h4 style="font-size: 8px;">(You may indicate rate or leave blank and payer will calculate)</h4>
            </h3>
          </v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">D2</v-subheader>
            </v-flex>
            <v-flex xs8>
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
        <v-flex xs10>
          <v-subheader>
            <h3>
              Deduct at a lower rate
              <h4 style="font-size: 8px;">if pensioner or full-time student, indicate rate</h4>
            </h3>
          </v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">D3</v-subheader>
            </v-flex>
            <v-flex xs8>
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
        <v-flex xs10>
          <v-subheader><h4 style="font-size: 8px;">if not a pensioner or full-time student, tick this box to<br> request
            CIR’s permission</h4></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">D4</v-subheader>
            </v-flex>
            <v-flex xs8>
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
    name: 'Bcard1',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .bcard-1 {
    padding-right: 10px;
  }

  .teal {
    border-radius: 0 !important;
  }

  .chip .teal h2 {
    color: white;
  }

  .chip {
    border-radius: 0 !important;
    background-color: #c2ded7 !important;
    width: 99.5%;
  }

  .chip h3 {
    color: #179a8e;
  }

  .info_content {
    padding-left: 20px;
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
    font-size: 11px;
  }

  .info_content .subheader h4 {
    color: #07544e;
    font-weight: 300;
    font-size: 12px;
  }

  .info_content .subheader h5 {
    color: #07544e;
    font-weight: 300;
    font-size: 10px;
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

  .small-description {
    height: 15px !important;
    color: #179a8e;
    font-size: 10px;
  }
</style>


<template>
  <v-layout row wrap class="bcard-1">
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>B</h2></v-avatar>
          <h3>Main Source of Emolument Income</h3>
        </v-chip>
      </div>
    </v-flex>

    <v-layout row wrap class="small-des-row">
      <v-flex xs8 offset-xs4>
        <v-subheader class="small-description px-0 pl-3"><h5 class="pl-4">(See notes overleaf and tick the correct box)</h5></v-subheader>
      </v-flex>
      <v-flex xs11 offset-xs1 class="pl-2">
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs10>
          <v-subheader><h3>“Single” rates of tax</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">B1</v-subheader>
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
          <v-subheader><h3>“Married” rates of tax</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">B2</v-subheader>
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
          <v-subheader><h3>“Parent” rates of tax</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">B3</v-subheader>
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
          <v-subheader><h3>Overseas Employment rate of tax (15%)</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">B4</v-subheader>
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
          <v-subheader><h4>Persons returning to Employment or<br> Total Income less than € 9,500</h4></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">B5</v-subheader>
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
          <v-subheader><h4>Highly Qualified Persons rate of tax (15%)<br>
            or Qualifying Employment in Aviation rate of tax (15%)</h4></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">B6</v-subheader>
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
          <v-subheader class="px-0 pl-3"><h3>Main income from a qualifying sport activity (7.5%)</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0">B7</v-subheader>
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
    font-size: 12px;
  }
  .info_content .subheader h4 {
    color: #07544e;
    font-weight: 300;
    font-size: 9px;
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


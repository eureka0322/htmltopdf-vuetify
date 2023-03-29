<template>
  <v-layout row wrap class="bcard-1">
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip class="bcard-2-chip">
          <v-avatar class="teal"><h2>B</h2></v-avatar>
          <h3>FSS Main Tax Deduction</h3>
        </v-chip>
      </div>
    </v-flex>

    <v-layout row wrap class="small-des-row">
      <v-flex xs5 offset-xs7>
        <v-subheader class="small-description px-0 pl-3"><h5 class="pl-4">(Tick the correct box)</h5></v-subheader>
      </v-flex>
      <v-flex xs12 class="pl-0">
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs9>
          <v-subheader class="px-0"><h3>Use “single” rates if payee ticked B1</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">B8</v-subheader>
            </v-flex>
            <v-flex xs7>
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
        <v-flex xs9>
          <v-subheader class="px-0"><h3>Use “married” rates if payee ticked B2</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">B9</v-subheader>
            </v-flex>
            <v-flex xs7>
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
        <v-flex xs9>
          <v-subheader class="px-0"><h3>Use “parent” rates if payee ticked B3</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">B10</v-subheader>
            </v-flex>
            <v-flex xs7>
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
        <v-flex xs9>
          <v-subheader class="px-0"><h3>Withhold 15% tax if payee ticked B4</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">B11</v-subheader>
            </v-flex>
            <v-flex xs7>
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
        <v-flex xs9>
          <v-subheader class="px-0"><h3>Do not withhold tax if payee ticked B5</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">B12</v-subheader>
            </v-flex>
            <v-flex xs7>
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
        <v-flex xs9>
          <v-subheader class="px-0"><h3>Withhold 15% tax if payee ticked B6</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">B13</v-subheader>
            </v-flex>
            <v-flex xs7>
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
        <v-flex xs9>
          <v-subheader class="px-0"><h3>Withhold 7.5% tax if payee ticked B7</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">B14</v-subheader>
            </v-flex>
            <v-flex xs7>
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
    name: 'Bcard2',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .bcard-1 {
    padding-left:  0 !important;
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
    width: 100%;
  }

  .chip h3 {
    color: #179a8e;
  }

  .info_content {
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
    padding-left: 5px !important;
  }

  .info_content .subheader h3 {
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
  .bcard-2-chip {
    margin-left: 0 !important;
  }
</style>


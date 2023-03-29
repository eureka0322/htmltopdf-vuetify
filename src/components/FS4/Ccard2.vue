<template>
  <v-layout row wrap class="bcard-1">
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip class="bcard-2-chip">
          <v-avatar class="teal"><h2>C</h2></v-avatar>
          <h3>FSS Part-Time Tax Deduction</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs12>
          <v-subheader><h3>Effective Date for application of Part time rate</h3></v-subheader>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex xs12 class="info_content info-c9">
      <v-layout row wrap>
        <v-flex xs12>
          <v-layout row class="number-input">
            <v-flex xs3>
              <v-subheader>C9</v-subheader>
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

    <v-flex xs12 class="info_content para-c9">
      <v-layout row wrap>
        <v-flex xs10>
          <v-subheader><h3>Part time tax deduction rate</h3></v-subheader>
        </v-flex>
        <v-flex xs12 class="insert-left-padding">
          <v-subheader class="px-0"><h3>(insert rate which is applicable)</h3></v-subheader>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-layout row wrap class="card2-bottom">
      <v-flex xs12 class="info_content">
        <v-layout row wrap>
          <v-flex xs7>
            <v-layout row class="number-input">
              <v-flex xs3>
                <v-subheader class="px-0">C10</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-text-field
                  name="input-1"
                ></v-text-field>
              </v-flex>
              <v-flex xs5 >
                <v-subheader class="px-0"><h3>0% tax<br> rate</h3></v-subheader>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 class="info_content">
        <v-layout row wrap>
          <v-flex xs7>
            <v-layout row class="number-input">
              <v-flex xs3>
                <v-subheader class="px-0"> C11</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-text-field
                  name="input-1"
                ></v-text-field>
              </v-flex>
              <v-flex xs5 >
                <v-subheader class="px-0"><h3>7.5% tax<br> rate</h3></v-subheader>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 class="info_content">
        <v-layout row wrap>
          <v-flex xs7>
            <v-layout row class="number-input">
              <v-flex xs3>
                <v-subheader>C12</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-text-field
                  name="input-1"
                ></v-text-field>
              </v-flex>
              <v-flex xs5 >
                <v-subheader class="px-0"><h3>15% tax<br> rate</h3></v-subheader>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
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
    font-size: 13px;
  }
  .info_content .subheader h5 {
    color: #07544e;
    font-weight: 300;
    font-size: 8px;
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
  .bcard-2-chip {
    margin-left: 0 !important;
  }
  .info-c9 {
    margin-left: 30%;
  }
  .insert-left-padding {
    padding-left: 20%;
  }
  .card2-bottom {
    margin: 10% 0 15% 30%;
  }
  .para-c9 {
    margin-top: 20%;
  }
</style>


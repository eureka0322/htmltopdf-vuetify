<template>
  <v-layout row wrap class="bcard-1">
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>C</h2></v-avatar>
          <h3>Part-Time Employment (Qualifying)</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-layout row wrap class="small-des-row">
      <v-flex xs4 offset-xs8>
        <v-subheader class="small-description px-0"><h5 class="pl-2">(Tick the correct box)</h5></v-subheader>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs10>
          <v-subheader><h3>Pensioner</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">C1</v-subheader>
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
        <v-flex xs10>
          <v-subheader><h3>Full-time student/apprentice</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">C2</v-subheader>
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
        <v-flex xs10>
          <v-subheader><h3>Employed full-time elsewhere</h3></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">C3</v-subheader>
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
        <v-flex xs8>
          <v-subheader class="pr-0"><h4>if employed full-time elsewhere, provide full-time employer's P.E. number</h4></v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs12>
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
          <v-subheader class="pr-0"><h4>Married, not employed full-time elsewhere having a spouse
            being a full-time employee or pensioner</h4></v-subheader>
        </v-flex>
        <v-flex xs2>
          <v-layout row class="number-input">
            <v-flex xs5>
              <v-subheader class="px-0">C4</v-subheader>
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
    <v-flex xs12 class="pt-3">
      <v-layout row wrap class="pl-2">
        <v-flex xs3 offset-xs1 class="text-xs-center" style="background-color: #179a8e; color: white; height: 22px;">
          <h4 style="font-size: 13px;"> NIL Tax Rate</h4>
        </v-flex>
        <v-flex xs8 class="pl-2">
          <h5 style="font-weight: 100; font-size: 10px; color: #07544e;">
            Tick box C5 ONLY if your projected income from all sources for the
            year is expected to be below the taxable limits.
          </h5>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs9 offset-xs4>
      <v-layout row wrap>
        <v-flex class="pl-3" xs9>
          <h5 style="font-weight: 100; font-size: 10px; color: #07544e;">
            Note: You may lose your right to benefit from the reduced rate if you tick this box incometly.
          </h5>
        </v-flex>
        <v-flex xs3>
          <v-layout row wrap class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0" style="color: #07544e; font-weight: 200;">C5</v-subheader>
            </v-flex>
            <v-flex xs7 offset-xs1>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap class="pl-2">
        <v-flex xs3 offset-xs1 class="text-xs-center" style="background-color: #179a8e; color: white; height: 23px;">
          <h4 style="font-size: 13px;"> Withhold Tax</h4>
        </v-flex>
        <v-flex xs6 class="pl-2">
          <h5 style="font-weight: 100; font-size: 10px; color: #07544e;">
            Tick box C6 if earning income from a qualitying sport activity and opting for final withholding Tax at 7.5%.
          </h5>
        </v-flex>
        <v-flex xs2>
          <v-layout row wrap class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0" style="color: #07544e; font-weight: 200;">C6</v-subheader>
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
    <v-flex xs8 offset-xs4 style="height: 35px;">
      <v-layout row wrap >
        <v-flex class="pl-3" xs9>
          <h5 style="font-weight: 100; font-size: 10px; color: #07544e;">
           Tick box C7 to instruct your employer to start deducting tax at 15%.
          </h5>
        </v-flex>
        <v-flex xs3>
          <v-layout row wrap class="number-input">
            <v-flex xs4>
              <v-subheader class="px-0" style="color: #07544e; font-weight: 200;">C7</v-subheader>
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
    <v-flex xs8 offset-xs4>
      <v-layout row wrap >
        <v-flex xs4>
          <v-subheader class="px-0">
            <h4 style="font-weight: 100; font-size: 10px; color: #07544e;">
              Effective Date
            </h4>
          </v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-layout row >
            <v-flex xs2>
              <v-subheader class="px-0" style="color: #07544e; font-weight: 200;">C8</v-subheader>
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
    name: 'Ccard1',
    data() {
      return {}
    },
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
  .info_content .subheader h2 {
    color: white;
    font-weight: 300;
    font-size: 18px;
  }
  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 13px;
  }
  .info_content .subheader h4 {
    color: #07544e;
    font-weight: 300;
    font-size: 10px;
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
  .small-des-row {
    padding-left: 35px;
  }
  .info-h2 {
    /*margin-top: 40px;*/
  }
  .info-h2-title {
    background-color: #179a8e;
    /*margin-left: 15px;*/
  }
  .small-text-h4 {
    margin-top: 30px;
  }
  .info-4 {
    /* margin-left: 40px; */
    margin-top: 60px;
    margin-left: 150px;
  }
  .input-c8 {
    padding-top: 30px;
  }
</style>


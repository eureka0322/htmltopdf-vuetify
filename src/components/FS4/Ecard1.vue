<template>
  <v-layout row wrap class="bcard-1">
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>E</h2></v-avatar>
          <h3>Payee’s Declaration</h3>
        </v-chip>
      </div>
    </v-flex>

    <!--<v-flex xs12 class="info_content">-->
    <!--<v-layout row wrap>-->
    <!--<v-flex xs12>-->
    <!--<v-subheader class="px-0">Date</v-subheader>-->
    <!--</v-flex>-->
    <!--<v-flex xs6>-->
    <!--<v-subheader>-->
    <!--<h4 style="font-size: 9px;">-->
    <!--I, the undersigned, certify that the-->
    <!--information given on this form is-->
    <!--true and correct.-->
    <!--</h4>-->
    <!--</v-subheader>-->
    <!--</v-flex>-->
    <!--<v-flex xs6>-->
    <!--<v-layout>-->

    <!--<v-flex xs10>-->
    <!--<v-text-field-->
    <!--name="input-1"-->
    <!--&gt;</v-text-field>-->
    <!--</v-flex>-->
    <!--</v-layout>-->
    <!--</v-flex>-->
    <!--</v-layout>-->
    <!--</v-flex>-->

    <v-flex xs12>
      <v-layout row wrap class="info_content">
        <v-flex xs6>
          <v-subheader class="px-0">
            <h4 class="pl-3" style="font-size: 9px;">
              I, the undersigned, certify that the
              information given on this form is
              true and correct.
            </h4>
          </v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-layout class="pl-2">
            <v-flex xs12>
              <h5 style="color: #07544e;">Date</h5>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex xs12 class="info_content ecard-signature">
      <v-layout row wrap>
        <v-flex xs4 offset-xs1>
          <v-subheader class="pt-3">
            <h3>
              Signature
            </h3>
          </v-subheader>
        </v-flex>
        <v-flex xs7 pt-3>
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
    font-size: 14px;
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

  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }

</style>


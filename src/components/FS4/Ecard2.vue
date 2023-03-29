<template>
  <v-layout row wrap class="bcard-1">
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip class="bcard-2-chip ml-0">
          <v-avatar class="teal"><h2>E</h2></v-avatar>
          <h3>Payer’s Name and Signature</h3>
        </v-chip>
      </div>
    </v-flex>

    <v-layout class="pl-0" style="background-color: white;" row wrap>
      <v-flex xs7 class="info_content">
        <v-subheader><h3>Full name and position</h3></v-subheader>
      </v-flex>
      <v-flex xs5 class="pr-2">
        <v-text-field
          name="input-1"
        ></v-text-field>
      </v-flex>
      <v-flex xs3 class="info_content_1">
        <v-subheader><h3>Signature</h3></v-subheader>
      </v-flex>
      <v-flex xs9 class="pr-2">
        <v-text-field
          name="input-1"
        ></v-text-field>
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
    padding-left: 0 !important;
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

  .info_content_1 .subheader,
  .info_content .subheader {
    color: #07544e;
    font-weight: 200;
    padding-left: 5px !important;
  }

  .info_content_1 .subheader h3,
  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 15px;
  }

  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }

</style>


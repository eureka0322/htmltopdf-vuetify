<template>
  <v-layout row wrap class="bcard-1" style="padding-top: 105px;">
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip class="bcard-2-chip">
          <v-avatar class="teal"><h2>D</h2></v-avatar>
          <h3>FSS Other Emoluments Tax Deduction</h3>
        </v-chip>
      </div>
    </v-flex>

    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs8>
          <v-subheader><h3>Tax deduction rate on<br> other Emoluments</h3></v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs3>
              <v-subheader>D5</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-subheader>%</v-subheader>
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
    height: 175px;
    display: flex;
    padding: 30px 10px;
  }

  .info_content .subheader {
    color: #07544e;
    font-weight: 200;
    padding-left: 5px !important;
  }

  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 15px;
  }
  .number-input {
    display: flex;
    align-items: center;
  }
  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }

</style>


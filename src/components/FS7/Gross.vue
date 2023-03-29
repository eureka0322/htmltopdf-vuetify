<template>
  <v-layout row wrap>
    <v-flex xs6>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>C</h2></v-avatar>
          <h3>Gross Emoluments</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs6>
      <div class="text-xs-center pl-5">
        <h5 style="color: green; padding-top: 30px; ">€</h5>
      </div>
    </v-flex>
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs7>
          <v-subheader class="px-0"><h3>Gross Emoluments (FSS Main of FSS Other applies)</h3></v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>C1</v-subheader>
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
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs7>
          <v-subheader class="px-0"><h3>Gross Emoluments(FSS Part-time method applies)</h3></v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>C2</v-subheader>
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
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs7>
          <v-subheader class="px-0"><h3>Taxable Fring Benefits(Total of all Categories less any Non-Taxable Car Allowances)</h3>
          </v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>C3</v-subheader>
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
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs7>
          <v-subheader class="px-0"><h5 style="color: green;">Total Gross Emoluments and Fringe Benefits</h5></v-subheader>
        </v-flex>
        <v-flex xs4>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader>C4</v-subheader>
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
    name: 'Gross',
    data() {
      return {

      }
    },
    mounted() {
      console.log('----- FS7 / Gross Emoluments mounted -----')
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
    width: 230px;
  }

  .chip h3 {
    color: #179a8e;
  }

  .info_content {
    padding-left: 38px;
    height: 40px;
    display: flex;
  }

  .info_content .xs7, number-input {
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

  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }
</style>

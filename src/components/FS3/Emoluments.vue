<template>
  <v-layout row wrap>
    <v-flex xs5 style="margin-bottom: -13px;">
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>C</h2></v-avatar>
          <h3>Gross Emoluments</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs3 style="margin-bottom: -13px;">

      <div class="text-xs-right">
        <h3 style="color: green; padding-top: 30px;">€</h3>
      </div>
    </v-flex>
    <v-flex xs4 style="margin-bottom: -13px;">
      <div class="text-xs-right pl-5">
        <h5 style="color: green; font-size: 10px;">Breakdown of Fringe Benefits</h5>
      </div>
      <div class="text-xs-center" style="padding-left: 100px;">
        <h3 style="color: green; padding-top: 15px;">€</h3>
      </div>
    </v-flex>
    <v-flex xs12 class="info_content">
      <v-layout row wrap>
        <v-flex xs6>
          <v-subheader class="px-0"><h3>Gross Emoluments (FSS Main of FSS Other applies)</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader class="px-0 caption">C1</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader class="px-0 caption" style="font-weight: bold;">Cat1</v-subheader>
            </v-flex>
            <v-flex xs2>
              <v-subheader class="px-0 caption">C5</v-subheader>
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
        <v-flex xs6>
          <v-subheader class="px-0"><h3>Gross Emoluments(FSS Part-time method applies)</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader class="px-0 caption">C2</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader class="px-0 caption" style="font-weight: bold;">Cat2</v-subheader>
            </v-flex>
            <v-flex xs2>
              <v-subheader class="px-0 caption">C6</v-subheader>
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
        <v-flex xs6>
          <v-subheader class="px-0"><h3>Fringe Benefits ((Total of Boxes C5+C6+C7)-C8)</h3>
          </v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader class="px-0 caption">C3</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader class="px-0 caption" style="font-weight: bold;">Cat3</v-subheader>
            </v-flex>
            <v-flex xs2>
              <v-subheader class="px-0 caption">C7</v-subheader>
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
        <v-flex xs6>
          <v-subheader class="px-0"><h3>Total Gross Emoluments and Fringe Benefits</h3></v-subheader>
        </v-flex>
        <v-flex xs3>
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader class="px-0 caption">C4</v-subheader>
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
      <v-layout row wrap class="pl-4">
        <v-flex xs9>
          <v-subheader class="px-0"><h3>Non Taxable Car Cash Allowance (50% of Allowance up to a maximum of €1170)</h3></v-subheader>
        </v-flex>
        <v-flex xs3 class="pl-4">
          <v-layout row class="number-input">
            <v-flex xs2>
              <v-subheader class="px-0 caption">C8</v-subheader>
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
    name: 'Emoluments',
    data() {
      return {}
    },
    mounted() {
      console.log('----- FS3 / Emoluments mounted -----')
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
    width: 250px;
  }

  .chip h3 {
    color: #179a8e;
  }

  .info_content {
    padding-left: 38px;
    height: 25px;
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


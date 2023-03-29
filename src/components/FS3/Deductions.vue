<template>
  <v-layout row wrap>
    <v-flex xs5 style="margin-bottom: -13px;">
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>D</h2></v-avatar>
          <h3>Tax Deductions</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs6 style="margin-bottom: -13px;">
      <div class="text-xs-center pr-3">
        <h3 style="color: green;">€</h3>
      </div>
    </v-flex>
    <v-flex xs9>
      <v-layout row wrap>
        <v-flex xs12 class="info_content">
          <v-layout row wrap>
            <v-flex xs8>
              <v-subheader class="px-0"><h3>Tax Deductions(FSS Main or FSS Other applies)</h3></v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-layout row class="number-input">
                <v-flex xs2>
                  <v-subheader class="px-0 caption">D1</v-subheader>
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
            <v-flex xs8>
              <v-subheader class="px-0"><h3>Tax Deductions(FSS Part-time method applies)</h3></v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-layout row class="number-input">
                <v-flex xs2>
                  <v-subheader class="px-0 caption">D2</v-subheader>
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
            <v-flex xs8>
              <v-subheader class="px-0"><h3>Tax Arrears Deductions(as per amount on PCU2(A))</h3>
              </v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-layout row class="number-input">
                <v-flex xs2>
                  <v-subheader class="px-0 caption">D3</v-subheader>
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
            <v-flex xs8>
              <v-subheader class="px-0"><h3>Total Tax Deductions</h3></v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-layout row class="number-input">
                <v-flex xs2>
                  <v-subheader class="px-0 caption">D4</v-subheader>
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
    </v-flex>
    <v-flex xs3>
      <h5 class="caption pt-3 pl-3" style="color: #07544e;">NB: if part-time tax is less than the relative rate the whole emoluments will be charged at normal rates.
      </h5>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Deductions',
    data() {
      return {}
    },
    mounted() {
      console.log('----- FS3 / Tax Deductions mounted -----')
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


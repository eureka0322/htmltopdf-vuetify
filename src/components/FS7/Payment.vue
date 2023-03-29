<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>F</h2></v-avatar>
          <h3>Payments Made to IRD the Year</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs6>
          <v-layout row wrap>
            <v-flex xs12 style="padding-left: 6px;">
              <table>
                <thead style="background-color: #c2ded7;">
                <tr>
                  <th rowspan="2">Month</th>
                  <th rowspan="2">Receipt No.</th>
                  <th rowspan="2">Date</th>
                  <th>FSS Tax</th>
                  <th colspan="2">SSC</th>
                  <th colspan="2">Maternity<br> Fund</th>
                </tr>
                <tr>
                  <th>€</th>
                  <th>€</th>
                  <th>c</th>
                  <th>€</th>
                  <th>c</th>
                </tr>
                </thead>
                <tbody style="background-color: white;">
                <tr>
                  <td class="text-xs-center">Jan</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Feb</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Mar</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Apr</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">May</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Jun</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                </tbody>
              </table>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs6>
          <v-layout row wrap>
            <v-flex xs12>
              <table>
                <thead style="background-color: #c2ded7;">
                <tr>
                  <th rowspan="2">Month</th>
                  <th rowspan="2">Receipt No.</th>
                  <th rowspan="2">Date</th>
                  <th>FSS Tax</th>
                  <th colspan="2">SSC</th>
                  <th colspan="2">Maternity<br> Fund</th>
                </tr>
                <tr>
                  <th>€</th>
                  <th>€</th>
                  <th>c</th>
                  <th>€</th>
                  <th>c</th>
                </tr>
                </thead>
                <tbody style="background-color: white;">
                <tr>
                  <td class="text-xs-center">Jul</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Aug</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Sep</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Oct</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Nov</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td class="text-xs-center">Dec</td>
                  <template v-for="item in items">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                </tbody>
              </table>
            </v-flex>
          </v-layout>

        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs5 class="end_doc">
      <h5 class="pt-1" style="padding-left: 35px;">
        If the TOtal paid(F1) is less than total due(F2) plea<br>se enclose outstanding payment with FS5 form.
        In<br> the case of overpayment please enclose a letter <br>with this form explaining why the amounts differ
      </h5>
    </v-flex>
    <v-flex xs7 class="end_doc">
      <v-layout row wrap style="height: 38px;">
        <v-flex xs1>
          <v-subheader><h5>F1</h5></v-subheader>
        </v-flex>
        <v-flex xs5>
          <v-subheader><h5>ToTAL PAID JAN-DEC</h5></v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-layout row>
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap style="height: 38px;">
        <v-flex xs1>
          <v-subheader><h5>F2</h5></v-subheader>
        </v-flex>
        <v-flex xs5>
          <v-subheader><h5>TOTAL DUE AS PER ABOVE (D4, E1, E2)</h5></v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-layout row class="number-input">
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs1>
          <v-subheader><h5>F3</h5></v-subheader>
        </v-flex>
        <v-flex xs5>
          <v-subheader><h5>AMOUNT UNDERPAID/OVERPAID</h5></v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-layout row class="number-input">
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
            <v-flex xs4 class="pl-1">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs6 offset-xs6>
          <v-layout row wrap>
            <v-flex xs4 class="text-xs-center"><h5>FSS Tax</h5></v-flex>
            <v-flex xs4 class="text-xs-center"><h5>SSC</h5></v-flex>
            <v-flex xs4 class="text-xs-center"><h5>Maternity Fund</h5></v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    name: 'Payment',
    data() {
      return {
        items: [null, null, null, null, null, null, null]
      }
    },
    mounted() {
      console.log('----- FS7 / Payments Made to IRD During the Year mounted -----')
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

  table {
    width: 100%;
    empty-cells: show;
    border: 1px solid #38947d;
    border-collapse: collapse;
  }

  table td, table th {
    color: #38947d;
    min-width: 25px;
    min-height: 10em;
    border: 1px solid #38947d;
  }

  .chip {
    border-radius: 0 !important;
    background-color: #c2ded7 !important;
    width: 350px;
  }

  .chip h3 {
    color: #179a8e;
  }
  .end_doc h5 {
    font-weight: bold;
    color: #86b99e;
  }

  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }

  .column.sortable.active.asc.text-xs-left {
    padding: 0;
  }
</style>

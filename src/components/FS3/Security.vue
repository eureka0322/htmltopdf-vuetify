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
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12 style="padding-left: 37px;">
              <table style="border: none;">
                <thead style="background-color: #c2ded7;">
                <tr>
                  <th colspan="4">Basic Weekly Wage</th>
                  <th colspan="6">Social Security Contribute</th>
                  <th colspan="2">Maternity Fund <br> Contributions</th>
                  <th colspan="3">Weeks without pay</th>
                </tr>
                <tr>
                  <th rowspan="2">€</th>
                  <th rowspan="2">c</th>
                  <th rowspan="2">Number</th>
                  <th rowspan="2">Category</th>
                  <th colspan="2">Payee</th>
                  <th colspan="2">Payer</th>
                  <th colspan="2">Total SSC</th>
                  <th colspan="2">Payer</th>
                  <th rowspan="2">From</th>
                  <th rowspan="2">To</th>
                  <th rowspan="2">Number</th>
                </tr>
                <tr>
                  <th>€</th>
                  <th>c</th>
                  <th>€</th>
                  <th>c</th>
                  <th>€</th>
                  <th>c</th>
                  <th>€</th>
                  <th>c</th>
                </tr>
                </thead>
                <tbody style="background-color: white;">
                <tr>
                  <template v-for="item in items2">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                  <td rowspan="3" class="text-xs-center"></td>
                  <td rowspan="3" class="text-xs-center"></td>
                  <td rowspan="3" class="text-xs-center"></td>
                </tr>
                <tr>
                  <template v-for="item in items2">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <template v-for="item in items2">
                    <td class="text-xs-center">{{item}}</td>
                  </template>
                </tr>
                <tr>
                  <td style="background-color: #e3efe8; border:none" class="text-xs-center"></td>
                  <td style="background-color: #e3efe8; border:none;" class="text-xs-center"></td>
                  <td style="background-color: #e3efe8; border:none;" class="text-xs-center"></td>
                  <td style="background-color: #e3efe8; border:none; " class="text-xs-center">Total</td>
                  <td class="text-xs-center"></td>
                  <td class="text-xs-center"></td>
                  <td class="text-xs-center"></td>
                  <td class="text-xs-center"></td>
                  <td class="text-xs-center"></td>
                  <td class="text-xs-center"></td>
                  <td class="text-xs-center"></td>
                  <td class="text-xs-center"></td>
                  <td style="background-color: #e3efe8; border:none;" class="text-xs-center">E1</td>
                  <td style="background-color: #e3efe8; border:none;" class="text-xs-center"></td>
                  <td style="background-color: #e3efe8; border:none;" class="text-xs-center"></td>
                </tr>
                </tbody>
              </table>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    name: 'Security',
    data() {
      return {
        items2: [null, null, null, null, null, null, null, null, null, null, null, null],
        show: false
      }
    },
    mounted() {
      console.log('----- FS3 / social security and Maternity Fund Information mounted -----')
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
    height: 20px;
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

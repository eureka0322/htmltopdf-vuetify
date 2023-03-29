<template>
  <main id="ES3">
    <v-container id="toPdf" class="px-0 py-0" ref="toPdf" fluid>
      <v-flex xs12 class="total_layout">
        <v-layout row wrap style="height: 1900px;">
          <v-flex xs2 class="left-brand">
            <img id="side_mark" src="../assets/F3.png">
          </v-flex>
          <v-flex xs10>
            <v-card-text class="pl-0">
              <v-layout row wrap class="pl-4">
                <v-flex xs3 class="text-xs-center">
                  <h1 class="display-4">FS3</h1>
                </v-flex>
                <v-flex xs9 class="text-xs-left pl-3 pt-2">
                  <h4 class="display-1" style="height: 22px;">
                    Final Settlement System (FSS)
                  </h4>
                  <h4 class="display-1">
                    Payee Statement of Earnings
                  </h4>
                </v-flex>
              </v-layout>
              <payee/>
              <v-card-text class="px-0 pt-2 pb-1">
                <v-divider></v-divider>
              </v-card-text>
              <period/>
              <v-card-text class="px-0 pt-2 pb-1">
                <v-divider></v-divider>
              </v-card-text>
              <emoluments/>
              <v-card-text class="px-0 pt-3 pb-1">
                <v-divider></v-divider>
              </v-card-text>
              <deductions/>
              <v-card-text class="px-0 pt-3 pb-1">
                <v-divider></v-divider>
              </v-card-text>
              <security/>
              <v-card-text class="px-0 pt-3 pb-1">
                <v-divider></v-divider>
              </v-card-text>
              <information/>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-container>
    <v-container v-if="showPrintButton">
      <v-btn block color="secondary" @click="print">Print</v-btn>
      <v-btn block color="secondary" @click="toPdf">Create PDF</v-btn>
    </v-container>
  </main>
</template>

<script>
  import Payee from './FS3/Payee'
  import Period from './FS3/Period'
  import Emoluments from './FS3/Emoluments'
  import Deductions from './FS3/Deductions'
  import TaxDeductions from './FS5/TaxDeductions'
  import Information from './FS3/Information'
  import Security from './FS3/Security'
  import jsPDF from "jspdf"
  import html2canvas from 'html2canvas';

  export default {
    name: 'FS3',
    data() {
      return {
        gradient: 'to top, #d6e9e2, #009688',
        showPrintButton: true,
      }
    },
    mounted() {
      console.log('----- FS5 English Mounted -----')

    },
    components: {
      Payee, Emoluments,Deductions, TaxDeductions, Information,Period,Security
    },
    methods: {
      print() {
        this.showPrintButton = false;
        //window.print(); this.showPrintButton = true;
        setTimeout(() => {
          window.print();
          this.showPrintButton = true;
        }, 0);
      },

      toPdf() {
        let data = this;
        data.$refs.toPdf.style.width = '21cm';
        data.$refs.toPdf.style.paddingLeft = '5mm';
        data.$refs.toPdf.style.paddingTop = '5mm';
        html2canvas(data.$refs.toPdf).then(function (canvas) {
          let img = canvas.toDataURL("image/png");
          data.$refs.toPdf.style.width = 'initial';
          data.$refs.toPdf.style.paddingLeft = 'initial';
          data.$refs.toPdf.style.paddingTop = 'initial';
          let doc = new jsPDF('p', 'mm');
          doc.addImage(img, 'JPEG', 0, 0, 210, 300);
          doc.save('tmp.pdf');
        });

      }
    }
  }
</script>

<style scoped>

  .display-4 {
    font-weight: 600 !important;
    color: #5aa18f;
    font-size: 90px !important;
  }

  .display-1 {
    font-weight: 600 !important;
    color: #5aa18f;
    font-size: 24px !important;
  }

  .total_layout {
    background-color: #e3efe8;
  }

  .total_layout img {
    width: 100%;
    height: 100%;
  }

</style>

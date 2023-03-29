<template>
  <main id="FS7">
    <v-container id="toPdf" ref="toPdf" fluid class="px-0 py-0">
      <v-layout row wrap>
        <v-flex xs1>
          <img id="side_mark" src="../assets/FS7.jpg">
        </v-flex>
        <v-flex xs11 class="total_layout">
          <v-card-text>
            <v-layout class="doc_header" row wrap>
              <v-flex xs8>
                <v-card-text class="py-0 pl-0">
                  <h5>The Lnland REvenue Department Uses the Information provided, to process this for in accordance
                    with the Income Tax Acts and subsidiary legislantion. We may check information provided by you,
                    or information about you provided by a third part, with other information held by us. We will not
                    disclose information about you to anyone outside the Lnland Revenue Department unless permitted
                    by law. The Inland Revenue Department treats your personal information in accordance with the
                    Data Protection Act 2001 (Cap 440) to protect your privacy. Any queries may be addressed to The Data
                    Controller Inland Revenue Department, Floriana FRN 0710.</h5>
                </v-card-text>
              </v-flex>
              <v-flex xs4 class="blank px-0 py-0"></v-flex>
              <v-flex xs4 class="display-3 text-xs-center">
                <h1>FS7</h1>
              </v-flex>
              <v-flex xs7>
                <h2>Final Settlement System (FSS)</h2>
                <h2>Payer's Annual Reconciliation</h2>
                <h2>Statement</h2>
              </v-flex>
            </v-layout>
            <payer/>
            <v-card-text class="px-0 pt-2 pb-1">
              <v-divider></v-divider>
            </v-card-text>
            <number/>
            <v-card-text class="px-0 pt-2 pb-1">
              <v-divider></v-divider>
            </v-card-text>
            <gross/>
            <v-card-text class="px-0 pt-2 pb-1">
              <v-divider></v-divider>
            </v-card-text>
            <tax/>
            <v-card-text class="px-0 pt-2 pb-1">
              <v-divider></v-divider>
            </v-card-text>
            <social/>
            <maternity/>
            <v-card-text class="px-0 pt-2 pb-1">
              <v-divider></v-divider>
            </v-card-text>
            <payment/>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-if="showPrintButton">
      <v-btn block color="secondary" @click="print">Print</v-btn>
      <v-btn block color="secondary" @click="toPdf">Create PDF</v-btn>
    </v-container>
  </main>
</template>
<script>
  import Payer from './FS7/Payer'
  import Number from './FS7/Number'
  import Gross from './FS7/Gross'
  import Tax from './FS7/Tax'
  import Social from './FS7/Social'
  import Maternity from './FS7/Maternity'
  import Payment from './FS7/Payment'
  import jsPDF from "jspdf"
  import html2canvas from 'html2canvas';

  export default {
    name: 'FS7',
    data() {
      return {
        showPrintButton: true,
      }
    },
    components: {
      Payer, Number, Gross, Tax, Social, Maternity, Payment
    },
    mounted() {
      console.log('----- FS7 mounted -----')
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
          doc.addImage(img, 'JPEG', 0, 0, 210, 298);
          doc.save('tmp.pdf');
        });

      }
    }
  }
</script>
<style scoped>
  .total_layout {
    background-color: #f1f1f1;
  }

  #side_mark {
    width: 100%;
    height: 100%;
  }

  .doc_header .xs8 h5 {
    font-weight: bold;
    color: #86b99e;
  }

  .doc_header .xs7{
    color: #268854;
    padding-top: 30px;
  }
  .doc_header .display-3{
    height: 0px;
  }

  .doc_header .blank {
    background-color: white;
    /*height: 179px;*/
  }

  .doc_header h1 {
    color: #249c63;
  }

</style>

<template>
  <main id="FS4">
    <v-container id="toPdf" class="px-0 py-0" ref="toPdf" fluid>
        <v-layout row wrap class="total_layout" style="height: 2180px;">
          <v-flex xs2 class="left-brand">
            <img id="side_mark" src="../assets/fs4-left-side.jpg">
          </v-flex>
          <v-flex xs10 class="pt-2">
              <v-layout row wrap class="pl-4">
                <v-flex xs3 class="text-xs-center">
                  <h1 class="display-4">FS4</h1>
                </v-flex>
                <v-flex xs9 class="text-xs-left pt-2">
                  <h4 class="display-1">
                    Final Settlement System (FSS)<br>Payee Status Declaration
                  </h4>
                  <p class="display-5">
                    (The Department’s Data Protection Policy and further instructions<br> are at the back of this page)
                  </p>
                </v-flex>
              </v-layout>
              <v-layout row wrap class="components-side">
                <v-flex xs6 class="fs-four-left-side">
                  <fs-fourtitle1/>
                  <acard1 />
                  <bcard1 />
                  <ccard1 />
                  <dcard1 />
                  <ecard1 />
                </v-flex>
                <v-flex xs6 class="fs-four-right-side pr-3">
                  <fs-fourtitle2/>
                  <acard2 />
                  <bcard2 />
                  <ccard2 />
                  <dcard2 />
                  <ecard2 />
                </v-flex>
              </v-layout>
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
  import FsFourtitle1 from './FS4/FsFourtitle1'
  import FsFourtitle2 from './FS4/FsFourtitle2'
  import Acard1 from './FS4/Acard1'
  import Acard2 from './FS4/Acard2'
  import Bcard1 from './FS4/Bcard1'
  import Bcard2 from './FS4/Bcard2'
  import Ccard1 from './FS4/Ccard1'
  import Ccard2 from './FS4/Ccard2'
  import Dcard1 from './FS4/Dcard1'
  import Dcard2 from './FS4/Dcard2'
  import Ecard1 from './FS4/Ecard1'
  import Ecard2 from './FS4/Ecard2'
  import jsPDF from "jspdf"
  import html2canvas from 'html2canvas'

  export default {
    name: 'FS4',
    data() {
      return {
        gradient: 'to top, #d6e9e2, #009688',
        showPrintButton: true,
      }
    },
    components: {
      FsFourtitle1, FsFourtitle2, Acard1, Acard2, Bcard1, Bcard2, Ccard1, Ccard2, Dcard1, Dcard2, Ecard1, Ecard2
    },
    methods: {
      print() {
        this.showPrintButton = false;
        setTimeout(()=> {window.print();
        this.showPrintButton = true;
      },0);
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
  #FS4 {
    height: 2500px !important;
  }
  .display-4 {
    font-weight: 600 !important;
    color: #5aa18f;
    font-size: 90px !important;
  }

  .display-1 {
    font-weight: 600 !important;
    color: #5aa18f;
    font-size: 24px !important;
    line-height: 1 !important;
  }

  .display-5 {
    color: #5aa18f;
    font-size: 1em;
    font-weight: 900 !important;
    font-style: italic;
  }
  .total_layout {
    background-color: #e3efe8;
  }
  .text-xs-left {
    padding-left:10px;
  }
  .total_layout img {
    width: 100%; height: 100%;
  }
</style>

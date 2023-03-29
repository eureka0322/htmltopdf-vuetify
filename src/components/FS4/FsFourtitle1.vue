<template>
  <v-layout row wrap>
    <v-flex xs2 class="title-h pt-3">
      <img id="side_mark" src="../../assets/FS41.png" style="height: 57px;">
    </v-flex>
    <v-flex xs9>
      <p class="xs9-weight">To be completed by the Payee<br>and given to the Payer</p>
      <p class="xs9-smalltext">Fill in Parts A and E and ONLY ONE of Parts B, C or D</p>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'FsFourtitle',
  }
</script>

<style scoped>
  .wrap {
    background-color: #c2ded7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin: 0 10px 3px 40px;
  }
  .rotate {
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    margin: 0;
  }
  .row .rotate-p {
    font-size: 0.7em;
    color: #5aa18f;
    text-align: right;
    flex-basis: unset;
    width: 10px;
  }
  .row .title-h {
    padding-top: 0%;
    font-size: 30px;
    color: #5aa18f;
  }
  .row .xs9 {
    color:#5aa18f;
    line-height: 15px;
  }
  .xs9-weight {
    font-weight: 900;
    padding-left: 10px;
    margin-bottom: 0 !important;
  }
  .xs9-smalltext {
    font-size: 0.7em;
    padding-left: 10px;
    margin-bottom: 0 !important;
  }
</style>


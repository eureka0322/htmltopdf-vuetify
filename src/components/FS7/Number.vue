<template>
  <v-layout row wrap>
    <v-flex xs8>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>B</h2></v-avatar>
          <h3>Number of FS3s Issued</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs4>
      <v-layout row class="number-input">
        <v-flex xs2 offset-xs1>
          <v-subheader>B1</v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-text-field
            name="input-1"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    name: 'Number',
    data() {
      return {

      }
    },
    mounted() {
      console.log('----- FS7 / Number of FS3s issued mounted -----')
    }
  }
</script>
<style scoped>
  .teal {
    border-radius: 0 !important;
  }
  .layout {
    height: 38px;
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

  .number-input .subheader {
    color: #07544e;
    font-weight: 200;
  }


  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }
</style>

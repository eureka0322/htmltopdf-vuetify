<template>
  <v-layout row wrap>

    <v-flex xs7>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>E2</h2></v-avatar>
          <h4>Maternity Fund Contributions due to IRD as per FS3 attached</h4>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs5 class="pl-1">
      <v-layout row class="number-input">
        <v-flex xs2 >
          <v-subheader class="pl-4">E2</v-subheader>
        </v-flex>
        <v-flex xs10>
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
    name: 'Maternity',
    data() {
      return {

      }
    },
    mounted() {
      console.log('----- FS7 / Maternity Fud Contributions due to IRD as per FS3 attached -----')
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
    width: 400px;
  }

  .chip h4 {
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


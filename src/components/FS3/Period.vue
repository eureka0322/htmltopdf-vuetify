<template>
  <v-layout row wrap>
    <v-flex xs4>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>B</h2></v-avatar>
          <h3>Period</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs4>
      <v-layout row class="number-input">
        <v-flex xs3 offset-xs1>
          <v-subheader class="caption">B1<br>From</v-subheader>
        </v-flex>
        <v-flex xs7>
          <v-menu
            ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs4>
      <v-layout row class="number-input">
        <v-flex xs2 offset-xs1>
          <v-subheader class="caption">B2<br>To</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-menu
            ref="menu1"
            :close-on-content-click="false"
            v-model="menu1"
            :nudge-right="40"
            :return-value.sync="date1"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date1"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date1" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    name: 'Period',
    data() {
      return {
        date: null,
        menu: false,
        date1: null,
        menu1: false,
      }
    },
    mounted() {
      console.log('----- FS3 / Period mounted -----')
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

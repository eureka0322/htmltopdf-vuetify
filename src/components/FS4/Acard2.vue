<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="text-xs-left">
        <v-chip>
          <v-avatar class="teal"><h2>A</h2></v-avatar>
          <h3>General Information</h3>
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs12 class="info_content">
      <v-card>
        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4 class="pt-3">
              <v-subheader class="pr-0">P.E.Number A4</v-subheader>
            </v-flex>
            <v-flex xs7 class="pt-2">
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0 business-name">
          <v-layout row wrap>
            <v-flex xs4>
              <v-subheader class="pr-0">Business Name</v-subheader>
            </v-flex>
            <v-flex xs7 class="pt-4">
              <v-text-field
                name="input-2"
              ></v-text-field>
            </v-flex>

          </v-layout>
        </v-card-text>
        <v-flex xs12 >
          <v-text-field
            name="input-1"
            textarea
            rows='2'
            dark
          ></v-text-field>
        </v-flex>
        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4 class="pt-1">
              <v-subheader>Business Address</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0 sub-address">
          <v-layout row>
            <v-flex xs8>
              <v-layout row>
                <v-flex xs4 class="pt-1">
                  <v-subheader><h3>House/No</h3></v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-3"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs3>
                  <v-subheader><h3>Street</h3></v-subheader>
                </v-flex>
                <v-flex xs9>
                  <v-text-field
                    name="input-3"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs3>
                  <v-subheader><h3>Locality</h3></v-subheader>
                </v-flex>
                <v-flex xs9>
                  <v-text-field
                    name="input-3"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4 class="pt-1">
              <v-subheader>Postcode</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                ref="zip"
                :rules="[() => !!zip || 'This field is required']"
                v-model="zip"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4 class="pt-2">
              <v-subheader class="pr-0">Telephone No.</v-subheader>
            </v-flex>
            <v-flex xs7 class="pt-3">
              <v-text-field
                name="input-1-3"
                single-line
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Acard2',
    data() {
      return {
        zip: null,
      }
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

  .info_content .subheader h3 {
    color: #07544e;
    font-weight: 300;
    font-size: 9px;

  }
  .payer-input .subheader {
    color: #02a596;
    font-weight: 200;
  }

  .info_content .subheader {
    color: #07544e;
    font-weight: 200;
    height: 50%;
  }
  .chip {
    border-radius: 0 !important;
    background-color: #c2ded7 !important;
    margin: 0 !important;
    width: 100%;
  }
  .chip h3 {
    color: #059e90;
  }

  .payer-1 {
    display: flex;
    align-items: flex-end;
  }

  .payer-input {
    display: flex;
    align-items: center;
  }

  .input-group.input-group--text-field.primary--text {
    padding-top: 0;
  }
  .xs4 {
    padding-top: 30px;
  }
  .row-text {
    width: 280px !important;
    margin-left: 60px;
    padding-right: 20px;
    padding-top: 11px !important;
  }
  .sub-address {
    margin-left: 70px;
  }
</style>


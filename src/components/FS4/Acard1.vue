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
            <v-flex xs4 class="pt-2">
              <v-subheader><h3>ID Card/IT Reg.No. A1</h3></v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-1"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader class="pr-0"><h3>Spouse ID Card/IT No. A2</h3></v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-2"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Date Of Marriage</v-subheader>
              <v-subheader class="pr-0"><h3>(if applicable)</h3></v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-3"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Surename</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-3"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Firstname</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-3"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs3>
              <v-subheader>Address</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader><h3>House/No</h3></v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-3"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader><h3>Street</h3></v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-3"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader><h3>Locality</h3></v-subheader>
                </v-flex>
                <v-flex xs8>
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
            <v-flex xs4>
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
            <v-flex xs4>
              <v-subheader class="pr-0">Date of Birth   A3</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-1-3"
                single-line
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="py-0 px-0">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Social Security No.</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field
                name="input-1"
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
    name: 'Acard1',
    data() {
      return {
        zip: null,
      }
    }
  }
</script>

<style scoped>
  .wrap {
    margin-right: 10px;
  }
  .teal {
    border-radius: 0 !important;
  }

  .chip .teal h2 {
    color: white;
  }

  .info_content {
    padding-left: 38px;
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
    margin: 0 0 0 4px !important;
    width: 99.5%;
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
</style>


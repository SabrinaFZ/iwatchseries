import Vue from 'vue';
import Vuetify from 'vuetify';
import { config } from '@vue/test-utils'

config.mocks.$t = i => i;
config.mocks.localePath = i => i;

Vue.use(Vuetify);


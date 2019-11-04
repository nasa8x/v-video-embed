

import './layout.css';


import Vue from 'vue';
import App from './app.vue';
import Embed from '../dist/video-embed';

Vue.use(Embed);

new Vue({
  el: '#app', 
 
  render: h => h(App)
})

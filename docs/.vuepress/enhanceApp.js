import VueMDCAdapter from 'vue-mdc-adapter';
import "vue-mdc-adapter/dist/vue-mdc-adapter.css";
import "./styles/index.less";
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(VueMDCAdapter);
}

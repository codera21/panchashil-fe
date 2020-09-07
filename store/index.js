import Vuex from "vuex";
import homepage from "./modules/homepage";
import category from "./modules/category";
import singlepage from "./modules/singlepage";
import template from "./modules/template";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      homepage: homepage,
      category: category,
      singlepage: singlepage,
      template: template,
    },
  });
};

export default createStore;

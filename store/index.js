import Vuex from "vuex";
import homepage from "./modules/homepage";
import category from "./modules/category";
import singlepage from "./modules/singlepage";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      homepageModule: homepage,
      categoryModule: category,
      singlepageModule: singlepage,
    },
  });
};

export default createStore;

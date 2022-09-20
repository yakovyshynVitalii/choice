import { createStore, createLogger } from "vuex";
import commentsModel from "./modules/comments";

export default createStore({
  modules: {
    comments: commentsModel,
  },
});

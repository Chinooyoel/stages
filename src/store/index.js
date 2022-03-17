import { createStore } from "vuex";
import stagesModule from '@/modules/stages/store'

export default createStore({
  modules: {
    stages: stagesModule
  }
});

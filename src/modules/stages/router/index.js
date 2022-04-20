import Stages_1 from "../views/Stages_1.vue";
import Stages_2 from "../views/Stages_2.vue";
import Stages_3 from "../views/Stages_3.vue";
import Stages_4 from "../views/Stages_4.vue";
import Stages_5 from "../views/Stages_5.vue";
import Stages_6 from "../views/Stages_6.vue";
import Stages_7 from "../views/Stages_7.vue";
import Stages_8 from "../views/Stages_8.vue";

import store from "../../../store/index"

export default {
    name: "stages",
    redirect: { name: "stage_1" },
    component: () =>
        import(/* webpackChunkName: "stages" */ "../layout/StagesLayout.vue"),
    children: [
        {
            path: "stage_1",
            name: "stage_1",
            component: Stages_1,
        },
        {
            path: "stage_2",
            name: "stage_2",
            component: Stages_2,
            beforeEnter: redirectIfRefreshThePage
        },
        {
            path: "stage_3",
            name: "stage_3",
            component: Stages_3,
            beforeEnter: redirectIfRefreshThePage
        },
        {
            path: "stage_4",
            name: "stage_4",
            component: Stages_4,
            beforeEnter: redirectIfRefreshThePage
        },
        {
            path: "stage_5",
            name: "stage_5",
            component: Stages_5,
            beforeEnter: redirectIfRefreshThePage
        },
        {
            path: "stage_6",
            name: "stage_6",
            component: Stages_6,
            beforeEnter: redirectIfRefreshThePage
        },
        {
            path: "stage_7",
            name: "stage_7",
            component: Stages_7,
            beforeEnter: redirectIfRefreshThePage
        },
        {
            path: "stage_8",
            name: "stage_8",
            component: Stages_8,
            beforeEnter: redirectIfRefreshThePage
        },
    ],
};

function redirectIfRefreshThePage(to){
      if(to.name === "stage_1"){
        return true
      }else{
          if(store.state.stages.operation.start == false){
            // Redirect if you refresh the page
            return {name: "stage_1"}
          }else{
            return true
          }
      }
  }
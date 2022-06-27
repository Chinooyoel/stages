import Stages_1 from "../views/Stages_1.vue";
import Stages_2 from "../views/Stages_2.vue";
import Stages_3 from "../views/Stages_3.vue";
import Stages_4 from "../views/Stages_4.vue";

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
            beforeEnter: redirectIfRefreshThePage
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
    ],
};

function redirectIfRefreshThePage(to){
    return true
    //   if(to.name === "stage_1"){
    //     return true
    //   }else{
    //       if(store.state.stages.operation.start == false){
    //         // Redirect if you refresh the page
    //         return {name: "stage_1"}
    //       }else{
    //         return true
    //       }
    //   }
  }
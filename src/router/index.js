import { createRouter, createWebHashHistory } from "vue-router";
import stagesRouter from "@/modules/stages/router";

const routes = [
    {
        path: "/stages",
        ...stagesRouter,
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: { name: "stage_1" },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

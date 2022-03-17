// export const myAction = async (context) => {

// }

export const startTimer = ({ commit, state }, payload) => {
    commit("stopTimer");
    commit("restartTimerSeconds");
    const object = setInterval(() => {
        commit("incrementTimerSeconds");
        if (state.timer.seconds === state.timer.durationInSeconds) {
            commit("stopTimer");
            payload.callback();
        }
    }, 1000);
    const durationInSeconds = payload.durationInSeconds;
    commit("startTimer", { object, durationInSeconds });
};

export const stopTimer = ({ commit }) => {
    commit("stopTimer");
};

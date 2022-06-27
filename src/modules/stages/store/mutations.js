export const showIsLoading = (state) => {
    state.isLoading = true;
};

export const hideIsLoading = (state) => {
    state.isLoading = false;
};

export const startTimer = (state, payload) => {
    state.timer.object = payload.object;
    state.timer.durationInSeconds = payload.durationInSeconds;
};

export const stopTimer = (state) => {
    clearInterval(state.timer.object);
};

export const incrementTimerSeconds = (state) => {
    state.timer.seconds++;
};

export const restartTimerSeconds = (state) => {
    state.timer.seconds = 0;
};

export const incrementStage = (state) => {
    state.stage.current++;
};

export const decrementStage = (state) => {
    state.stage.current--;
};

export const setStage = (state, payload) => {
    state.stage.current = payload;
};

export const changeOperation= (state,payload) => {
    state.operation = {...state.operation, ...payload};
}
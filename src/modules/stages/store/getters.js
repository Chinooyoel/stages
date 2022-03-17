import { formatSecondsToMMSS } from "../helpers/timer";

// export const myGetters = (state) => {

// }

export const getFormattedTimer = (state) => {
    const timer = state.timer.durationInSeconds - state.timer.seconds;
    const formattedTimer = formatSecondsToMMSS(timer);

    return formattedTimer;
};

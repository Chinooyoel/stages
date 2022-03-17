export default () => ({
    client: null,
    number_guide: null,
    modal: {
        icon: null,
        title: null,
        message: null,
        number_error: null,
        color: null,
        show: false,
    },
    isLoading: false,
    timer: {
        object: null,
        seconds: 0,
        durationInSeconds: 150,
    },
    stage: {
        current: 1,
        total: 5,
        interruption: false,
    },
});

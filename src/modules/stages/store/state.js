export default () => ({
    operation: {
        start: false,
        guideNumber: null,
        clientName: null,
        clientCuit: null,
        ticketNumber: null,
        terminal: null,
        nodes: null,
        datetime: null,
        info: null
    },   
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

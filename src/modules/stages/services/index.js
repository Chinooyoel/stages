import axios from "axios"

export const checkHardwareStatus = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8000/client/checkHardwareStatus/"
        );
        return response
    } catch (error) {
        return error.response
    }
}


export const validateGuide = async (guideNumber) => {
    try {
        var formData = new FormData();
        formData.append("guide", guideNumber);
        const response = await axios.post(
            "http://localhost:8000/client/lakautValidateGuide/",
            formData
        );
        return response
    } catch (error) {
        return error.response
    }
}


export const confirmGuide = async (guideNumber, clientName, clientCuit, nodes) => {
    try {
        var formData = new FormData();
        formData.append("guide", guideNumber);
        formData.append("client", clientName);
        formData.append("cuit", clientCuit);
        formData.append("nodes", nodes);
        const response = await axios.post(
            "http://localhost:8000/client/lakautConfirmGuide/",
            formData
        );
        return response
    } catch (error) {
        return error.response
    }
}


export const printTicket = async (guideNumber, clientName, clientCuit, nodes, ticketNumber, terminal, info) => {
    try {
        var formData = new FormData();
        formData.append("guide", guideNumber);
        formData.append("client", clientName);
        formData.append("datetime", clientName);
        formData.append("cuit", clientCuit);
        formData.append("nodes", nodes);
        formData.append("ticket", ticketNumber);
        formData.append("terminal", terminal);
        formData.append("info", info);
        const response = await axios.post(
            "http://localhost:8000/client/print_ticket/",
            formData
        );
        return response
    } catch (error) {
        return error.response
    }
}
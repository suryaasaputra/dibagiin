import useSWR from 'swr'
import API_ENDPOINT from "../globals/api-endpoint";
import { fetchWrapper } from "../helpers/fetch-wrapper";


export const donationService = {
    createDonation,
    getAllDonation,
    getDonationDetail,
    editDonation,
    deleteDonation,
    requestDonation,
    getAllRequest,
    getRequestDetail,
    confirmRequest,
    rejectRequest,
    getAllSubmittedRequest,
    getHistory,
};

function createDonation(donationData) {
    const endpoint = `${API_ENDPOINT.donation}`
    return fetchWrapper.postFormData(endpoint, donationData).then((response) => {
        return response;
    });
}

function getAllDonation() {
    const endpoint = `${API_ENDPOINT.donation}`
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 2000 })
    return {
        listDonations: data,
        isLoading: !data,
        error: error
    }
    //     return fetchWrapper.get(endpoint).then((response) => {
    //         return response;
    //     });
}

function getDonationDetail(donationId) {
    const endpoint = `${API_ENDPOINT.donation}/${donationId}`
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 2000 })
    return {
        donationData: data,
        isLoading: !data,
        error: error
    }
    // return fetchWrapper.get(endpoint).then((response) => {
    //     return response;
    // });
}

function editDonation(donationId, data) {
    const endpoint = `${API_ENDPOINT.donation}/${donationId}`
    return fetchWrapper.put(endpoint, data).then((response) => {
        return response;
    });
}
function deleteDonation(donationId) {
    const endpoint = `${API_ENDPOINT.donation}/${donationId}`
    return fetchWrapper.delete(endpoint, data).then((response) => {
        return response;
    });
}

function requestDonation(donationId, data) {
    const endpoint = `${API_ENDPOINT.donation}/${donationId}/request`
    return fetchWrapper.post(endpoint, data).then((response) => {
        return response;
    });
}

function getAllRequest() {
    const endpoint = `${API_ENDPOINT.donation}/request`
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 3000 })
    return {
        listRequest: data,
        isLoading: !data,
        error: error
    }
    // return fetchWrapper.get(endpoint).then((response) => {
    //     return response;
    // });
}



function getRequestDetail(requestId) {
    const endpoint = `${API_ENDPOINT.donation}/request/${requestId}`
    return fetchWrapper.get(endpoint).then((response) => {
        return response;
    });
}

function confirmRequest(requestId) {
    const endpoint = `${API_ENDPOINT.donation}/request/${requestId}/confirm`
    return fetchWrapper.post(endpoint).then((response) => {
        return response;
    });
}

function rejectRequest(requestId) {
    const endpoint = `${API_ENDPOINT.donation}/request/${requestId}/reject`
    return fetchWrapper.post(endpoint).then((response) => {
        return response;
    });
}



function getAllSubmittedRequest() {
    const endpoint = `${API_ENDPOINT.request}`
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 60000 })
    return {
        listRequest: data,
        isLoading: !data,
        error: error
    }
}


function getHistory() {
    const endpoint = `${API_ENDPOINT.history}`
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 60000 })
    return {
        listHistory: data,
        isLoading: !data,
        error: error
    }
}



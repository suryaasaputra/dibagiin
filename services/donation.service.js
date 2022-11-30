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
    getAllSubmittedRequest,
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
    return fetchWrapper.get(endpoint).then((response) => {
        return response;
    });
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
    return fetchWrapper.get(endpoint).then((response) => {
        return response;
    });
}



function getRequestDetail(requestId) {
    const endpoint = `${API_ENDPOINT.donation}/request/${requestId}`
    return fetchWrapper.get(endpoint).then((response) => {
        return response;
    });
}

function confirmRequest(requestId) {
    const endpoint = `${API_ENDPOINT.donation}/request/${requestId}`
    return fetchWrapper.put(endpoint).then((response) => {
        return response;
    });
}



function getAllSubmittedRequest(userId) {
    const endpoint = `${API_ENDPOINT.request}/${userId}`
    return fetchWrapper.get(endpoint).then((response) => {
        return response;
    });
}



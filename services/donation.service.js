import useSWR, { useSWRConfig } from 'swr'
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
    cancelRequest,
    getAllSubmittedRequest,
    getNotification,
    searchByLocation,
    searchByKeyword
};

function createDonation(donationData) {
    const endpoint = `${API_ENDPOINT.donation}`
    return fetchWrapper.postFormData(endpoint, donationData).then((response) => {
        return response;
    });
}

function getAllDonation() {
    const endpoint = `${API_ENDPOINT.donation}`
    const { mutate } = useSWRConfig()
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 15000 })
    return {
        mutate: mutate,
        listDonations: data,
        isLoading: !data,
        error: error
    }
    //     return fetchWrapper.get(endpoint).then((response) => {
    //         return response;
    //     });
}
function searchByKeyword(keyword) {
    const endpoint = `${API_ENDPOINT.donation}?title=${keyword}`;
    const { mutate } = useSWRConfig()
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 600000 })
    return {
        mutate: mutate,
        listDonations: data,
        isLoading: !data,
        error: error
    }
}
function searchByLocation(location) {
    const endpoint = `${API_ENDPOINT.donation}?location=${location}`;
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 600000 })
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
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 60000 })
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
    return fetchWrapper.delete(endpoint).then((response) => {
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
    const endpoint = `${API_ENDPOINT.request}`
    const { mutate } = useSWRConfig()
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 60000 })
    return {
        listRequest: data,
        mutate: mutate,
        isLoading: !data,
        error: error
    }
    // return fetchWrapper.get(endpoint).then((response) => {
    //     return response;
    // });
}



function getRequestDetail(requestId) {
    const endpoint = `${API_ENDPOINT.request}/${requestId}`
    return fetchWrapper.get(endpoint).then((response) => {
        return response;
    });
}

function confirmRequest(requestId) {
    const endpoint = `${API_ENDPOINT.request}/${requestId}`
    return fetchWrapper.post(endpoint).then((response) => {
        return response;
    });
}

function rejectRequest(requestId) {
    const endpoint = `${API_ENDPOINT.request}/${requestId}`
    return fetchWrapper.delete(endpoint).then((response) => {
        return response;
    });
}



function getAllSubmittedRequest() {
    const endpoint = `${API_ENDPOINT.donation}/request`
    const { mutate } = useSWRConfig()
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 60000 })
    return {
        mutate: mutate,
        listRequest: data,
        isLoading: !data,
        error: error
    }
}

function cancelRequest(requestId) {
    const endpoint = `${API_ENDPOINT.donation}/request/${requestId}`
    return fetchWrapper.delete(endpoint).then((response) => {
        return response;
    });
}


function getNotification() {
    const endpoint = `${API_ENDPOINT.notification}`
    const { data, error } = useSWR(endpoint, fetchWrapper.fetcher, { refreshInterval: 60000 })
    return {
        listHistory: data,
        isLoading: !data,
        error: error
    }
}



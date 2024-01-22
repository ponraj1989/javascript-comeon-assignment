import axios from "axios";

const apiURL = 'http://localhost:3001';

export const userAccess = async (userData, authType) => {
    try {
        const userStatus = await axios.post(`${apiURL}/${authType}`, userData);
        return userStatus.data;
    }
    catch (error) {
        console.log(`Error in ${authType}`, error) 
    }
}

export const getGameDetails = async (type) => {
    return await axios.get(`${apiURL}/${type}`, type).then((response) => {
        return response;
    }).catch((error) => {
        console.log(`Error in ${type}`, error)
    })
}
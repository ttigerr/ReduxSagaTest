export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

// This component is the redux action
// this action will trigger by middleware
export const getUsersFetch = () => ({
    type: GET_USERS_FETCH
})
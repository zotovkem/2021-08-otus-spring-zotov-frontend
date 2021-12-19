import {fetchUtils} from 'react-admin';

const apiUrl = 'http://localhost:9000/api/auth';
const httpClient = fetchUtils.fetchJson;
export const authProvider = {
    login: ({username, password}) => {
        const url = `${apiUrl}/login`

        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify({username, password}),
        })
            .then(({status, json, statusText}) => {
                if (status < 200 || status >= 300) {
                    throw new Error(statusText);
                }
               localStorage.setItem('auth',json.token);
               localStorage.setItem('username',username);
            })
            .catch((error) => {
                throw new Error(error.message)
            });
    },

    checkError: ({status}) => {
        return status === 401
            ? Promise.reject()
            : Promise.resolve();
    },
    checkAuth: () => {
        return !!localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        return Promise.resolve().then(()=>localStorage.removeItem('auth'));
    },
    getIdentity: () => {
        return {
            id: 1,
            fullName: localStorage.getItem('username'),
        };
    },
    getPermissions: () => Promise.resolve(),
};

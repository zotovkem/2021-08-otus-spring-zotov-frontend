import {fetchUtils} from 'react-admin';

const apiUrl = 'http://localhost:9000/api';
const httpClient = fetchUtils.fetchJson;

export const dataProvider = {
    getList: (resource) => {
        const url = `${apiUrl}/${resource}`

        return httpClient(url, getOptions()).then(({json}) => ({
            data: json,
            total: json.length,
        }));
    },

    getMany: (resource) => {
        const url = `${apiUrl}/${resource}`

        return httpClient(url, getOptions()).then(({json}) => ({
            data: json,
            total: json.length,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, getOptions()).then(({json}) => ({
            data: json,
        })),

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            headers: getHeaders(),
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json})),

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({
            data: {json, id: json.id},
        })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            headers: getHeaders(),
            method: 'DELETE',
            body: JSON.stringify([params.id]),
        }).then(() => ({data: []})),

    deleteMany: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            headers: getHeaders(),
            method: 'DELETE',
            body: JSON.stringify(params.ids)
        }).then(() => ({data: []}))
};

/**
 * Обернуть заголовок в объект опций
 * @returns {{headers: Headers}} объект опций
 */
function getOptions() {
    return {headers: getHeaders()};
}

/**
 * Получить заголовок с токеном
 * @returns {Headers} заголовки
 */
function getHeaders() {
    const token = localStorage.getItem('auth');
    const headers = new Headers({Accept: 'application/json'})
    headers.set('Authorization', `Bearer ${token}`);
    return headers;
}

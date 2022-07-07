const baseURL = 'http://localhost:8080';

export const Service =  {
    getStuff() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};
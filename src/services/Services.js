const baseURL = 'http://localhost:8080';

export const PlayerService =  {
    getPlayers() {
        return fetch(`${baseURL}/players`)
        .then(res => res.json());
    }
};
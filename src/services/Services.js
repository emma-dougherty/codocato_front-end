const baseURL = 'http://localhost:8080';

export const PlayerService =  {
    getPlayers() {
        return fetch(`${baseURL}/players`)
        .then(res => res.json());
    }
};

export const postPlayer = (payload) => {
    const url = `${baseURL}/players`
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const LessonService =  {
    getLessons() {
        return fetch(`${baseURL}/lessons`)
        .then(res => res.json());
    }
};

export const EnrollmentService =  {
    getEnrollments() {
        return fetch(`${baseURL}/enrollments`)
        .then(res => res.json());
    }
};



// General api to access data

export default function api(path, params, method, token) {
    let options;
    options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // ...(token && { token: token })
        },
        method: method,
        // ...(params && { body: JSON.stringify(params) })
    };

    if (params) {
        options.body = JSON.stringify(params);
    }

    if (token) {
        options.headers.Authorization = token;
    }

    console.log(options)

    return fetch(path, options)
        .then(resp => resp.json())
        .then(json => json)
        .catch(error => error);
}

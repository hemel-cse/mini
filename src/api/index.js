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


// function fetchMetaData() {
//     let pagesRequired = 0;

//     fetch('apiUrlToGetPageNumber')
//     .then(resp = > {
//         const apiPromises = [],
//         pagesRequired = resp.data.pagesRequired,

//         for (let i=pagesRequired; i>0; i--) {
//             apiPromises.push(fetch('apiUrlToSpecificPage?page = ' + i));
//         }

//         Promise.all(apiPromises)
//         .then(responses => {
//             const processedResponses = [];
//             responses.map(response => {
//                 processedResponses.push(response);
//             }

//         });
//     }
// }
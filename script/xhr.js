console.clear();

// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()


const makeRequest = (method, url, data) => {
    return new Promise(()=> {
        const xhr = new XMLHttpRequest;
        xhr.open(method, url);

        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.onload = () => {
            const data = xhr.response;
            console.log(JSON.parse(data));
        }
        xhr.onerror = () => {
            console.log("error is happend")
        }

        xhr.send(JSON.stringify(data));
    });
    
}

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res));
}
getData();

// const postData = () => {
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'palestene',
//         body: 'body is no more',
//         userId: 1,
//       });
// }

// const updateData = () => {
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         id: 1,
//         title: 'palestene cut israil',
//         body: 'body is no more',
//         userId: 1,
//       });
// }

// const deleteData = () => {
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
// }

// deleteData();
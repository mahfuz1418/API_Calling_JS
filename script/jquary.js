// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// add jquery libraray cdn
// ajax - asynchronous javascript and xml

console.clear();

const makeRequest = async(url, method, data) => {
    try {
        const result = await $.ajax({
            url: url,
            method: method,
            data: data,
        });
        return result;
    } catch (error) {
        console.log(error);
    }
    
}

// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', 'GET')
//         .then((result) => {
//             console.log(result);
//         })
// }
// getData();

// const postData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }).then((result) => {
//             console.log(result);
//         });
// }
// postData();

// const updateData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {
//         id: 1,
//         title: 'fadsfoo',
//         body: 'asdbar',
//         userId: 1,
//     }).then((result) => {
//             console.log(result);
//         });
// }
// updateData();

// const updateSingleData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PATCH', {
//         title: 'fadsfoo',
//     }).then((result) => {
//             console.log(result);
//         });
// }
// updateSingleData();

const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
    .then((result) => {
            console.log(result);
    });
}
deleteData();
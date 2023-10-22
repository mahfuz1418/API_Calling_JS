// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser


    //////////////// CALLING API WITH THEN METHOD //////////////////////

// fetch('https://jsonplaceholder.typicode.com/posts/10')
//     .then((res) => {
//         if (!res.ok) {
//             const msg = `Error: ${res.status}`;
//             throw new Error(msg);
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({
//         title: 'bainxud',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((res) => {
//         if (!res.ok) {
//             const msg = `Error: ${res.status}`;
//             throw new Error(msg);
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: "PUT",
//     body: JSON.stringify({
//         title: 'bainxud',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((res) => {
//         if (!res.ok) {
//             const msg = `Error: ${res.status}`;
//             throw new Error(msg);
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: "PATCH",
//     body: JSON.stringify({
//         title: 'wadud shala',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((res) => {
//         if (!res.ok) {
//             const msg = `Error: ${res.status}`;
//             throw new Error(msg);
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// })
// .then((res) => {
//     if (!res.ok) {
//         const msg = `Error: ${res.status}`;
//         throw new Error(msg);
//     }
//     return res.json();
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

    //////////////// END CALLING API WITH THEN METHOD //////////////////////

    //////////////// START CALLING API WITH ASYNC AWAIT //////////////////////

const makeRequest = async(url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        const msg = `Error: ${res.status}`;
        throw new Error(msg);
    }
    const data = await res.json();
    return data
}

// const getData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }

// getData();

// const postData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'fdfgsdfoo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// postData();

// const updateData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//           title: 'asdfwe',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// updateData();

// const updateSingleData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PATCH',
//         body: JSON.stringify({
//           title: 'asdfwe',
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// updateSingleData();

const deleteData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
deleteData();

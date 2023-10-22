// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config




// axios
//     .get("https://jsonplaceholder.typicode.com/posts/1001")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))

// axios
//     .post("https://jsonplaceholder.typicode.com/posts", {
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//       })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))

// axios
//     .put("https://jsonplaceholder.typicode.com/posts/2", {
//         body: JSON.stringify({
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//       })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))

// axios
//     .patch("https://jsonplaceholder.typicode.com/posts/2", {
//         body: JSON.stringify({
//             title: 'dfgadsgf',
//         }),
//       })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))

// axios
//     .delete("https://jsonplaceholder.typicode.com/posts/2")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))


const makeRequest = async(config) => {
    return await axios(config);
};

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}
getData();

// const sendData = () => {
//     makeRequest({
//             url: 'https://jsonplaceholder.typicode.com/posts',
//             method: 'post',
//             data: JSON.stringify({
//               title: 'foo',
//               body: 'bar',
//               userId: 1,
//             }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))
// }
// sendData();

// const updateData = () => {
//     makeRequest({
//             url: 'https://jsonplaceholder.typicode.com/posts/1',
//             method: 'put',
//             data: JSON.stringify({
//               id: 1,
//               title: 'foo',
//               body: 'bar',
//               userId: 1,
//             }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))
// }
// updateData();

// const updateSingleData = () => {
//     makeRequest({
//             url: 'https://jsonplaceholder.typicode.com/posts/1',
//             method: 'patch',
//             data: JSON.stringify({
//               title: 'adgfsdfdas adfa',
//             }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))
// }
// updateSingleData();

// const deleteData = () => {
//     makeRequest({
//             url: 'https://jsonplaceholder.typicode.com/posts/1',
//             method: 'delete',
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))
// }
// deleteData();
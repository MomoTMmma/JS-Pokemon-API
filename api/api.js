// fetch('URL')
const res = fetch('https://catfact.ninja/fact')
.then((res) => {return res.json()})
.then((data) => {console.log('Simple fetch - ', data)})

// let's look at async/await
// the same thing! but this is the more modern syntax

const getCatFactFetch = async () => {
    const resp = await fetch('https://catfact.ninja/fact');
    const dat = await resp.json();
    console.log('Async/await/fetch ', dat)
}
getCatFactFetch()

// EXAMPLE for post/put/delete route:

// const getCatFactFetch = async () => {
//     const resp = await fetch('https://catfact.ninja/fact', {
//         method: 'POST',
//         body : {},
//         headers : {}
//     });
//     const dat = await resp.json();
//     console.log('Async/await/fetch ', dat)
// }

const getData = async () => {
    let response = await axios.get('https://catfact.ninja/fact');
    if (response.status == 200){
        console.log('Async/await/axios example- ', response.data)
        return response.data
    }
    return 'API call broken'
}
// getData()

/*
getData()
loadData()
*/
let loadData = async () => {
    // calls our api call function
    let data = await getData();
    console.log(data);

    let new_row = `<tr><td scope='row'>${data.fact}</td></tr>`;
    // adds new html to our page!
    document.getElementById('catFactBody').insertAdjacentHTML('afterbegin', new_row)
}

let clearData = () => {
    document.getElementById('catFactBody').innerHTML=''
}

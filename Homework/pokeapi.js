const res = fetch ('https://pokeapi.co/api/v2/')
.then((res) => {return res.json()})
.then((data) => {console.log('Simple fetch - ', data)})

const getPokemonFetch = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/');
    const dat = await resp.json();
    console.log('Async/await.fetch ', dat)
}
getPokemonFetch()


const getData = async () => {
    let response = await axios.get('https://pokeapi.co/api/v2/');
    if (response.status == 200){
        console.log('Async/await/axios example- ', response.data)
        return response.data
    }
    return 'API call broken'
}
// getData()

// let formSubmit = (event) => {
//     // a page refresh is NOT what we want here so. . . 
//     event.preventDefault();
//     console.log(event);
//     let fname = event.target[0].value;
//     console.log('form data:', fname)

//     form.reset();
//     let new_html = document.createElement('h3');
//     new_html.innerHTML = fname + " " ;
//     new_html.pokeName = 'color-change1';
//     form.after(new_html);
// }

// let form = document.getElementById('nameForm');
// console.log(form);
// form.addEventListener('submit', formSubmit)


let loadData = async () => {
    let data = await getPokemonData();
    console.log(data);

    let new_row = `<tr><td scope= 'row'>${data.fact}</td></tr>`;
    document.getElementById('pokeBody').insertAdjacentHTML('afterbegin', new_row);
}

let clearData = () => {
    document.getElementById('pokeBody').innerHTML=''
}



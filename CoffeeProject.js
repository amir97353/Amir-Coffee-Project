"use strict"




// {id: 4, name: 'City', roast: 'medium'},
// function renderCoffee({id: 4, name: 'City', roast: 'medium'}) {
function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}



function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
        console.log(`The value of ${i}`)
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// coffees.forEach(coffee => {
//     alert(coffee.name)
// })

// french is a dark coffee

// for(let i =0;i < coffees.length;i++){
//     // alert(`${coffees[i].name} is a ${coffees[i].roast} coffee` )
// }
let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

// var roastSelection = document.querySelector('#roast-selection');
let coffee_search = document.querySelector('#search_coffee');

coffee_search.addEventListener("input",filterCoffees)

function filterCoffees(){
    let filteredCoffees = coffees.filter(coffee =>{
        return coffee.name.includes(coffee_search.value)
    })
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener("change", updateCoffees)

let div_extra = document.querySelector("#div_extra")
let status = document.querySelector("#status")

let button = document.querySelector("#button")

function print_name (){
    for(let i=0; i<coffees.length; i++){
        div_extra.innerHTML += `<h1> ${coffees[i].name}</h1> <p>${coffees[i].roast}</p>`
    }

}


let show = document.querySelector(".show")
button.addEventListener("click" , () => {
    print_name()
    show.classList.toggle("show")
})



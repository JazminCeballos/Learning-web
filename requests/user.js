let people = document.getElementById('people')


async function getPeople() {
    await fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => showPeople(data.results[0]));  
}

function showPeople(person){
    people.innerHTML += '<h3>'+person.name.first+'</h3>';
}
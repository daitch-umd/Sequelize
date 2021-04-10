async function populateRestaurant() {
    const diningRequest = await fetch('/api/dining');
    const diningData = await diningRequest.json();

    targetBox = document.getElementById('table');

    diningData.data.forEach((restaurant) => {
        const appendItem = document.createElement('tr');
        appendItem.innerHTML = `
            <td>${restaurant.hall_name}</td>
            <td>${restaurant.hall_address.split(',')[0]}</td>
            <td>${restaurant.hall_address.split(',')[1]}</td>`;
            targetBox.append(appendItem);
    });
}

async function getMeals() {
    console.log('data request');
    const diningRequest = await fetch('/api/wholeMeals');
    const diningData = await diningRequest.json();
    return diningData;
}

async function setBasicData() {
    localStorage.setItem('myCat', 'Tom');
}

async function getBasicData() {
    const cat = localStorage.getItem('myCat');
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function windowActions() {
    console.log('loaded window');
    populateRestaurant();
}

//window.onload = windowActions;
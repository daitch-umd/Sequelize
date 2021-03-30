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
    const diningRequest = await fetch('/api/meals');
    const diningData = await diningRequest.json();
    return diningData;
}

async function setBasicData() {
    localStorage.setItem('myCat', 'Tom');
}

async function getBasicData() {
    const cat = localStorage.getItem('myCat');
}

async function windowActions() {
    console.log('loaded window');
    const meals = await getMeals();
    console.table(meals);
    populateRestaurant();
    
}

window.onload = windowActions;
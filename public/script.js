async function populateRestaurant() {
    const diningRequest = await fetch('/api/meals');
    const diningData = await diningRequest.json();

    diningData.data.forEach((restaurant) => {
        const appendItem = document.createElement('div');
        appendItem.classList.add('tile', 'has-text-centered', 'is-parent', 'is-');
        appendItem.innerHTML = `
            <article class="tile is-child box has-background-link-dark ">
            <span class="subtitle has-text-light has-text-weight-bold">${restaurant.hall_name}</span>
            <br /> 
            <span class="has-text-light">${restaurant.hall_address.split(',')[0]}</span>
            <br/>
            <span class="has-text-light">${restaurant.hall_address.split(',')[1]}</span>
            </article>`;
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

    
}

window.onload = windowActions;
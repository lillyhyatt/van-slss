const messageNode = document.getElementById('message');

const render = (cars = [], DOMnode = messageNode) => {
    const frag = document.createDocumentFragment();
    for (const car of cars) {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${car.avatar_url}"> <span> ${car.name} (${car.bhp}</span>`
        frag.append(li)
    }
    DOMnode.append(frag);
}

const getData = async () => {
    try {
        const response = await fetch('/.netlify/functions/read-all-cars')
        if (!response.ok) throw response;
        const cars = await response.json();
        console.log(cars);
        render(cars);
    } catch (err) {
        altert('Error fetching check onsole')
        console.log(err);
    }
}

getData();
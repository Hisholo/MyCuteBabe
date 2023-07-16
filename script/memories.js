const getPreciousPics = async() => {
    const domain = 'https://babefastapi-1-g2550338.deta.app';
    await fetch(`${domain}/babe/precious`)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++)
            displayPreciousPic(data[i]);
    })
    .catch(error => alert(error))
}

const preciousContainer = document.querySelector('.preciousContainer');
const displayPreciousPic = function(pic) {
    const html = `
    <div class="precious">
        <img class="pic" src="${pic}"/>
    </div>
    `;
    preciousContainer.insertAdjacentHTML('beforeend',html);
}

getPreciousPics();




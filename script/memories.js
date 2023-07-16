let precious;
const getPreciousPics = function() {
    const domain = 'https://babefastapi-1-g2550338.deta.app';
    fetch(`${domain}/babe/precious`)
    .then(response => response.json())
    .then(data => precious = data)
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
for(let i = 0; i < precious.length(); i++)
    displayPreciousPic(precious[i]);



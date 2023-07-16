const getPreciousPics = async function() {
    const domain = 'https://babefastapi-1-g2550338.deta.app';
    await fetch(`${domain}/babe/precious`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(let i = 0; i < data.Urls.length; i++)
            displayPreciousPic(data.Urls[i]);
    })
    .catch(error => alert(error))
}

getPreciousPics();

const preciousContainer = document.querySelector('.preciousContainer');
const displayPreciousPic = function(pic) {
    const html = `
    <div class="precious">
        <img class="pic" src="${pic}"/>
    </div>
    `;
    preciousContainer.insertAdjacentHTML('beforeend',html);
}




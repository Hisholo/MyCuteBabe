const loader = document.getElementById('loader');
function stopLoader()
{
  loader.style.display = 'none';
}

const getPreciousPics = async function() {
    const domain = 'https://babefastapi-1-g2550338.deta.app';
    await fetch(`${domain}/babe/precious`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(let i = 0; i < data.Urls.length; i = i + 2)
            displayPreciousPic(data.Urls[i],data.Urls[i+1]);
        if (data.Urls.length % 2 === 1)
        {
            document.querySelector('.preciousContainer').insertAdjacentHTML('beforeend',`
            <div class="precious" data-aos="fade-right">
                <img class="pic" src="${data.Urls.length-1}"/>
            </div>
            `)
        }
        setTimeout(() => stopLoader(),1000);
    })
    .catch(error => alert(error))
}

getPreciousPics();

const preciousContainer = document.querySelector('.preciousContainer');
const displayPreciousPic = function(pic1,pic2) {
    const html = `
    <div class="precious" data-aos="fade-up-left">
        <img class="pic" src="${pic1}"/>
    </div>

    <div class="precious" data-aos="fade-up-right">
        <img class="pic" src="${pic2}"/>
    </div>
    `;
    preciousContainer.insertAdjacentHTML('beforeend',html);
}




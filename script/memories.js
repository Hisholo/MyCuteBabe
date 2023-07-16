const getPreciousPics = function() {
    const domain = 'https://babefastapi-1-g2550338.deta.app';
    fetch(`${domain}/babe/precious`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => alert(error))
} 

getPreciousPics();
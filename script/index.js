'use strict';

const modal = document.querySelectorAll(".modal");
document.querySelector('.clickMe').addEventListener(
    'click', function () {
        modal[0].style.display = "block";
    }
)

document.querySelector('.yes').addEventListener(
  'click', function () {
      modal[1].style.display = "block";
      sendData("Yes");
  }
)

document.querySelector('.no').addEventListener(
  'click', function () {
      modal[2].style.display = "block";
      sendData("No");
  }
)


const close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i++)
{
  close[i].onclick  = function() {
    modal[i].style.display = "none";
  }
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for(let i = 0; i < close.length; i++)
    if (event.target == modal[i])
      modal[i].style.display = "none";
}

let backgroundHeight = getComputedStyle(document.querySelector(".background")).height;
const header = document.querySelector('header');
const links = document.querySelectorAll('.links');
const bar = document.querySelector('.fa-bars');
const times = document.querySelector('.fa-times');

window.addEventListener('scroll', () => {
  if (window.scrollY  > Number.parseFloat(backgroundHeight))
  {
    header.style.position = 'fixed';
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    links.forEach(link => link.style.color = 'white');
    bar.style.color = 'pink';
    times.style.color = 'white';
  }
  else
  {
    header.style.position = 'absolute';
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    links.forEach(link => link.style.color = 'black');
    bar.style.color = 'black';
    times.style.color = 'black'
  }
})

const sendData = async(result) => {
  const domain = 'https://babefastapi-1-g2550338.deta.app';
  const data = {"Answer" : result};
  const details = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }        
  }
  console.log(data);
  await fetch(`${domain}/babe/response`, details)
    .then(response => response.json())
    .then((responseJson) => console.log(responseJson))
    .catch((error) => {
        alert(error);
    });
}
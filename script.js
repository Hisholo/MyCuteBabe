const modal = document.getElementById("myModal");

document.querySelector('.clickMe').addEventListener(
    'click', function () {
        modal.style.display = "block";
    }
)

const modal1 = document.getElementById("Modal1");
document.querySelector('.no').addEventListener(
  'click', function () {
      modal1.style.display = "block";
      sendData("No");
  }
)

const modal2 = document.getElementById("Modal2");
document.querySelector('.yes').addEventListener(
  'click', function () {
      modal2.style.display = "block";
      sendData("Yes");
  }
)


const span = document.getElementsByClassName("close");
console.log(span)
// When the user clicks on <span> (x), close the modal
span[0].onclick = span[1].onclick = span[2].onclick = function() {
  modal.style.display = "none";
  modal1.style.display = "none";
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
//https://deta.space/discovery/r/cdm6dm9baaugwvsn
const sendData = async(result) => {
  data = {"Answer" : result};
  console.log(data);
  await fetch(`https://couplefastapi-1-f8802461.deta.app/babe/response`, 
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
        
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson); 
    })
    .catch((error) => {
        
    });
}
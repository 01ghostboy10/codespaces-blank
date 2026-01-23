//popup code + password
const password = ""

const popup = document.querySelector('.full-screen');
console.log(popup);

function togglePopup() {
    popup.classList.toggle('hidden');
}


//return the name!
let input = localStorage.getItem('input');

function returnText() {
  input = document.getElementById("userInput").value.toUpperCase();
  localStorage.setItem('input', input);
  document.getElementById("dialogueBox").textContent = "Welcome, " + input;
}

// print ti
if (input !== null) {
  document.getElementById("dialogueBox").textContent = input;
}


window.onload = function () {
    function togglePopup() {
        popup.classList.false('hidden');
    }
};

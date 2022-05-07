const inputEl = document.querySelector("#name-input");
const spantEl = document.querySelector("#name-output");
inputEl.addEventListener('input', onInput);
function onInput(event) {
 return event.currentTarget.value === ""?
    spantEl.textContent = "Anonymous":
    spantEl.textContent = event.currentTarget.value;
    
} 
let counterValue = 0;
const value = document.querySelector("#value");
console.log(counterValue);
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
   return(value.textContent = counterValue);
})
incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    return (value.textContent = counterValue);
} )
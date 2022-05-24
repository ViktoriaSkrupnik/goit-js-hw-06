  const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onBorderColor)
function onBorderColor(event) {
    const inputData = String(event.currentTarget.dataset.length);
    const inputLength =String(event.currentTarget.value.length);
    function updateClass(addCla, remCla) {
        inputEl.classList.add(addCla);
        inputEl.classList.remove(remCla);
    }
        if (inputData === inputLength) {
            updateClass("valid","invalid");
       
        } else {
        
             updateClass("invalid","valid");
        }
    }
    

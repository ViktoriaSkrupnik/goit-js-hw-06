  const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onBorderColor)
function onBorderColor(event) {
    const inputData = String(event.currentTarget.dataset.length);
    const inputLength =String(event.currentTarget.value.length);
    
    if (inputData === inputLength) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
    }

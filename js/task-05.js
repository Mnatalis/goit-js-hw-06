const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-input')
textInput.addEventListener('input', (event) => {
    output.textContent = event.target.value
    if (event.target.value === "") {
        output.textContent='Anonymous'
    }
})
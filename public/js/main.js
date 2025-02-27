document.addEventListener("DOMContentLoaded", function() {
    fetch('/readFiles').then(response => response.json()).then(files => {
        const choice = document.getElementById('chooseFile')
        files.forEach(file => {
            const option = document.createElement('option')
            option.value = file
            option.textContent = file
            choice.appendChild(option)
        });
    })
})
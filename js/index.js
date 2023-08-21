function getArrayList() {
    const arrStr = localStorage.getItem('dataSave');
    
    if (arrStr === null) {
        return []
    } else {
        return arrStr;
    }
}


function saveData(inp) {
    const arr = getArrayList();
    arr.push(inp)
    localStorage.setItem('dataSave', arr);
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttonText').addEventListener('click', () => {
        const input = document.getElementById('inputText')
        saveData(input.value);
        input.value = ''
        alert('Guardado!');
    });
});
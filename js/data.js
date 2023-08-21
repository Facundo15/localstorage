function getArrayList() {
    const arrStr = localStorage.getItem('dataSave');
    
    if (arrStr === null) {
        return []
    } else {
        return JSON.parse(arrStr);
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const arr = getArrayList();
    console.log(arr)
    const container = document.getElementById('data');
    container.innerHTML = '<br>';

    for (const i of arr) {
        container.innerHTML += `${i}<br>`;
    }
});
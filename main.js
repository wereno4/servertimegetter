"use strict";

let timer; 
async function serverTime(url) {
result = await fetch('http://127.0.0.1:8000/?url=http://'+url)
    .then(response => response.json());
if (result.error) {
    document.getElementById('result').innerText = result.error;
    clearInterval(timer);
} else {
    document.getElementById('result').innerText = new Date(result.time);
    }
}
function buttonClick() { 
    let url = document.getElementById('url').value;
    clearInterval(timer);
    timer = setInterval(serverTime, 100, url);
}
            
        
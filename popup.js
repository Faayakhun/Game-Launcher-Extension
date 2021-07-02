let genshin = document.getElementById("genshin")
let honkai = document.getElementById("honkai")
let persona = document.getElementById("persona")
let hades = document.getElementById("hades")

var port =  null


genshin.addEventListener('click', () => {
    port = chrome.runtime.connectNative('com.gamelauncher.gi');
})

honkai.addEventListener('click', () => {
    port = chrome.runtime.connectNative('com.gamelauncher.hi');
})

persona.addEventListener('click', () => {
    port = chrome.runtime.connectNative('com.gamelauncher.p4');  
})

hades.addEventListener('click', () => {
    port = chrome.runtime.connectNative('com.gamelauncher.ha');
    
})


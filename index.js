let popupElement = document.getElementById("popup")

function login(){
    popupElement.classList.remove("display_popup")
}
function close_login(){
    popupElement.classList.add("display_popup")
}

setTimeout(()=>{
    popupElement.classList.remove("display_popup")
}, 5000)


const boton = document.getElementById('obtenermail')


async function obtenerMail (){
    const res = fetch('http://localhost:4000/obtenermail')
    console.log(res)
    console.log("Mail enviado")
}

boton.addEventListener('click', obtenerMail);


const inputNombre2=document.querySelector("#inputEmail3")
const inputConst= document.querySelector("#inputPassword3")
const inputConfirmarContrasenia= document.querySelector("#inputPassword4")
const divLista=document.querySelector("#ingresar-lista")

function verifica(){
        localStorage.setItem(inputNombre2.value, JSON.stringify(inputConst.value));
        divLista.innerHTML+= `<li>Usuaio=${inputNombre2.value} Contraseña=${inputConst.value}</li>`      
}
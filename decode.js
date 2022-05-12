function encriptar(){
    var palabra = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var palabra_codificada = btoa(palabra);
    console.log(palabra_codificada)
}

encriptar()

function desencriptar(){
    var key = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var api_key = atob(key);
    console.log(api_key)
}

desencriptar()

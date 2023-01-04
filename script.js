/* Programa desarrollado por Lorenzo Chavez  */
/* Oracle ONE - Next Education & Alura LATAM */
/* Challenge 1: Encriptador de Texto         */



//Mensaje encriptado que se recibe de HTML
var mensaje;
//Array que debe almacenar cada letra del mensaje
lista_encriptacion = [];
//Variable que almacenara el mensaje encriptado a mostrar en HTML
var mensaje_Encriptado;
//Codigo encriptado que se recibe de HTML
var codigo;
//Array donde se guardara el mensaje encriptado
lista_desencriptacion = [];
//Variable donde se almacenara el mensaje desencriptado a mostrar
var mensaje_Desencriptado;

/******************************Encriptacion**********************************************/

//Crea un array con todas los caracteres del mensaje
function crearArray(){
    for(i = 0; i < mensaje.length; i++){
        lista_encriptacion.push(mensaje[i]);    
    }
}


//Revisa el array y encripta
function encriptar(){
        for(i=0;i < mensaje.length;i++){
            if (lista_encriptacion[i] == "a"){
                lista_encriptacion[i] = "ai";
            }
            if (lista_encriptacion[i] == "e"){
                lista_encriptacion[i] = "enter";
            }
            if (lista_encriptacion[i] == "i"){
                lista_encriptacion[i] = "imes";
            }
            if (lista_encriptacion[i] == "o"){
                lista_encriptacion[i] = "ober";
            }
            if (lista_encriptacion[i] == "u"){
                lista_encriptacion[i] = "ufat";
            }
        } 
}
//Une los elementos del array y almacena en la variable para mostrar Mensaje Encriptado 
function mostrartextoEncriptado(){
    mensaje_Encriptado = lista_encriptacion.join("");

}
//Proceso de encriptacion
function boton_Encriptar(){
    crearArray();
    encriptar();
    mostrartextoEncriptado();
}


/******************************Desencriptacion*******************************************/



//Crear segundo array donde almacene el codigo encriptado
function crearArray2(){
    for(i = 0; i < codigo.length; i++){
        lista_desencriptacion.push(codigo[i]);    
    }

}

//Revisa el array2 y desencripta
function desencriptar(){
    var encontrado = true;
    while(encontrado == true){
        var codigo = lista_desencriptacion.join("");
        
        if(codigo.includes("ai") == true){
            let valor = codigo.indexOf("ai");
            lista_desencriptacion.splice(valor + 1, 1);
            codigo = lista_desencriptacion.join("");
        }
        
        if(codigo.includes("enter") == true){
            let valor = codigo.indexOf("enter");
            lista_desencriptacion.splice(valor + 1, 4);
            codigo = lista_desencriptacion.join("");
        }
        if(codigo.includes("imes") == true){
            let valor = codigo.indexOf("imes");
            lista_desencriptacion.splice(valor + 1, 3);
            codigo = lista_desencriptacion.join("");
        }
        if(codigo.includes("ober") == true){
            let valor = codigo.indexOf("ober");
            lista_desencriptacion.splice(valor + 1, 3);
            codigo = lista_desencriptacion.join("");
        }
        if(codigo.includes("ufat") == true){
            let valor = codigo.indexOf("ufat");
            lista_desencriptacion.splice(valor + 1, 3);
            codigo = lista_desencriptacion.join("");
        }
        if(codigo.includes("ai") == false && codigo.includes("enter") == false && codigo.includes("imes") == false && codigo.includes("ober") == false && codigo.includes("ufat") == false){
            encontrado = false;
            break;
        }
    }
}
//Almacena el array en una variable y lo muestra
function mostrartextoDesencriptado(){
    mensaje_Desencriptado = lista_desencriptacion.join("");
}
//Proceso de desencriptacion
function boton_Desencriptar(){
    crearArray2();
    desencriptar();
    mostrartextoDesencriptado();
}


/******************************Funcionalidad*HTML****************************************/
//Oculta elementos de HTML "IMAGEN y CUADRO DE TEXTO"
function reacomodoelementos(){
    document.getElementById("munieco").style.display = "none";
    document.getElementById("cuadro_1").style.display = "none";
    document.getElementById("cuadro_2").style="position: relative; width: 80%; height: 70%; left: 10%; font-size: 24px;";
    document.getElementById("botoncopiar").style.display = "initial";
}
//Enfoca al input despues de presionar algun boton
function enfocarinput(){
    document.getElementById("input").focus();
}
function revisarMensaje(letra){
    for(i=0;i < mensaje.length;i++){
        confirmacion = false;
        if (lista_encriptacion[i] == letra){
            confirmacion = true;
            if(confirmacion == true){
                mensaje_Encriptado = "ERROR";
            }
        }
    }
}
function validarTextoMensaje(){
    mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
    revisarMensaje("á");
    revisarMensaje("é");
    revisarMensaje("í");
    revisarMensaje("ó");
    revisarMensaje("ú");

    for(var i = 0; i < 24; i++){
        revisarMensaje(mayusculas[i]);
    }

}
function revisarCodigo(letra){
    for(i=0;i < codigo.length;i++){
        confirmacion = false;
        if (lista_desencriptacion[i] == letra){
            confirmacion = true;
            if(confirmacion == true){
                mensaje_Desencriptado = "ERROR";
            }
        }
        
    }
}
function validarTextoCodigo(){
    mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
    revisarCodigo("á");
    revisarCodigo("é");
    revisarCodigo("í");
    revisarCodigo("ó");
    revisarCodigo("ú");

    for(var i = 0; i < 24; i++){
        revisarCodigo(mayusculas[i]);
    }
}

//Funcion que activa funciones desde HTML "ENCRIPTAR"
function activarbotonEncriptar(){
    obtenerMensaje();
    eliminarMensaje();   
    reacomodoelementos();
    boton_Encriptar();
    validarTextoMensaje()
    escribeMensaje();
    enfocarinput();
}
//Funcion que activa funciones desde HTML   "DESENCRIPTAR"
function activarbotonDesencriptar(){
    obtenerCodigo();
    eliminarCodigo();
    reacomodoelementos();
    boton_Desencriptar();
    validarTextoCodigo()
    escribeCodigo();
    enfocarinput();
}
//Captura el mensaje para encriptar del input
function obtenerMensaje(){
    mensaje = document.getElementById("input").value;
}
//Captura el codigo para desencriptar del input
function obtenerCodigo(){
    codigo = document.getElementById("input").value;
}

function escribeMensaje(){
    document.getElementById("cuadro_2").innerHTML = mensaje_Encriptado;
}
function escribeCodigo(){
    document.getElementById("cuadro_2").innerHTML = mensaje_Desencriptado;
}
function eliminarMensaje(){
    for(i = 0; i <= mensaje.length; i++){
        lista_encriptacion.splice(0,i);    
    }
}
function eliminarCodigo(){
    for(i = 0; i <= codigo.length; i++){
        lista_desencriptacion.splice(0,i);    
    }
}
function botoncopiar(){
    var contenido = document.getElementById("cuadro_2");
    contenido.select();
    document.execCommand('copy');
    enfocarinput();
}


//fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
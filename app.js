//Este archivo js se va a encargar de inicializar nuestro contenido
const express = require("express"); //esta variable nos inicializa el servidor o lo trae
const req = require("express/lib/request");
const res = require("express/lib/response");

const path = require("path"); //le proporcionamos la ruta de los archivos y elementos que utilizamos en el proyecto

//creamos una aplicación con el servidor de express
const app = express();
//el "/" nos da acceso a todo el directorio que obtenemos con get
app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname + "/index.html"));//el join nos ayuda a unir todos los argumentos que especificamos
    //sendFile nos ayuda a transferir el archivo a la ruta dada
});

//Activaremos las conexiones

app.listen(80,()=>{
    console.log("El servidor corriendo en el puerto ",80);
})//el listen nos ayuda a activar la conexión
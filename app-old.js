const http= require ('http');

http.createServer((req,res)=>{

    res.writeHead(200,{'content-Type':'application/json'});
    let salida = {
        nombre:"Benjamin",
        apellido:"Castrillo",
        localidad:"Madrid",
        pais:"España"
    }

    res.write(JSON.stringify(salida));
  //  res.write('hola mundo');
    res.end();
})
.listen(8080);

console.log('escuchando el puerto 8080');
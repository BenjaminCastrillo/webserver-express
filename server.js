const express = require('express')
const app = express()
const hbs =require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;
console.log("inicio proceso");
app.use(express.static(__dirname+'/public'));

// express hbs engine
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine', 'hbs');



app.get('/', function (req, res) {
  // res.send('Hola mundo');
    // let salida = {
    //     nombre:"Benjamin",
    //     apellido:"Castrillo",
    //     localidad:"Madrid",
    //     pais:"España",
    //     url: req.url
    // }
    // res.send(salida);
    res.render('home',{
        nombre:'benjaMin casTrillo de lA cruz'
    });

})
app.get('/about', function (req, res) {
    res.render('about');

})
 
app.listen(port, ()=>{
    console.log(`escuchando en el puerto ${port}`);
});
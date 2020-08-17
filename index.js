// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','Centro de Capacitación Técnica')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

// Ruta Nuestra Historia
app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
})

// Ruta Academico
app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | Academico"
    res.render('academico.ejs', {title: title} )
})

// Ruta Admisiones 
app.get('/admisiones', (req, res) => {
    var title = app.get('appName')+" | Admisiones"
    res.render('admisiones.ejs', {title: title} )
})

// Ruta Calendario
app.get('/calendario', (req, res) => {
    var title = app.get('appName')+" | Calendario"
    res.render('calendario.ejs', {title: title} )
})

// Ruta Formulario
app.get('/formulario', (req, res) => {
    var title = app.get('appName')+" | formulario"
    res.render('formulario.ejs', {title: title} )
})

// Ruta Noticias
app.get('/noticias', (req, res) => {
    var title = app.get('appName')+" | Noticias"
    res.render('noticias.ejs', {title: title} )
})


//nuevas rutas

app.get('/noticias', (req, res) => {
    var title = app.get('appName')+" | Noticias"
    res.render('noticias.ejs', {title: title} )
})


// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

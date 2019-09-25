const express = require('express');
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/file.txt')
})

app.use('/asset', router);


/*
app.get("/handler1", function (req,res){
    //res.status(200)
    //res.set('Content-Type', 'text/plain')
    res.send('<h1>hola</h1>')
    console.dir(req.baseUrl)
    console.dir(req.body)
    console.dir(req.hostname)
    console.dir(req.method)
    console.dir(req.originalUrl)
    console.dir(req.path)
    console.dir(req.protocol)
    console.dir(req.query)
    
})
*/
/*
app.use(function (req, res, next){
    console.log('soy un middleware')
    res.send('<h1>Soy un middleware</h1>')
    next()
})*/
app.get("/handler2", function (req,res){
    res.send('<h1>handler2</h1>')
})



app.listen(9000, () => {
    console.log("el servidor esta escuhando por el puerto 9000..")
})
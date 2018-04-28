'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

//Middleware que parsea bodies por los distintos metodos (POST,PUT), false
//Para quiterle la configuración de seguridad qs 

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//METODO GET
    //Request,response
    app.get('/api/:operando1?/:operando?/:operando2?', function(req,res){
        //PARAMETROS. 
        var operando1 = parseFloat(req.params.operando1)
        var operando = req.params.operando
        var operando2 = parseFloat(req.params.operando2)
        var resultado_operacion = "Resultado: "

        if(req.params.operando && req.params.operando1 && req.params.operando2){
            switch(operando){
                case "+": 
                resultado_operacion += parseFloat(operando1 + operando2)
                    break;
                case "-": 
                resultado_operacion += parseFloat(operando1 - operando2)
                    break;
                case "*": 
                resultado_operacion += parseFloat(operando1 * operando2)
                    break;
                case "/": 
                resultado_operacion += parseFloat(operando1 / operando2)
                    break;
            }
        }

        //RESPONSE
        res.status(200).send({
            Resultado: resultado_operacion
        })
    })

app.listen(7070,function(){
    console.log('ESTE es un ejemplo de api')
});
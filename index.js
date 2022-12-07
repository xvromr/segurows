const express=require('express');
const app=express();
const port = process.env.PORT || 3001;;
app.use(express.json());

app.get('/seguros',(req,res)=>{
    res.send("Bienvenido al portal");
});

app.listen(port,()=>{
    console.log("Servidor escuchando en el puerto ");
})

app.post('/seguros/consulta/:plan/:edad',(req, res)=>{
    var plan = req.params.plan;
    var edad = req.params.edad;
    var data = {plan:"",edad:0,cobertura:0};
    data.plan=plan;
    data.edad=edad;
    if(edad >=15 && edad < 18){
        if(plan == "basic"){
            data.cobertura=5000
        }
        else if (plan == "advanced"){
            data.cobertura=12000
        } 
        else{
            data.plan=null;
        }
    }
    else if (edad >=18 && edad < 30){
        if(plan == "basic"){
            data.cobertura=15000
        }
        else if (plan == "advanced"){
            data.cobertura=20000
        }
        else{
            data.plan=null;
        }
    }
    else if( edad >=30 && edad <= 65){
        data.cobertura=25000
    }
    else{
        data.cobertura=null
    }
    res.send(data);
})

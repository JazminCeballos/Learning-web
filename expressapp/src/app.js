const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index');

//configutaciones
mongoose.connect('mongodb+srv://root:toor@cluster0.oxj8f.mongodb.net/cluster0?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err => console.log(err));
const port = 3000;


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/products/', indexRoutes);

//inicializacion del server
app.listen(port, ()=>{
    console.log('Server started');
});
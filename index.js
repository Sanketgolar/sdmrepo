const express=require('express');
const cors=require('cors');
const empapp=require('./Emp')

const app=express();

app.use(cors('*'));
app.use(express.json());

app.use('/Emp',empapp);

app.listen(9999,()=>{
    console.log('server started ,port=>9999');
})
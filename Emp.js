const mysql=require('mysql');
const express=require('express');
const empapp=express.Router();
const conn=mysql.createConnection(
    {
        port:3306,
        database:'sdm',
        user:'root',
        password:'manager'
    }
);

empapp.get('/:ename',(req,resp)=>{
    var q=`select * from Employee_Tb where e_name='${req.params.ename}'`;
    conn.query(q,(err,result)=>{
        console.log(err);

        const data=JSON.stringify(result);
        console.log(data);
        resp.send(data);
    })
});

empapp.post('/',(req,resp)=>{
    var q=`insert into Employee_Tb values(${req.body.id},'${req.body.e_name}','${req.body.email}','${req.body.password}','${req.body.emp_id}','${req.body.dname}','${req.body.doj}')`;
    conn.query(q,(err,result)=>{
        console.log(err);

        const data=JSON.stringify(result);
        console.log(data);
        resp.send(data);
    })
});

empapp.put('/',(req,resp)=>{
    var q=`update Employee_Tb set dname='${req.body.dname}',doj='${req.body.doj}' where id='${req.body.id}';`
    conn.query(q,(err,result)=>{
        console.log(err);

        const data=JSON.stringify(result);
        console.log(data);
        resp.send(data);
    })
});

empapp.delete('/',(req,resp)=>{
    var q=`delete from Employee_Tb where id='${req.body.id}'`;
    conn.query(q,(err,result)=>{
        console.log(err);

        const data=JSON.stringify(result);
        console.log(data);
        resp.send(data);
    })
});

module.exports=empapp;
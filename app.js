const express = require('express');
const app = express();
const port = 3000;
const users = [
    {nome: "Seu José", idade:94, naturalidade: "Mossoró"},
    {nome: "Joel", idade:40, naturalidade: "São Pedro"},
    {nome: "Maria", idade:35, naturalidade: "Macaíba"},
    {nome: "Alê", idade:150, naturalidade: "Roma"}
]

app.get('/', (req, res)=>{
    res.send('Hello World Docker');
})

app.get('/users', (req, res)=>{
    res.json(users);
})

app.listen(port, ()=> {
    console.log(`Aplicação rodando em appt://localhost:${port}`);
})

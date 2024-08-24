"use strict";

const express = require("express");

const app = express();
const port = 3000

app.use(express.json());


// Default route
app.get('/', (req, res) => {
  res.send('Hello World!\n')
})


// Echo API
app.post('/echo', (req, res) => {
  const name = req.body.name || 'World'; // Extract 'name' from the request body
  res.send(`Hello, ${name}!\n`);
});


// Math API GET Addition
app.get('/math/add', (req, res) => {
    const op1 = parseFloat(req.query.op1);
    const op2 = parseFloat(req.query.op2);

    if (isNaN(op1) || isNaN(op2)) {
        return res.status(400).send('Invalid operands');
    }

    const result = op1 + op2;
    res.send(`${result}\n`);
});


// Math API POST Addition
app.post('/math/add', (req, res) => {
    const { op1, op2 } = req.body;

    if (isNaN(op1) || isNaN(op2)) {
        return res.status(400).json({ error: 'Invalid operands' });
    }

    const result = op1 + op2;
    res.json({ result });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


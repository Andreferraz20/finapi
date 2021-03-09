const { request } = require('express');
const { v4: uuidv4 } = require('uuid');
const express = require('express');

const app = express();

app.use(express.json());

const customers = [];

app.post("/account", (request, response) => {
    const { cpf, name } = request.body;

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    })
    return response.status(201).send()

})

app.listen(3333)
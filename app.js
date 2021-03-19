const express = require('express');

const app = express();
const PORT = 3000;

const API_PREFIX = '/my/common/api/path';
const API_GET = '/api/v1'
const JSON_DATA = {"data": {"items": [1, 2, 3]}}

app.get(`${API_GET}/text`, function(request, response){
    response.sendfile('index.html')    // отдали index.html
    // send("Hello, World!");
});

app.get(`${API_GET}/post`, function(request, response){
    response.sendfile('test.html')
});

app.put(`${API_GET}/json`, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(JSON_DATA);
});

// Если мы сделаем POST-запрос сюда, то получим верный ответ
// Если отправим GET-запрос, то получим либо 405 HTTP ошибку, либо 404
app.post(`${API_PREFIX}/test`, (req, res) => {
    res.status(201).send('my text');
});



app.delete(`${API_PREFIX}/delete`, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({deleted: true});
});

app.listen(PORT, () => {
    console.log(`Мой текст и порт: ${PORT}!`);
});

require('dotenv').config();

const express = require('express');
const http = require('http').createServer(express())
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const logger =  require('morgan');
const cors = require('cors')
const indexRouter = require('./src/Routes/index');
const socketListener = require('./src/handler/socketHandler');

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`);
});
http.listen(process.env.SOCKET_PORT, () => {
    console.log(`socket listening at : ${process.env.SOCKET_PORT}`)
})

console.log(process.env.DATABASE)
app.use(express.static('public'))
app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use(logger('dev'));
app.use(cors())

app.use(indexRouter)
socketListener(io)
const SocketServer = require('socket.io');

const server = new SocketServer(3000);  //создали сервер с портом 3000

//server.on - местное событие в server'e
server.on('connection', socket => {   //обект socket представляет собой соединение с клиентом
  console.log("на сервер постучался клиент...")
  socket.on('chat', messege => {      //B.==>>, названия событий мы здесь можем сами придумывать
    server.emit('chat', messege);     //полученное сообщение передаем всем подключенным клиентам
  });

  socket.emit('ready', 'Hi!')   //Исходящее to client событие, это сообщение будет отправлено 1 раз при подключении  ДАННОГО клиента
});


// server.emit('chat', messege)   - ВСЕМ подключенным клиентам
// socket.emit('ready', 'Hi!')    - только ДАННОМУ клиенту


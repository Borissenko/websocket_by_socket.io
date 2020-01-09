const WebSocket = require('ws');  //данный ws- установлен по npm на "серверную часть".

const server = new WebSocket.Server({port: 3000});  //сервер, его адрес будет ws://localhost:3000

//ws - это сокет, получаемый от клиента, от генерируется броузером конкретного клиента (!)

server.on('connection', ws => {   //при перезагрузке страницы, при подключении клиента к серверу
  ws.on('message', message => {   //получаемое сервером сообщение от клиента

    if (message === 'exit') {  //если текст сообщения от клиента - "exit", то отключить ДАННОГО клиента
      ws.close()
    } else {  //иначе- полученное от клиента сообщение разошлем всем остальным клиентам
      server.clients.forEach(client => {  //server.clients- массив всех подключенных серверу клиентов
        if (client.readyState === WebSocket.OPEN) { //если у клиента подключен сокет
          client.send(message)  //пошлем клиенту сообщение
        }
      })
    }
  })


  ws.send('Добро пожаловать!')
}); //событие. срабатывает при подключению к серверу, ws шлет сообщение







https://coursehunter.net/course/znakomstvo-s-websocket
ПРОСТЕЙШИЙ WEBSOCKET

& 2  ==  Socket.io ==
Для СТАРЫХ броузеров, которые еще не поддерживают сокеты, лечим их, подключая на клиенте библиотеки,
заменяющие сокет другими технологиями- полинг или лонгПолинг.

Наиболее популярна библиотека Socket.io
npm i  socket.io --save

она используется и на сервере, и на клиенте- это ее особенность

1. пишем файл socketServer.js в корне проекта - это сервер,
и pablic/socketClient.js - это клиент, 
а в index.html клиента подключаем скрипт:
      <script src="socketClient.js"></script>

2. Подключаем на клиенте функцию io глобально:        
Для простоты копируем node_modules/socket.io-client/dist/socket.io.js в папку public,
и в index.html ВЫШЕ(!), чем прописано подключение скрипта socketClient.js, прописываем
      <script src="socket.io.js"></script>

3. запускаем сервер из папки server -  
node server
4. запускаем клиента  из папки public
http-server




https://coursehunter.net/course/znakomstvo-s-websocket
ПРОСТЕЙШИЙ WEBSOCKET

& 2  ==  Socket.io ==
Для СТАРЫХ броузеров, которые еще не поддерживают сокеты, лечим их, подключая на клиенте библиотеки,
заменяющие сокет другими технологиями- полинг или лонгПолинг.

Наиболее популярна библиотека Socket.io
npm i  socket.io --save

она используется и на сервере, и на клиенте- это ее особенность

1. пишем сервер 
- socketServer.js Это сервер на базе вкстроенного в socket.io сервера
- expressServer.js Это сервер на базе express.

2. пишем клиента


2. Пишем JS клиента - client_html/socketClient.js, 
и подключаем его в index.html
<script src="socketClient.js"></script>

2. Подключаем для JS клиента функцию io        
Для простоты копируем node_modules/socket.io-client/dist/socket.io.js в папку public,
и в index.html ВЫШЕ(!), чем прописано подключение скрипта socketClient.js, прописываем
<script src="socket.io.js"></script>

или импортируем библиотеку онлайн
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.4/socket.io.min.js"></script>
или
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
или
<script src="/socket.io/socket.io.js"></script>
-и файл будет искаться в node_modules, расположенном рядом с index.html

или скачать клиентскую библиотеку (NB!)
https://github.com/socketio/socket.io-client
      
      
3. запускаем сервер из папки server -  
node socketServer
или
node expressServer

4. запускаем клиента из папки client_html
http-server

\\\\\\\\\\
codeDo_course - done
VSocket_Chat VUE-1 и 2  - DONE





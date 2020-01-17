const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');


const socketClient = io('http://localhost:3000')
//io - будет доступна глобально, через вставленный socket.io.js в index.html
//сначало подключаемся по 'http'(!) - http(!)://localhost:3000',
// а далее библиотека подключиться по протоколу ws, если он существует в броузере клиента.


function setStatus(value) {  //изменяем  строчку "статус" на странице
  status.innerHTML = value;
}

function printMessage(value) {  //выводим сообщение на страницу
  const li = document.createElement('li');

  li.innerHTML = value;
  messages.appendChild(li);
}


form.addEventListener('submit', event => {  //ентер по полю инпута полылает содержимое инпута на сервер
  event.preventDefault();

//посылаем на сервер:
  socketClient.emit('chat', input.value);

  input.value = ''
})

//стандартные МЕСТНЫЕ события socketClient
socketClient.on('connect', () => setStatus('onLine'));            //подключение произошло. Срабатывает.
socketClient.on('disconnect', () => setStatus('onLine is shated')); //подключение завершилось

//мной придуманные события socket- и клиента, и на сервере
socketClient.on('chat', messege => printMessage(messege))
socketClient.on('ready', messege => printMessage(messege))

// Т.о.
//   посылаем:
// socketClient.emit('chat', input.value);  //A.==>> server  Исходящие события
// названия событий мы здесь сами придумываем
//
//   получаем по "клику" на сервере:
// socketClient.on('ready', messege => printMessage(messege)) //входящие события




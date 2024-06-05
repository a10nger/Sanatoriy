// Данные

const data_room1 = "Стандарт";
const data_room2 = "Премиум";
const data_room3 = "Делюкс";
const data_room4 = "Сьют";


const data_room1_info = "Уютный номер с современной мебелью и удобной кроватью, идеально подходит для одного или двух гостей. Здесь есть все необходимое для комфортного пребывания: собственная ванная комната, мини-бар, телевизор и просторный гардероб.";

const data_room2_info = "Просторный номер с панорамным видом на горы и озеро, оформленный в теплых пастельных тонах. Включает в себя отдельную гостиную, спальню с кроватью, просторную ванную комнату и отдельный балкон, где можно насладиться утренним кофе с видом на природу.";

const data_room3_info = "Просторный номер с двумя отдельными спальнями, идеальный для семейного отдыха. Интерьер оформлен в ярких красках, а для маленьких гостей предусмотрены игровой уголок и детская кроватка. В номере также имеется общая гостиная зона с удобным диваном и телевизором.";

const data_room4_info = "Элегантные апартаменты с просторным балконом и видом на море. В апартаментах есть отдельная спальня с кроватью, гостиная зона с кухней, обеденной зоной и уютным камином. Идеальный выбор для романтического отдыха или длительного пребывания на курорте.";


const data_room1_img = "img/rooms/standart.webp";
const data_room2_img = "img/rooms/prem.webp";
const data_room3_img = "img/rooms/lux.webp";
const data_room4_img = "img/rooms/sut.webp";


const data_room1_price = 3000;
const data_room2_price = 4500;
const data_room3_price = 5000;
const data_room4_price = 5500;


let data_room1_included = ["Питание", "Бассейн", "Экскурсия"];
let data_room2_included = ["Питание", "Бассейн", "Экскурсия"];
let data_room3_included = ["Питание", "Бассейн", "Экскурсия"];
let data_room4_included = ["Питание", "Бассейн", "Экскурсия"];

// Scroll

document.addEventListener('DOMContentLoaded', function () {
  const homeButtons = document.querySelectorAll('#home');

  homeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (window.location.pathname.includes('index.html') || window.location.pathname.includes('index.html/')) {
        window.scrollTo(0, 0);
      } else if (window.location.pathname.includes('info/')) {
        window.location.href = '../index.html';
      }
      else {
        window.location.href = 'index.html';
      }
    });
  });
});


// Крошки

window.onload = function () {
  if (document.querySelector('.reset') !== null) {
    document.querySelector('.reset').addEventListener('click', function () {
      window.location.href = window.location.href;
    });
  }
}


//   Упс


if (document.getElementById('ops')) {
  window.onload = function () {
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.color = '#fff';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.textAlign = 'center';
    overlay.style.zIndex = '99999999';

    var content = document.createElement('div');
    content.classList = "center";
    content.innerHTML = `
    <p class="h1">Ой. Данная страница находится в разработке.</p>
    <br>
    <button class="ops__button" id="ops__button__back">
      <p class="display-7 text" id="ops__button__back">Вернуться на предыдущую страницу</p>
    </button>
    `;
    overlay.appendChild(content);

    document.body.appendChild(overlay);
  };
}

function ops__home() {
  var overlay = document.createElement('div');
  overlay.id = "overlay";
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlay.style.color = '#fff';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.textAlign = 'center';
  overlay.style.zIndex = '99999999';

  var content = document.createElement('div');
  content.classList = "center";
  content.innerHTML =
    `
  <p class="h1">Сайт находится в разработке.</p>
  <p class="h2">Некоторые элементы страниц могут работать некорректно или не работать.</p>
  <br>
  <button class="ops__button" id="close">
    <p class="display-7 text" id="close">Закрыть уведомление</p>
  </button>
  `
  overlay.appendChild(content);

  document.body.appendChild(overlay);
}

function ops__temporarily() {
  var overlay = document.createElement('div');
  overlay.id = "overlay";
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
  overlay.style.color = '#fff';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.textAlign = 'center';
  overlay.style.zIndex = '99999999';

  var content = document.createElement('div');
  content.classList = "center";
  content.innerHTML =
    `
  <p class="h1">Данная страница находится в разработке.</p>
  <br>
  <button class="ops__button" id="close">
    <p class="display-7 text" id="close">Закрыть уведомление</p>
  </button>
  <br>
  <button class="ops__button" id="ops__button__back">
    <p class="display-7 text" id="ops__button__back">Вернуться на предыдущую страницу</p>
  </button>
  `
  overlay.appendChild(content);

  document.body.appendChild(overlay);
}

function incrementcounter() {
  if (localStorage.getItem('visits')) {
    let visits = parseInt(localStorage.getItem('visits'));
    localStorage.setItem('visits', String(visits + 1));
    if (visits > -1 & visits < 1) {
       ops__home();
    }
  } else {
    localStorage.setItem('visits', '0');
  }
}


let timeout;

function resetTimer() {
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
        localStorage.setItem('visits', 0);
    }, 60000); // 1 минута
}

if (document.addEventListener('mousemove', resetTimer) || document.addEventListener('keypress', resetTimer)) {
  resetTimer();
}

if (document.getElementById('ops__home')) {
  window.onload = incrementcounter();
}

if (document.getElementById('ops__temporarily')) {
  window.onload = ops__temporarily();
}

function closeoverlay() {
  document.querySelector('#overlay').style.display = 'none';
}

document.addEventListener('click', function (event) {
  if (event.target.id == 'close') {
    closeoverlay();
  }
  if (event.target.id == 'ops__button__back') {
    window.history.back();
  }
});



// Modal


const openmodalbtns = document.querySelectorAll('#open-modal');
const openmodal = document.getElementsByClassName('buy__pryce__info');
const modal = document.getElementById('modal');
const closebtn = document.getElementsByClassName('close')[0];
const roominfo = document.getElementById('room-info');

openmodalbtns.forEach(btn => {
  const roomindex = btn.getAttribute('data-room');
  btn.addEventListener('click', function () {
    if (roomindex === "room1") {
      room = data_room1;
      info = data_room1_info;
      img = data_room1_img;
      price = data_room1_price;
      includ = data_room1_included;
    } else if (roomindex === "room2") {
      room = data_room2;
      info = data_room2_info;
      img = data_room2_img;
      price = data_room2_price;
      includ = data_room2_included;
    } else if (roomindex === "room3") {
      room = data_room3;
      info = data_room3_info;
      img = data_room3_img;
      price = data_room3_price;
      includ = data_room3_included;
    } else if (roomindex === "room4") {
      room = data_room4;
      info = data_room4_info;
      img = data_room4_img;
      price = data_room4_price;
      includ = data_room4_included;
    }
    roominfo.innerHTML =
      `
      <p class="h2 room">Пплан: ${room}</p>
      <div class="modal-info">
        <img class="img" src="${img}">
        <ul class="include">
        <p class="h3 room-info">${info}</p>
          <li class="h4">${includ[0]} - ✔</li>
          <li class="h4">${includ[1]} - ✔</li>
          <li class="h4">${includ[2]} - ✔</li>
        </ul>
      </div>
      <p class="h2 center">Цена: от ${price}/сут</p>
      `;
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.textAlign = 'center';
  });
});

closebtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});


document.getElementById('add-to-cart').addEventListener('click', function () {
  // const roomInfo = roominfo.innerHTML;
  // localStorage.setItem('selectedRoomInfo', roomInfo);
  window.location.href = "buy.html";
});

document.addEventListener('DOMContentLoaded', function () {
  // const selectedRoomInfo = localStorage.getItem('selectedRoomInfo');
  // document.getElementById('selected-room-info').innerHTML = selectedRoomInfo;
  // localStorage.removeItem('selectedRoomInfo');
});



// Date


const inDate = new Date();
document.getElementById('date_in').valueAsDate = inDate;

const outDate = new Date(inDate);
outDate.setDate(inDate.getDate() + 3);

document.getElementById('date_out').valueAsDate = outDate;


// Buy pryce


const roomPrice = parseFloat(data_room1_price);
const dateIn = document.getElementById('date_in');
const dateOut = document.getElementById('date_out');
const buyPrice = document.getElementById('buy__price');

function calculateDays(date1, date2) {
  const diffTime = Date.parse(date2) - Date.parse(date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function updateTotalPrice() {
  const days = calculateDays(dateIn.value, dateOut.value);
  const totalPrice = roomPrice * days;
  // buyPrice.textContent = totalPrice + ' RUB';
}

updateTotalPrice();

dateIn.addEventListener('change', updateTotalPrice);
dateOut.addEventListener('change', updateTotalPrice);
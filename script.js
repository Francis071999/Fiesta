// Base de datos de 400 invitados distribuidos en 40 mesas
const invitadosDB = [];
for (let i = 1; i <= 400; i++) {
  let nombre = `Invitado ${i}`;
  if (i === 1) nombre = "Juan Perez";
  invitadosDB.push({
    id: i.toString(),
    nombre: nombre,
    mesaNumero: Math.ceil(i / 10),
    asiento: ((i - 1) % 10) + 1
  });
}

const guestCard = document.getElementById('guest-card');
const guestName = document.getElementById('guest-name');
const guestTable = document.getElementById('guest-table');
const guestSeat = document.getElementById('guest-seat');
const searchSection = document.getElementById('search-section');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

document.addEventListener('DOMContentLoaded', () => {
  renderSaloon();
  checkUrlParams();
});

function createTableElement(number) {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';
  wrapper.id = `table-${number}`;

  const circle = document.createElement('div');
  circle.className = 'table-circle';
  circle.textContent = number;
  wrapper.appendChild(circle);

  const totalChairs = 10;
  const isDesktop = window.innerWidth >= 650;
  const radius = isDesktop ? 28 : 24;

  for (let i = 0; i < totalChairs; i++) {
    const chair = document.createElement('div');
    chair.className = 'chair';
    
    const angleDeg = i * (360 / totalChairs);
    const angleRad = angleDeg * (Math.PI / 180);

    const x = Math.cos(angleRad) * radius;
    const y = Math.sin(angleRad) * radius;

    chair.style.transform = `translate(${x}px, ${y}px) rotate(${angleDeg + 90}deg)`;
    wrapper.appendChild(chair);
  }

  return wrapper;
}

function renderSaloon() {
  const leftTop = document.getElementById('left-top');
  const leftBottom = document.getElementById('left-bottom');
  const rightTop = document.getElementById('right-top');
  const rightBottom = document.getElementById('right-bottom');

  leftTop.innerHTML = '';
  leftBottom.innerHTML = '';
  rightTop.innerHTML = '';
  rightBottom.innerHTML = '';

  for (let i = 1; i <= 40; i++) {
    const tableElem = createTableElement(i);
    
    if (i <= 14) {
      leftTop.appendChild(tableElem);        // Mesas 1 a 14
    } else if (i <= 28) {
      rightTop.appendChild(tableElem);       // Mesas 15 a 28
    } else if (i <= 34) {
      leftBottom.appendChild(tableElem);     // Mesas 29 a 34
    } else {
      rightBottom.appendChild(tableElem);    // Mesas 35 a 40
    }
  }
}

function checkUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const numeroMesa = urlParams.get('mesa');
  const id = urlParams.get('invitado') || urlParams.get('id');
  const nombre = urlParams.get('nombre');

  // Si escanean el QR de una mesa específica (ej: ?mesa=10)
  if (numeroMesa) {
    resaltarMesaDirecta(numeroMesa);
    searchSection.classList.add('hidden');
    return;
  }

  // Si vienen por búsqueda de invitado o ID individual
  let encontrado = null;
  if (id) {
    encontrado = invitadosDB.find(item => item.id === id.trim());
  } else if (nombre) {
    encontrado = invitadosDB.find(item => item.nombre.toLowerCase().replace(/\s+/g, '') === nombre.toLowerCase().replace(/\s+/g, ''));
  }

  if (encontrado) {
    mostrarInvitado(encontrado);
    searchSection.classList.add('hidden');
  }
}

// Función para iluminar la mesa directamente cuando escanean el QR de mesa
function resaltarMesaDirecta(num) {
  guestName.textContent = `Ubicación: Mesa ${num}`;
  guestTable.textContent = num;
  guestSeat.textContent = "—";
  guestCard.classList.remove('hidden');

  document.querySelectorAll('.table-wrapper').forEach(m => {
    if (m.id === `table-${num}`) {
      m.classList.add('highlight');
      m.classList.remove('dimmed');
    } else {
      m.classList.add('dimmed');
      m.classList.remove('highlight');
    }
  });
}

function mostrarInvitado(invitado) {
  guestName.textContent = invitado.nombre;
  guestTable.textContent = invitado.mesaNumero;
  guestSeat.textContent = invitado.asiento;
  guestCard.classList.remove('hidden');

  document.querySelectorAll('.table-wrapper').forEach(m => {
    if (m.id === `table-${invitado.mesaNumero}`) {
      m.classList.add('highlight');
      m.classList.remove('dimmed');
    } else {
      m.classList.add('dimmed');
      m.classList.remove('highlight');
    }
  });
}

searchBtn.addEventListener('click', realizarBusqueda);
searchInput.addEventListener('input', realizarBusqueda);

function realizarBusqueda() {
  const q = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = '';
  if (!q) return;
  const res = invitadosDB.filter(i => i.nombre.toLowerCase().includes(q));
  res.slice(0, 5).forEach(inv => {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `<span>${inv.nombre}</span> <strong>Mesa ${inv.mesaNumero}</strong>`;
    div.onclick = () => { mostrarInvitado(inv); searchResults.innerHTML = ''; searchInput.value = ''; };
    searchResults.appendChild(div);
  });
}


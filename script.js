// ==========================================
// 1. LISTA REAL DE INVITADOS (400 PERSONAS)
// Reemplaza los nombres de ejemplo por tu lista real
// ==========================================
const invitadosDB = [
  { nombre: "Franco Osores", mesaNumero: mesa 1 },
  { nombre: "Ramon Vergara", mesaNumero: mesa 2 },
  { nombre: "Lionel Messi", mesaNumero: mesa 3 },
  // PEGA AQUÍ EL RESTO DE TUS INVITADOS HASTA LLEGAR A LOS 400
];

// Elementos del DOM
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

// Función para renderizar individualmente cada mesa con sus sillas
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
  const radius = isDesktop ? 28 : 18;

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

// Renderizado de las 40 mesas en las grillas correspondientes
function renderSaloon() {
  const leftTop = document.getElementById('left-top');
  const leftBottom = document.getElementById('left-bottom');
  const rightTop = document.getElementById('right-top');
  const rightBottom = document.getElementById('right-bottom');

  if (!leftTop || !leftBottom || !rightTop || !rightBottom) return;

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

// Lectura de parámetros por URL (por si escanean un QR directo de mesa)
function checkUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const numeroMesa = urlParams.get('mesa');
  const nombre = urlParams.get('nombre');

  if (numeroMesa) {
    resaltarMesaDirecta(numeroMesa);
    return;
  }

  if (nombre) {
    const encontrado = invitadosDB.find(item => 
      item.nombre.toLowerCase().replace(/\s+/g, '') === nombre.toLowerCase().replace(/\s+/g, '')
    );
    if (encontrado) {
      mostrarInvitado(encontrado);
    }
  }
}

// Función para resaltar una mesa ingresada directamente
function resaltarMesaDirecta(num) {
  if (guestName) guestName.textContent = `Ubicación: Mesa ${num}`;
  if (guestTable) guestTable.textContent = num;
  if (guestSeat) guestSeat.textContent = "—";
  if (guestCard) guestCard.classList.remove('hidden');

  document.querySelectorAll('.table-wrapper').forEach(m => {
    if (m.id === `table-${num}`) {
      m.classList.add('highlight');
      m.classList.remove('dimmed');
      
      setTimeout(() => {
        m.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    } else {
      m.classList.add('dimmed');
      m.classList.remove('highlight');
    }
  });
}

// Función para resaltar la mesa al seleccionar un invitado del buscador
function mostrarInvitado(invitado) {
  if (guestName) guestName.textContent = invitado.nombre;
  if (guestTable) guestTable.textContent = invitado.mesaNumero;
  if (guestSeat) guestSeat.textContent = invitado.asiento || "—";
  if (guestCard) guestCard.classList.remove('hidden');

  document.querySelectorAll('.table-wrapper').forEach(m => {
    if (m.id === `table-${invitado.mesaNumero}`) {
      m.classList.add('highlight');
      m.classList.remove('dimmed');
      
      setTimeout(() => {
        m.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    } else {
      m.classList.add('dimmed');
      m.classList.remove('highlight');
    }
  });
}

// Buscador dinámico de invitados
if (searchBtn) searchBtn.addEventListener('click', realizarBusqueda);
if (searchInput) searchInput.addEventListener('input', realizarBusqueda);

function realizarBusqueda() {
  const q = searchInput.value.toLowerCase().trim();
  if (!searchResults) return;
  searchResults.innerHTML = '';
  if (!q) return;

  const res = invitadosDB.filter(i => i.nombre.toLowerCase().includes(q));
  res.slice(0, 5).forEach(inv => {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `<span>${inv.nombre}</span> <strong>Mesa ${inv.mesaNumero}</strong>`;
    div.onclick = () => { 
      mostrarInvitado(inv); 
      searchResults.innerHTML = ''; 
      searchInput.value = ''; 
    };
    searchResults.appendChild(div);
  });
}

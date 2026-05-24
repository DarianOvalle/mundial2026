// =========================================
//   MUNDIAL 2026 — script.js
// =========================================

// ---- DATOS: GRUPOS ----
const groups = [
  { name: 'A', teams: [
    { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'Inglaterra',    rank: 'FIFA #5'  },
    { flag: '🇦🇷', name: 'Argentina',     rank: 'FIFA #1'  },
    { flag: '🇲🇦', name: 'Marruecos',     rank: 'FIFA #14' },
    { flag: '🇯🇵', name: 'Japón',         rank: 'FIFA #18' },
  ]},
  { name: 'B', teams: [
    { flag: '🇫🇷', name: 'Francia',       rank: 'FIFA #2'  },
    { flag: '🇩🇰', name: 'Dinamarca',     rank: 'FIFA #21' },
    { flag: '🇧🇷', name: 'Brasil',        rank: 'FIFA #6'  },
    { flag: '🇲🇽', name: 'México',        rank: 'FIFA #15' },
  ]},
  { name: 'C', teams: [
    { flag: '🇪🇸', name: 'España',        rank: 'FIFA #8'  },
    { flag: '🇵🇹', name: 'Portugal',      rank: 'FIFA #7'  },
    { flag: '🇺🇾', name: 'Uruguay',       rank: 'FIFA #20' },
    { flag: '🇨🇲', name: 'Camerún',       rank: 'FIFA #42' },
  ]},
  { name: 'D', teams: [
    { flag: '🇩🇪', name: 'Alemania',      rank: 'FIFA #12' },
    { flag: '🇧🇪', name: 'Bélgica',       rank: 'FIFA #3'  },
    { flag: '🇺🇸', name: 'EE.UU.',        rank: 'FIFA #16' },
    { flag: '🇸🇦', name: 'Arabia Saudí',  rank: 'FIFA #55' },
  ]},
  { name: 'E', teams: [
    { flag: '🇳🇱', name: 'Países Bajos',  rank: 'FIFA #11' },
    { flag: '🇨🇴', name: 'Colombia',      rank: 'FIFA #9'  },
    { flag: '🇨🇦', name: 'Canadá',        rank: 'FIFA #47' },
    { flag: '🇸🇳', name: 'Senegal',       rank: 'FIFA #19' },
  ]},
  { name: 'F', teams: [
    { flag: '🇮🇹', name: 'Italia',        rank: 'FIFA #10' },
    { flag: '🇭🇷', name: 'Croacia',       rank: 'FIFA #13' },
    { flag: '🇦🇺', name: 'Australia',     rank: 'FIFA #23' },
    { flag: '🇨🇩', name: 'R.D. Congo',    rank: 'FIFA #69' },
  ]},
  { name: 'G', teams: [
    { flag: '🇵🇱', name: 'Polonia',       rank: 'FIFA #24' },
    { flag: '🇷🇸', name: 'Serbia',        rank: 'FIFA #26' },
    { flag: '🇮🇷', name: 'Irán',          rank: 'FIFA #22' },
    { flag: '🇨🇱', name: 'Chile',         rank: 'FIFA #30' },
  ]},
  { name: 'H', teams: [
    { flag: '🇰🇷', name: 'Corea del Sur', rank: 'FIFA #25' },
    { flag: '🇸🇪', name: 'Suecia',        rank: 'FIFA #27' },
    { flag: '🇦🇱', name: 'Albania',       rank: 'FIFA #66' },
    { flag: '🇳🇬', name: 'Nigeria',       rank: 'FIFA #28' },
  ]},
  { name: 'I', teams: [
    { flag: '🇪🇨', name: 'Ecuador',       rank: 'FIFA #35' },
    { flag: '🇸🇰', name: 'Eslovaquia',    rank: 'FIFA #49' },
    { flag: '🇬🇭', name: 'Ghana',         rank: 'FIFA #60' },
    { flag: '🇨🇳', name: 'China',         rank: 'FIFA #75' },
  ]},
  { name: 'J', teams: [
    { flag: '🇦🇹', name: 'Austria',       rank: 'FIFA #29' },
    { flag: '🇹🇷', name: 'Turquía',       rank: 'FIFA #31' },
    { flag: '🇵🇦', name: 'Panamá',        rank: 'FIFA #40' },
    { flag: '🇿🇲', name: 'Zambia',        rank: 'FIFA #71' },
  ]},
  { name: 'K', teams: [
    { flag: '🇨🇿', name: 'R. Checa',      rank: 'FIFA #33' },
    { flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', name: 'Escocia',       rank: 'FIFA #38' },
    { flag: '🇻🇪', name: 'Venezuela',     rank: 'FIFA #46' },
    { flag: '🇹🇳', name: 'Túnez',         rank: 'FIFA #34' },
  ]},
  { name: 'L', teams: [
    { flag: '🇸🇮', name: 'Eslovenia',     rank: 'FIFA #57' },
    { flag: '🇬🇷', name: 'Grecia',        rank: 'FIFA #48' },
    { flag: '🇨🇮', name: "C. de Marfil",  rank: 'FIFA #36' },
    { flag: '🇳🇿', name: 'Nueva Zelanda', rank: 'FIFA #96' },
  ]},
];

// ---- DATOS: PARTIDOS ----
const matches = [
  // FASE DE GRUPOS
  { team1: '🇲🇽', name1: 'México',        team2: '🇺🇸', name2: 'EE.UU.',        date: '11 jun', venue: 'Estadio Azteca, CDMX',        phase: 'grupos' },
  { team1: '🇦🇷', name1: 'Argentina',     team2: '🇲🇦', name2: 'Marruecos',     date: '12 jun', venue: 'MetLife Stadium, NJ',          phase: 'grupos' },
  { team1: '🇫🇷', name1: 'Francia',       team2: '🇧🇷', name2: 'Brasil',        date: '13 jun', venue: 'SoFi Stadium, California',     phase: 'grupos' },
  { team1: '🇪🇸', name1: 'España',        team2: '🇵🇹', name2: 'Portugal',      date: '14 jun', venue: 'AT&T Stadium, Texas',          phase: 'grupos' },
  { team1: '🇩🇪', name1: 'Alemania',      team2: '🇧🇪', name2: 'Bélgica',       date: '15 jun', venue: 'Arrowhead Stadium, KC',        phase: 'grupos' },
  { team1: '🇳🇱', name1: 'Países Bajos',  team2: '🇨🇴', name2: 'Colombia',      date: '16 jun', venue: "Levi's Stadium, CA",           phase: 'grupos' },
  { team1: '🇮🇹', name1: 'Italia',        team2: '🇭🇷', name2: 'Croacia',       date: '17 jun', venue: 'Hard Rock Stadium, Miami',     phase: 'grupos' },
  { team1: '🇰🇷', name1: 'Corea del Sur', team2: '🇸🇪', name2: 'Suecia',        date: '18 jun', venue: 'BC Place, Vancouver',          phase: 'grupos' },
  { team1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name1: 'Inglaterra',    team2: '🇯🇵', name2: 'Japón',         date: '19 jun', venue: 'Estadio BBVA, Monterrey',      phase: 'grupos' },
  { team1: '🇵🇱', name1: 'Polonia',       team2: '🇷🇸', name2: 'Serbia',        date: '20 jun', venue: 'BMO Field, Toronto',           phase: 'grupos' },
  { team1: '🇪🇨', name1: 'Ecuador',       team2: '🇸🇰', name2: 'Eslovaquia',    date: '21 jun', venue: 'Lincoln Financial, Filadelfia',phase: 'grupos' },
  { team1: '🇦🇹', name1: 'Austria',       team2: '🇹🇷', name2: 'Turquía',       date: '22 jun', venue: 'Estadio Akron, Guadalajara',   phase: 'grupos' },
  { team1: '🇨🇿', name1: 'R. Checa',      team2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', name2: 'Escocia',       date: '23 jun', venue: 'SoFi Stadium, California',     phase: 'grupos' },
  { team1: '🇸🇮', name1: 'Eslovenia',     team2: '🇬🇷', name2: 'Grecia',        date: '24 jun', venue: 'MetLife Stadium, NJ',          phase: 'grupos' },
  { team1: '🇩🇰', name1: 'Dinamarca',     team2: '🇲🇽', name2: 'México',        date: '25 jun', venue: 'Estadio Azteca, CDMX',        phase: 'grupos' },
  { team1: '🇺🇾', name1: 'Uruguay',       team2: '🇨🇲', name2: 'Camerún',       date: '26 jun', venue: 'Hard Rock Stadium, Miami',     phase: 'grupos' },
  // OCTAVOS
  { team1: '🥇', name1: '1º Grupo A',    team2: '🥈', name2: '2º Grupo B',    date: '29 jun', venue: 'MetLife Stadium, NJ',          phase: 'octavos' },
  { team1: '🥇', name1: '1º Grupo C',    team2: '🥈', name2: '2º Grupo D',    date: '30 jun', venue: 'SoFi Stadium, California',     phase: 'octavos' },
  { team1: '🥇', name1: '1º Grupo E',    team2: '🥈', name2: '2º Grupo F',    date: '01 jul', venue: 'AT&T Stadium, Texas',          phase: 'octavos' },
  { team1: '🥇', name1: '1º Grupo G',    team2: '🥈', name2: '2º Grupo H',    date: '02 jul', venue: 'Estadio Azteca, CDMX',        phase: 'octavos' },
  { team1: '🥇', name1: '1º Grupo I',    team2: '🥈', name2: '2º Grupo J',    date: '03 jul', venue: 'BC Place, Vancouver',          phase: 'octavos' },
  { team1: '🥇', name1: '1º Grupo K',    team2: '🥈', name2: '2º Grupo L',    date: '04 jul', venue: 'Arrowhead Stadium, KC',        phase: 'octavos' },
  // CUARTOS
  { team1: '🏆', name1: 'Ganador O1',    team2: '🏆', name2: 'Ganador O2',    date: '05 jul', venue: 'SoFi Stadium, California',     phase: 'cuartos' },
  { team1: '🏆', name1: 'Ganador O3',    team2: '🏆', name2: 'Ganador O4',    date: '06 jul', venue: 'MetLife Stadium, NJ',          phase: 'cuartos' },
  { team1: '🏆', name1: 'Ganador O5',    team2: '🏆', name2: 'Ganador O6',    date: '07 jul', venue: 'AT&T Stadium, Texas',          phase: 'cuartos' },
  // SEMIFINALES
  { team1: '⭐', name1: 'Ganador C.F.1', team2: '⭐', name2: 'Ganador C.F.2', date: '14 jul', venue: 'AT&T Stadium, Texas',          phase: 'semis' },
  { team1: '⭐', name1: 'Ganador C.F.3', team2: '⭐', name2: 'Ganador C.F.4', date: '15 jul', venue: 'SoFi Stadium, California',     phase: 'semis' },
  // FINAL
  { team1: '🏆', name1: 'GRAN FINAL',    team2: '🌍', name2: 'CAMPEÓN 2026',  date: '19 jul', venue: 'MetLife Stadium, East Rutherford', phase: 'final' },
];

// ---- DATOS: ESTADIOS ----
const stadiums = [
  {
    id: 0, emoji: '🏟️', country: '🇺🇸 EE.UU.',
    name: 'MetLife Stadium', city: '📍 East Rutherford, Nueva Jersey, EE.UU.',
    cap: '82,500', year: '2010', games: 9,
    desc: 'El coliseo del Mundial 2026. El estadio más grande del torneo albergará la Gran Final el 19 de julio. Hogar de los Giants y Jets de la NFL, su diseño oval sin techo creará una atmósfera eléctrica. Ya fue sede del Super Bowl XLVIII en 2014.',
    imgs: [
      { e: '🌆', l: 'Vista exterior' },
      { e: '🪑', l: 'Interior 82K' },
      { e: '🌙', l: 'Noche de final' },
    ],
    matches: ['Partido inaugural · 11 jun', 'Octavos de final · 29 jun', '🏆 Gran Final · 19 jul 2026'],
  },
  {
    id: 1, emoji: '🌴', country: '🇺🇸 EE.UU.',
    name: 'SoFi Stadium', city: '📍 Inglewood, California, EE.UU.',
    cap: '70,240', year: '2020', games: 8,
    desc: 'El estadio más moderno del mundo. Inaugurado en 2020 con una inversión de 5.5 mil millones de dólares, cuenta con techo traslúcido único, dos pantallas gigantes integradas y el campo más bajo del mundo.',
    imgs: [
      { e: '☀️', l: 'Techo traslúcido' },
      { e: '📺', l: 'Pantallas dobles' },
      { e: '🌿', l: 'Campo de juego' },
    ],
    matches: ['Fase de grupos - Grupo B · 13 jun', 'Cuartos de final · 05 jul', 'Semifinal · 15 jul'],
  },
  {
    id: 2, emoji: '⭐', country: '🇺🇸 EE.UU.',
    name: 'AT&T Stadium', city: '📍 Arlington, Texas, EE.UU.',
    cap: '80,000', year: '2009', games: 7,
    desc: 'Conocido como "America\'s Stadium". Tiene el techo retráctil más grande del mundo. Hogar de los Dallas Cowboys y sede de múltiples Super Bowls. Su pantalla de video fue la más grande del mundo al inaugurarse.',
    imgs: [
      { e: '🤠', l: 'Estilo texano' },
      { e: '🔄', l: 'Techo retráctil' },
      { e: '🎇', l: 'Noche de partido' },
    ],
    matches: ['Fase de grupos - Grupo D · 15 jun', 'Octavos de final · 01 jul', 'Semifinal · 14 jul'],
  },
  {
    id: 3, emoji: '☀️', country: '🇺🇸 EE.UU.',
    name: "Levi's Stadium", city: '📍 Santa Clara, California, EE.UU.',
    cap: '68,500', year: '2014', games: 6,
    desc: 'Uno de los estadios más sostenibles del mundo, con paneles solares que generan energía suficiente para todos los días de partido. Hogar de los San Francisco 49ers, con vistas espectaculares a las montañas de la bahía.',
    imgs: [
      { e: '☀️', l: 'Paneles solares' },
      { e: '🏔️', l: 'Vistas montañas' },
      { e: '🌱', l: 'Sostenibilidad' },
    ],
    matches: ['Fase de grupos - Grupo E · 16 jun', 'Octavos de final · 30 jun'],
  },
  {
    id: 4, emoji: '🔥', country: '🇺🇸 EE.UU.',
    name: 'Arrowhead Stadium', city: '📍 Kansas City, Misuri, EE.UU.',
    cap: '76,416', year: '1972', games: 6,
    desc: 'El estadio más ruidoso del mundo según el Libro Guinness (137.5 dB). Hogar de los Kansas City Chiefs, campeones del Super Bowl. Su base de fanáticos apasionados creará un ambiente único para el fútbol mundial.',
    imgs: [
      { e: '🔥', l: 'Ambiente brutal' },
      { e: '🏈', l: 'Historia Chiefs' },
      { e: '🌊', l: 'Mar de rojo' },
    ],
    matches: ['Fase de grupos - Grupo C · 14 jun', 'Octavos de final · 04 jul'],
  },
  {
    id: 5, emoji: '🦅', country: '🇺🇸 EE.UU.',
    name: 'Lincoln Financial Field', city: '📍 Filadelfia, Pensilvania, EE.UU.',
    cap: '67,594', year: '2003', games: 6,
    desc: 'Casa de los Philadelphia Eagles, campeones del Super Bowl. Ubicado en el corazón de la histórica Filadelfia. El estadio tiene una de las audiencias más ruidosas y comprometidas de la NFL.',
    imgs: [
      { e: '🦅', l: 'Las Águilas' },
      { e: '🗽', l: 'Filadelfia' },
      { e: '🏆', l: 'Campeones' },
    ],
    matches: ['Fase de grupos - Grupo E · 16 jun', 'Octavos de final · 02 jul'],
  },
  {
    id: 6, emoji: '🌊', country: '🇺🇸 EE.UU.',
    name: 'Hard Rock Stadium', city: '📍 Miami Gardens, Florida, EE.UU.',
    cap: '65,326', year: '1987',games: 6,
    desc: 'Sede de los Miami Dolphins. Renovado completamente en 2016, cuenta con un innovador techo cantiléver que proporciona sombra a todos los asientos. El calor y la energía de Miami harán de estos partidos una experiencia única en el mundo.',
    imgs: [
      { e: '🌴', l: 'Miami tropical' },
      { e: '🎸', l: 'Hard Rock' },
      { e: '🌊', l: 'Vibrante Miami' },
    ],
    matches: ['Fase de grupos - Grupo F · 17 jun', 'Octavos de final · 03 jul'],
  },
  {
    id: 7, emoji: '🦅', country: '🇲🇽 México',
    name: 'Estadio Azteca', city: '📍 Ciudad de México, México',
    cap: '87,523', year: '1966', games: 5,
    desc: 'El coliseo del fútbol mundial. Único estadio en albergar DOS finales del Mundial (1970 y 1986). Aquí Maradona marcó el "Gol del Siglo" y la "Mano de Dios" en México 86. Con más de 87,000 espectadores, es el más grande del torneo.',
    imgs: [
      { e: '🦅', l: 'Vista aérea' },
      { e: '⭐', l: 'Historia mítica' },
      { e: '🌎', l: 'Ciudad de México' },
    ],
    matches: ['🏟️ Partido de apertura · 11 jun', 'Fase de grupos - Grupo B · 25 jun', 'Octavos de final · 02 jul'],
  },
  {
    id: 8, emoji: '🏔️', country: '🇲🇽 México',
    name: 'Estadio BBVA', city: '📍 Guadalupe, Monterrey, México',
    cap: '51,348', year: '2015', games: 5,
    desc: 'Uno de los estadios más modernos de América Latina. Hogar del CF Monterrey, fue diseñado por los arquitectos Populous. Rodeado por la majestuosa Sierra Madre Oriental, ofrece un paisaje incomparable como telón de fondo.',
    imgs: [
      { e: '🏔️', l: 'Sierra Madre' },
      { e: '✨', l: 'Arquitectura' },
      { e: '🔵', l: 'Rayados' },
    ],
    matches: ['Fase de grupos - Grupo A · 19 jun', 'Fase de grupos - Grupo H · 18 jun'],
  },
  {
    id: 9, emoji: '🌿', country: '🇲🇽 México',
    name: 'Estadio Akron', city: '📍 Zapopan, Guadalajara, México',
    cap: '49,850', year: '2010', games: 5,
    desc: 'Sede del Club Deportivo Guadalajara (Chivas). Su diseño arquitectónico innovador, inspirado en el bosque local, tiene una fachada de fibra de vidrio que simula la naturaleza. Guadalajara es la segunda ciudad más grande de México.',
    imgs: [
      { e: '🌿', l: 'Diseño forestal' },
      { e: '🔴', l: 'Chivas' },
      { e: '🎭', l: 'Guadalajara' },
    ],
    matches: ['Fase de grupos - Grupo C · 22 jun', 'Fase de grupos - Grupo I · 21 jun'],
  },
  {
    id: 10, emoji: '🍁', country: '🇨🇦 Canadá',
    name: 'BC Place', city: '📍 Vancouver, Columbia Británica, Canadá',
    cap: '54,500', year: '1983', games: 6,
    desc: 'El estadio cubierto más grande de Canadá, con un innovador techo retráctil de teflón que es el más grande del mundo. Ubicado en el hermoso centro de Vancouver, con vistas a las montañas y la bahía inglesa.',
    imgs: [
      { e: '🍁', l: 'Vancouver' },
      { e: '⛰️', l: 'Montañas nevadas' },
      { e: '🌊', l: 'Bahía inglesa' },
    ],
    matches: ['Fase de grupos - Grupo D · 18 jun', 'Fase de grupos - Grupo J · 22 jun', 'Octavos de final · 01 jul'],
  },
  {
    id: 11, emoji: '🇨🇦', country: '🇨🇦 Canadá',
    name: 'BMO Field', city: '📍 Toronto, Ontario, Canadá',
    cap: '45,736', year: '2007', games: 5,
    desc: 'La joya del fútbol canadiense. Hogar del Toronto FC, ganador de la MLS Cup. Ubicado junto al lago Ontario en el corazón del parque Exhibition Place. Toronto, la ciudad más multicultural del mundo, recibirá fanáticos de todo el planeta.',
    imgs: [
      { e: '🏙️', l: 'Skyline Toronto' },
      { e: '🌊', l: 'Lago Ontario' },
      { e: '⚽', l: 'Toronto FC' },
    ],
    matches: ['Fase de grupos - Grupo G · 20 jun', 'Octavos de final · 04 jul'],
  },
];

// =========================================
//   FUNCIONES DE NAVEGACIÓN
// =========================================

function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================
//   RENDER: GRUPOS
// =========================================

function renderGroups() {
  const grid = document.getElementById('groupsGrid');
  grid.innerHTML = groups.map(gr => `
    <div class="group-card">
      <div class="group-header">
        GRUPO ${gr.name}
        <small>· 4 selecciones</small>
      </div>
      ${gr.teams.map(t => `
        <div class="team-row">
          <div class="flag">${t.flag}</div>
          <div class="team-name">${t.name}</div>
          <div class="team-rank">${t.rank}</div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// =========================================
//   RENDER: PARTIDOS
// =========================================

let currentFilter = 'all';

const phaseLabels = {
  grupos:  'Fase de Grupos',
  octavos: 'Octavos de Final',
  cuartos: 'Cuartos de Final',
  semis:   'Semifinal',
  final:   '🏆 Gran Final',
};

function filterMatches(f, btn) {
  currentFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMatches();
}

function renderMatches() {
  const list = document.getElementById('matchesList');
  const filtered = currentFilter === 'all'
    ? matches
    : matches.filter(m => m.phase === currentFilter);

  list.innerHTML = filtered.map(m => `
    <div class="match-card">
      <div class="match-teams">
        <div class="match-team">
          <div class="match-flag">${m.team1}</div>
          <div class="match-name">${m.name1}</div>
        </div>
        <div class="vs-badge">VS</div>
        <div class="match-team right">
          <div class="match-name">${m.name2}</div>
          <div class="match-flag">${m.team2}</div>
        </div>
      </div>
      <div class="match-info">
        <div class="match-date">📅 ${m.date}</div>
        <div class="match-venue">🏟️ ${m.venue}</div>
        <div class="match-phase phase-${m.phase}">${phaseLabels[m.phase]}</div>
      </div>
    </div>
  `).join('');
}

// =========================================
//   RENDER: ESTADIOS
// =========================================

function renderStadiums() {
  const grid = document.getElementById('stadiumsGrid');
  grid.innerHTML = stadiums.map(s => `
    <div class="stadium-card" onclick="openStadium(${s.id})">
      <div class="stadium-thumb">
        <span style="position:relative;z-index:1;font-size:5rem">${s.emoji}</span>
        <div class="stadium-country">${s.country}</div>
      </div>
      <div class="stadium-body">
        <div class="stadium-name">${s.name}</div>
        <div class="stadium-city">${s.city}</div>
        <div class="stadium-meta">
          <span>👥 ${s.cap}</span>
          <span>📅 ${s.year}</span>
          <span>⚽ ${s.games} partidos</span>
        </div>
        <button class="view-btn">Ver detalles del estadio →</button>
      </div>
    </div>
  `).join('');
}

// =========================================
//   MODAL DE ESTADIO
// =========================================

function openStadium(id) {
  const s = stadiums[id];

  document.getElementById('modalEmoji').innerHTML =
    `<span style="position:relative;z-index:1;font-size:8rem">${s.emoji}</span>`;
  document.getElementById('modalName').textContent = s.name;
  document.getElementById('modalCity').textContent = s.city;
  document.getElementById('modalCap').textContent = s.cap;
  document.getElementById('modalYear').textContent = s.year;
  document.getElementById('modalGames').textContent = s.games;
  document.getElementById('modalDesc').textContent = s.desc;

  document.getElementById('modalImgs').innerHTML = s.imgs.map(i => `
    <div>
      <div class="img-box">
        <span>${i.e}</span>
        <span class="img-label">${i.l}</span>
      </div>
    </div>
  `).join('');

  document.getElementById('modalMatches').innerHTML =
    s.matches.map(m => `<span class="match-tag">⚽ ${m}</span>`).join('');

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}

function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Cerrar con Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalBtn();
});

// =========================================
//   INIT
// =========================================
renderGroups();
renderMatches();
renderStadiums();

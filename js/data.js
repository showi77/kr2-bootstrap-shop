// js/data.js — Автономные данные и логика плеера (работает без интернета)

// Функция генерации стильной SVG-обложки (винил + градиент)
function makeCover(color1, color2, title = "♪") {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${encodeURIComponent(color1)}'/><stop offset='100%' stop-color='${encodeURIComponent(color2)}'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><circle cx='150' cy='150' r='100' fill='%23121212' stroke='%23ffcc00' stroke-width='4'/><circle cx='150' cy='150' r='35' fill='%23ffcc00'/><text x='150' y='160' font-family='sans-serif' font-size='28' font-weight='bold' fill='%23000' text-anchor='middle'>${encodeURIComponent(title)}</text></svg>`;
}

const defaultCovers = {
  track1: makeCover('#3a1c71', '#d76d77', '1'),
  track2: makeCover('#134e5e', '#71b280', '2'),
  track3: makeCover('#ff416c', '#ff4b2b', '3'),
  track4: makeCover('#1f4037', '#99f2c8', '4'),
  album1: makeCover('#232526', '#414345', 'B'),
  album2: makeCover('#e65c00', '#f9d423', 'S'),
  playlist1: makeCover('#8a2387', '#e94057', '★'),
  playlist2: makeCover('#000428', '#004e92', '⚡')
};

const musicData = [
  { id: 1, title: "Где прошла ты", artist: "Кравц & Гио Пика", album: "17 мгновений", duration: "2:48", cover: defaultCovers.track1 },
  { id: 2, title: "Дарите женщинам цветы", artist: "HammAli & Navai", album: "Спешите любить", duration: "3:12", cover: defaultCovers.track2 },
  { id: 3, title: "Комета", artist: "JONY", album: "Список твоих мыслей", duration: "2:36", cover: defaultCovers.track3 },
  { id: 4, title: "Пыяла", artist: "АИГЕЛ", album: "Эдем", duration: "3:30", cover: defaultCovers.track4 },
  { id: 5, title: "Тяжелый люкс", artist: "SALUKI", album: "Тяжелый люкс", duration: "2:55", cover: defaultCovers.album2 },
  { id: 6, title: "Моя игра", artist: "Баста", album: "Город дорог", duration: "4:10", cover: defaultCovers.album1 }
];

function playTrack(trackId) {
  const track = musicData.find(t => t.id === trackId);
  if (!track) return;

  const playerTitle = document.getElementById("player-title");
  const playerArtist = document.getElementById("player-artist");
  const playerCover = document.getElementById("player-cover");
  const playerDuration = document.getElementById("player-duration");
  const playBtn = document.getElementById("player-play-btn");

  if (playerTitle) playerTitle.textContent = track.title;
  if (playerArtist) playerArtist.textContent = track.artist;
  if (playerCover) playerCover.src = track.cover;
  if (playerDuration) playerDuration.textContent = track.duration;
  if (playBtn) playBtn.innerHTML = '<i class="bi bi-pause-fill fs-5"></i>';
}
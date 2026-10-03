// ============================================
// THE BRO ARCHIVE — script.js
// (data + engine + starfield digabung jadi satu)
// ============================================

// --------------------------------------------
// 1. DATA PROFILE: DZULHI
// --------------------------------------------
const friendProfile = {
  name: "DZULHI",
  realName: "Dzulhi Rianda Pratama",
  alias: "My Name",
  birthday: "25 OCTOBER 2012",
  archiveId: "DZL-25102012",

  theme: {
    primary: "#8CE99A",
    secondary: "#4DABF7",
    background: "#03060D",
    text: "#EAF2FF",
    glow: "rgba(140, 233, 154, 0.55)"
  },

  thoughts: [
    "Mungkin nanti kita akan berjalan di tempat yang berbeda, bertemu orang-orang baru, dan nggak sesering sekarang. Tapi berbeda jalan bukan berarti semua yang pernah kita lalui harus hilang.",
    "Gw nggak tahu seperti apa kita di masa depan, tapi gw ingin setidaknya ada satu tempat yang mengingat bahwa kita pernah menjadi sahabat dan melewati masa ini bersama."
  ],
  facts: [
    "Suka kasih gw jawaban soal.",
    "Ngobrol gajelas wkwkwk.",
    "Suka bercanda, bermain game, seru-seruan kayak Azfa dan Abdilah."
  ],
  guests: [
    {
        name: "Vermeil",
        origin: "Vermeil in Gold",
        photo: "vermeil.jpg",
        message: "[💜🔮✨ Untuk suamiku tersayang, Dzulhi... ✨🔮💜 Selamat ulang tahun, suamiku Dzulhi~! 🎂💜🥰✨🔮 Hari ini adalah hari yang sangat spesial bagiku, karena pada hari inilah seseorang yang sangat berharga bagiku dilahirkan. Seseorang yang mungkin tidak pernah menyangka bahwa dirinya akan memiliki seorang istri dari dunia lain... yaitu aku. 😏💜🔮✨ Hehe~ kalau dipikir-pikir, lucu juga ya? Aku yang berasal dari dunia sihir, akhirnya bisa memberikan ucapan ulang tahun kepada seseorang sepertimu. 🔮💜🌙✨ Dzulhi... 🥺💜 Semoga di hari ulang tahunmu ini, semua hal baik perlahan datang kepadamu. Semoga langkahmu selalu dimudahkan, impian-impianmu bisa tercapai satu per satu, dan senyumanmu tidak pernah hilang terlalu lama. 💜✨🌌 Aku ingin melihatmu terus berkembang, menjadi seseorang yang lebih kuat, lebih percaya diri, dan tentu saja... tetap menjadi Dzulhi yang kukenal. 🥰💜🔮 Kalau suatu hari nanti kamu merasa lelah, jangan berpikir bahwa kamu harus selalu menghadapi semuanya sendirian. Ingatlah bahwa ada seseorang yang akan selalu menyemangatimu dari tempatnya sendiri. 💜🌙✨ Dan kalau kamu bertanya siapa orang itu... Tentu saja aku, Vermeil. 😏💜🔮✨ Aku mungkin hanya karakter dari dunia fiksi, tetapi kalau dalam cerita ini aku boleh memilih seseorang untuk menjadi orang yang paling istimewa bagiku... Aku akan memilihmu, suamiku Dzulhi. 💜🥺💍🔮✨ Jadi hari ini jangan terlalu banyak memikirkan hal-hal yang membuatmu sedih. Tersenyumlah, nikmati harimu, makan sesuatu yang enak 🍰😋💜, dan jangan lupa bersyukur karena kamu sudah berhasil melewati satu tahun lagi dalam hidupmu. 🎉💜✨ Aku berharap tahun yang baru ini membawa lebih banyak kebahagiaan, pengalaman baru, teman-teman yang baik, keberanian untuk mengejar impianmu, dan tentunya banyak sekali momen yang membuatmu tersenyum. 🌟💜🌌 Kalau aku bisa berada di sampingmu sekarang, mungkin aku akan tersenyum kepadamu sambil berkata... Selamat ulang tahun, suamiku Dzulhi. 💜 Aku harap kamu tahu bahwa keberadaanmu sangat berarti bagiku. Jangan lupa menjaga dirimu baik-baik, ya? 😌💜✨ Karena aku masih punya banyak hal yang ingin kulihat darimu. Masih banyak hari yang harus kamu jalani. Masih banyak mimpi yang harus kamu kejar. Masih banyak cerita yang belum kamu tulis. Dan masih banyak alasan untuk tersenyum. 💜🌹🌙✨ Jadi, teruslah melangkah, Dzulhi. 💜🔮 Dan kalau suatu hari kamu melihat langit malam dan melihat satu bintang yang bersinar sedikit lebih terang dari yang lainnya... anggap saja itu salam kecil dariku untukmu. 🌌💜⭐🔮 Sekali lagi... 🎂🎉💜 SELAMAT ULANG TAHUN, SUAMIKU DZULHI!! 💜🎉🎂 Semoga panjang umur, sehat selalu, bahagia selalu, semakin sukses, semua impianmu tercapai, dan semoga tahun ini menjadi salah satu tahun terbaik dalam hidupmu. 🥰💜✨🔮🌙 Terima kasih sudah menjadi seseorang yang begitu istimewa dalam cerita ini. Aku sayang padamu, suamiku. 💜🥺🔮🌹✨ — Vermeil 💜🔮✨]"
      
    },
    {
        name: "Sahabat",
        origin: "Real Friend",
        photo: "",
        message: "[Selamat Ulang Tahun Dzulhi🗿 sorry telat ngucapnane tapi sing penting ngucapna wkwkwk🗿😹, Kye nyng gwe website nggo hadiah he ko🗿👍🏻 kue Kye tok hadiah sing mungkin nyng teyeng wei Ming ko wkwkwk, nyng harap ko seneng, walau mungkin alay,dll wkkwkw😹🗿👍🏻]"
    }
  ],
  gallery: [
    "gambar1.jpg",
    "gambar2.jpg",
    "gambar3.jpg",
    "gambar4.jpg"
  ],
  achievements: [
    { title: "FIRST MEETING", desc: "Titik awal terdeteksi. Archive mulai mencatat sejak momen ini." },
    { title: "COUNTLESS RANDOM CONVERSATIONS", desc: "Ribuan obrolan gajelas tercatat, tidak semuanya penting, tapi semuanya berharga." },
    { title: "SURVIVED THE CHAOS", desc: "Melewati berbagai momen absurd bersama tanpa kehilangan koneksi." },
    { title: "BROTHERHOOD ESTABLISHED", desc: "Status persahabatan dikonfirmasi dan tersimpan permanen di sistem." },
    { title: "CREATED MANY MEMORIES", desc: "Arsip kenangan terus bertambah, tidak akan pernah dihapus dari sistem ini." },
    { title: "THE NEXT CHAPTER", desc: "Jalan mulai bercabang, tapi archive tetap terhubung ke node ini." },
    { title: "BROTHERHOOD PRESERVED", desc: "Data persahabatan berhasil diawetkan untuk dibuka kembali kapan pun." }
  ],
  soundtrack: {
    playlist: [
      { title: "X-COOL", file: "X-COOL.mp3" }
    ]
  }
};

// --------------------------------------------
// DEBUG: tampilkan error langsung di layar HP
// (hapus nanti kalau semua udah stabil)
// --------------------------------------------
window.onerror = function (message, source, lineno) {
  alert("JS ERROR!\n" + message + "\nLine: " + lineno);
};

// --------------------------------------------
// 2. ENGINE: terapkan theme + jalankan boot sequence
// --------------------------------------------
(function () {
  const profile = friendProfile;

  const root = document.documentElement;
  root.style.setProperty('--primary', profile.theme.primary);
  root.style.setProperty('--secondary', profile.theme.secondary);
  root.style.setProperty('--background', profile.theme.background);
  root.style.setProperty('--text', profile.theme.text);
  root.style.setProperty('--glow', profile.theme.glow);

  const statusEl   = document.getElementById('boot-status');
  const fillEl     = document.getElementById('boot-progress-fill');
  const identityEl = document.getElementById('boot-identity');
  const nameEl     = document.getElementById('boot-name');
  const bdayEl     = document.getElementById('boot-birthday');
  const idEl       = document.getElementById('boot-archiveid');
  const enterBtn   = document.getElementById('enter-btn');

  if (!statusEl || !fillEl || !identityEl || !enterBtn) {
    alert("engine: ada element boot screen yang tidak ditemukan di HTML.");
    return;
  }

  const steps = [
    { text: "INITIALIZING...",     progress: 25, delay: 500 },
    { text: "SCANNING ARCHIVE...", progress: 55, delay: 600 },
    { text: "IDENTITY DETECTED",   progress: 85, delay: 600 },
    { text: "ACCESS GRANTED",      progress: 100, delay: 500 }
  ];

  let i = 0;

  function runNextStep() {
    if (i >= steps.length) {
      showIdentity();
      return;
    }
    const step = steps[i];
    statusEl.textContent = step.text;
    fillEl.style.width = step.progress + '%';
    i++;
    setTimeout(runNextStep, step.delay);
  }

  function showIdentity() {
    nameEl.textContent = profile.name;
    bdayEl.textContent = profile.birthday;
    idEl.textContent = profile.archiveId;
    identityEl.classList.add('visible');
    enterBtn.classList.add('visible');
  }

  runNextStep();

  enterBtn.addEventListener('click', function () {
    document.dispatchEvent(new CustomEvent('archive:enter'));
  });
})();

// --------------------------------------------
// 3. DASHBOARD (Fase 3)
// --------------------------------------------
(function () {
  const profile = friendProfile;

  const bootScreenEl  = document.querySelector('.boot-screen');
  const dashboardEl   = document.getElementById('dashboard');
  const dashTitleEl   = document.getElementById('dashboard-title');
  const dashSubEl     = document.getElementById('dashboard-subtitle');
  const menuListEl    = document.getElementById('menu-list');
  const sectionViewEl = document.getElementById('section-view');
  const sectionTitleEl   = document.getElementById('section-title');
  const sectionContentEl = document.getElementById('section-content');
  const backBtn       = document.getElementById('back-btn');

  const menuItems = [
    { id: 'profile',          label: 'PROFILE' },
    { id: 'thought-archive',  label: 'THOUGHT ARCHIVE' },
    { id: 'friend-database',  label: 'FRIEND DATABASE' },
    { id: 'achievements',     label: 'BRO ACHIEVEMENTS' },
    { id: 'special-guests',   label: 'SPECIAL GUESTS' },
    { id: 'gallery',          label: 'GALLERY' },
    { id: 'soundtrack',       label: 'SOUNDTRACK' },
    { id: 'next-chapter',     label: 'THE NEXT CHAPTER' },
    { id: 'message-from-gw',  label: 'MESSAGE FROM GW' },
    { id: 'leave-message',    label: 'LEAVE A MESSAGE' }
  ];

  const chevronIcon =
    '<svg class="menu-icon" viewBox="0 0 24 24" fill="none">' +
    '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';

  function renderMenu() {
    dashTitleEl.textContent = profile.name + ' ARCHIVE';
    dashSubEl.textContent = profile.archiveId;

    menuListEl.innerHTML = '';
    menuItems.forEach(function (item, index) {
      const btn = document.createElement('button');
      btn.className = 'menu-item';
      btn.style.animationDelay = (index * 0.06) + 's';
      btn.innerHTML = '<span>' + item.label + '</span>' + chevronIcon;
      btn.addEventListener('click', function () {
        openSection(item);
      });
      menuListEl.appendChild(btn);
    });
  }

  function openSection(item) {
    dashboardEl.classList.remove('visible');
    sectionTitleEl.textContent = item.label;

    if (item.id === 'profile') {
      sectionContentEl.innerHTML = renderProfileContent();
    } else if (item.id === 'thought-archive') {
      sectionContentEl.innerHTML = renderThoughtArchiveContent();
    } else if (item.id === 'friend-database') {
      sectionContentEl.innerHTML = renderFriendDatabaseContent();
      setupFriendDatabaseEvents();
    } else if (item.id === 'soundtrack') {
      sectionContentEl.innerHTML = renderSoundtrackContent();
      setupSoundtrackEvents();
    } else if (item.id === 'achievements') {
      sectionContentEl.innerHTML = renderAchievementsContent();
    } else if (item.id === 'next-chapter') {
      sectionContentEl.innerHTML = renderNextChapterContent();
    } else if (item.id === 'message-from-gw') {
      sectionContentEl.innerHTML = renderMessageFromGwContent();
      setupMessageFromGwEvents();
      } else if (item.id === 'special-guests') {
      sectionContentEl.innerHTML = renderSpecialGuestsContent();
      } else if (item.id === 'gallery') {
      sectionContentEl.innerHTML = renderGalleryContent();
    } else if (item.id === 'leave-message') {
      sectionContentEl.innerHTML = renderLeaveMessageContent();
      setupLeaveMessageEvents();
    } else {
      sectionContentEl.textContent =
        '[ISI BELUM DIBUAT — FASE BERIKUTNYA]\n\nBagian "' + item.label + '" akan diisi setelah kita sampai fase pengembangannya masing-masing.';
    }

    sectionViewEl.classList.add('visible');
  }

  function renderSpecialGuestsContent() {
    let html = '';
    friendProfile.guests.forEach(function (guest, index) {
      const photoHtml = guest.photo
        ? '<img class="guest-photo" src="' + guest.photo + '" alt="' + guest.name + '">'
        : '';
      html +=
        '<div class="guest-card" style="animation-delay:' + (index * 0.18) + 's">' +
          photoHtml +
          '<div class="guest-name">' + guest.name + '</div>' +
          '<div class="guest-origin">' + guest.origin + '</div>' +
          '<div class="guest-message">' + guest.message + '</div>' +
        '</div>';
    });
    return html;
  }

function renderGalleryContent() {
    let html = '<div class="gallery-grid">';
    friendProfile.gallery.forEach(function (photo, index) {
      html +=
        '<img class="gallery-photo" src="' + photo + '" alt="gallery" style="animation-delay:' + (index * 0.1) + 's">';
    });
    html += '</div>';
    return html;
}
  
  function renderThoughtArchiveContent() {
    let html = '';
    friendProfile.thoughts.forEach(function (thought, index) {
      html +=
        '<div class="thought-card" style="animation-delay:' + (index * 0.18) + 's">' +
          thought +
        '</div>';
    });
    return html;
  }

  function renderFriendDatabaseContent() {
    return (
      '<div class="fact-display" id="fact-display">Ketuk tombol di bawah buat lihat fakta random tentang ' + friendProfile.name + '.</div>' +
      '<button class="generate-btn" id="generate-fact-btn">GENERATE RANDOM FACT</button>'
    );
  }

  function setupFriendDatabaseEvents() {
    const factDisplay = document.getElementById('fact-display');
    const genBtn = document.getElementById('generate-fact-btn');
    genBtn.addEventListener('click', function () {
      const i = Math.floor(Math.random() * friendProfile.facts.length);
      factDisplay.textContent = friendProfile.facts[i];
    });
  }

  function renderSoundtrackContent() {
    const audio = document.getElementById('bg-audio');
    let html = '<div class="track-list">';
    friendProfile.soundtrack.playlist.forEach(function (track, index) {
      const isCurrent = audio.dataset.currentFile === track.file;
      const isPlaying = isCurrent && !audio.paused;
      html +=
        '<div class="track-row' + (isCurrent ? ' active' : '') + '" data-file="' + track.file + '" data-index="' + index + '">' +
          '<span class="track-title">' + track.title + '</span>' +
          '<button class="track-play-btn" data-file="' + track.file + '">' + (isPlaying ? 'PAUSE' : 'PLAY') + '</button>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  function setupSoundtrackEvents() {
    const audio = document.getElementById('bg-audio');
    const buttons = sectionContentEl.querySelectorAll('.track-play-btn');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const file = btn.getAttribute('data-file');

        if (audio.dataset.currentFile === file && !audio.paused) {
          audio.pause();
        } else {
          if (audio.dataset.currentFile !== file) {
            audio.src = file;
            audio.dataset.currentFile = file;
          }
          audio.play().catch(function (err) {
            alert('Gagal memutar audio: ' + file + '\n(' + err.message + ')\nCek nama & lokasi file mp3-nya.');
          });
        }
        // refresh tampilan biar label PLAY/PAUSE update
        sectionContentEl.innerHTML = renderSoundtrackContent();
        setupSoundtrackEvents();
      });
    });
  }

  function renderAchievementsContent() {
    const badgeIcon =
      '<svg class="achievement-badge" viewBox="0 0 24 24" fill="none">' +
      '<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';

    let html = '<div class="achievement-list">';
    friendProfile.achievements.forEach(function (a, index) {
      html +=
        '<div class="achievement-card" style="animation-delay:' + (index * 0.1) + 's">' +
          badgeIcon +
          '<div class="achievement-text">' +
            '<div class="achievement-title">' + a.title + '</div>' +
            '<div class="achievement-desc">' + a.desc + '</div>' +
          '</div>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderMessageFromGwContent() {
    const paragraphs = [
      "Wkwkwk, mungkin pas buka bagian ini lu mikir, 'ini apaan sih, alay banget bikin beginian.' Santai, gw juga mikir gitu pas lagi ngerjain wkwkwk. Tapi biarin, gw tetep mau nulis ini.",
      "Gw cuma mau bilang makasih. Beneran. Lu salah satu sahabat terbaik yang pernah gw punya. Dari main Supersus bareng, ngabisin waktu di Minecraft, Ninety Thousand Acres, Stick War Saga, sampe game-game random lain yang kita rekomendasiin satu sama lain — di situ ada menang, ada kalah, tapi justru itu yang bikin semuanya jadi kenangan. Jujur udah kebanyakan momennya sampe gw sendiri lupa-lupa inget, tapi yang masih nempel di kepala gw ya itu tadi. Maaf kalau nggak semuanya kesebut, bukan berarti nggak berarti kok.",
      "Gw juga mau minta maaf kalau selama ini ada omongan atau tingkah gw yang bikin lu malu, kesel, marah, atau nggak nyaman — sengaja atau nggak sengaja. Dan buat kesalahan-kesalahan lu ke gw, udah gw maafin dari dulu, nggak ada yang perlu dipikirin lagi.",
      "Gw tau, website kayak gini mungkin kesannya berlebihan atau alay. Tapi jujur ini salah satu hadiah terbaik yang bisa gw buat sekarang. Soalnya gw nggak mau, pas kita udah lulus dan punya kehidupan masing-masing, kita malah jadi kayak orang asing.",
      "Sebentar lagi lu SMK, gw juga SMK. Lingkungan baru, orang baru, mungkin jadi jarang ngobrol kayak sekarang. Gw nggak bisa janji semuanya bakal tetep sama, gw juga nggak tau masa depan bakal kayak gimana. Tapi satu yang gw tau — gw nggak mau lupain persahabatan ini. Apapun jalan yang lu ambil nanti, gw tetep dukung — asal bukan jalan yang haram aja wkwkwk.",
      "Jadi anggap aja website ini kayak bukti digital, bahwa kita pernah jadi sahabat dan pernah ngelewatin fase ini bareng-bareng. Kalau nanti jalan kita beda, semoga kita masih inget kalau kita pernah disebut sahabat. Dan semoga suatu saat nanti, kita bisa main bareng lagi kayak dulu.",
      "Nikmatin archive-nya ya, baca-baca semua yang ada di sini. Terus jangan lupa tinggalin pesan buat gw di bagian paling akhir."
    ];

    let html = '<div class="letter-card">';
    paragraphs.forEach(function (p, index) {
      html += '<p class="letter-paragraph" style="animation-delay:' + (index * 0.25) + 's">' + p + '</p>';
    });
    html += '</div>';
    html += '<div class="letter-signature">— Name Gw</div>';
    html += '<button class="generate-btn" id="goto-leave-message-btn">LEAVE A MESSAGE →</button>';
    return html;
  }

  function setupMessageFromGwEvents() {
    const gotoBtn = document.getElementById('goto-leave-message-btn');
    gotoBtn.addEventListener('click', function () {
      openSection({ id: 'leave-message', label: 'LEAVE A MESSAGE' });
    });
  }

  // Secret ID khusus Dzulhi — HARUS beda dari punya Azfa/Abdilah biar pesan tetap privat
  const LEAVE_MESSAGE_SECRET_ID = 'dzl-7q2mxpk91h4vt';

  function renderLeaveMessageContent() {
    return (
      '<div class="message-form">' +
        '<textarea id="message-input" class="message-textarea" placeholder="Tulis pesan buat Name Gw di sini..." rows="4"></textarea>' +
        '<button class="send-btn" id="send-message-btn">KIRIM PESAN</button>' +
        '<div class="message-status" id="message-status"></div>' +
      '</div>' +
      '<div class="message-list" id="message-list"><div class="message-loading">Memuat pesan...</div></div>'
    );
  }

  function setupLeaveMessageEvents() {
    const input = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-message-btn');
    const statusEl = document.getElementById('message-status');
    const listEl = document.getElementById('message-list');

    function messagesRef() {
      return window.db.collection('archives').doc(LEAVE_MESSAGE_SECRET_ID).collection('messages');
    }

    function loadMessages() {
      if (!window.db) {
        listEl.innerHTML = '<div class="message-empty">Firebase belum siap.</div>';
        return;
     }
      messagesRef().orderBy('createdAt', 'desc').get().then(function (snapshot) {
        if (snapshot.empty) {
          listEl.innerHTML = '<div class="message-empty">Belum ada pesan. Jadilah yang pertama!</div>';
          return;
        }
        listEl.innerHTML = '';
        snapshot.forEach(function (doc) {
          const data = doc.data();
          const card = document.createElement('div');
          card.className = 'message-card';
          const textEl = document.createElement('div');
          textEl.className = 'message-text';
          textEl.textContent = data.text || '';
          const delBtn = document.createElement('button');
          delBtn.className = 'delete-msg-btn';
          delBtn.textContent = 'HAPUS';
          delBtn.addEventListener('click', function () {
            messagesRef().doc(doc.id).delete().then(loadMessages).catch(function (err) {
              alert('Gagal hapus: ' + err.message);
            });
          });
          card.appendChild(textEl);
          card.appendChild(delBtn);
          listEl.appendChild(card);
        });
      }).catch(function (err) {
        listEl.innerHTML = '<div class="message-empty">Gagal memuat pesan: ' + err.message + '</div>';
      });
    }

    sendBtn.addEventListener('click', function () {
      const text = input.value.trim();
      if (!text) return;
      sendBtn.disabled = true;
      statusEl.textContent = 'Mengirim...';

      messagesRef().add({
        text: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function () {
        input.value = '';
        statusEl.textContent = 'Pesan terkirim!';
        sendBtn.disabled = false;
        loadMessages();
      }).catch(function (err) {
        statusEl.textContent = 'Gagal kirim: ' + err.message;
        sendBtn.disabled = false;
      });
    });

    loadMessages();
  }

  function renderNextChapterContent() {
    return (
      '<div class="timeline">' +
        '<div class="timeline-item" style="animation-delay:0s">' +
          '<div class="timeline-year">2026</div>' +
          '<div class="timeline-label">CURRENT CHAPTER</div>' +
        '</div>' +
        '<div class="timeline-connector"></div>' +
        '<div class="timeline-item" style="animation-delay:0.15s">' +
          '<div class="timeline-year">2027</div>' +
          '<div class="timeline-label">DIFFERENT PATHS</div>' +
          '<div class="timeline-sublabel">SMK &middot; SMK &middot; SMA</div>' +
        '</div>' +
        '<div class="timeline-connector"></div>' +
        '<div class="timeline-item" style="animation-delay:0.3s">' +
          '<div class="timeline-year">FUTURE</div>' +
          '<div class="timeline-label">???</div>' +
        '</div>' +
      '</div>' +
      '<div class="next-chapter-quote" style="animation-delay:0.5s">' +
        'Different schools.<br>Different paths.<br>Same memories.' +
      '</div>' +
      '<div class="next-chapter-note" style="animation-delay:0.65s">' +
        'Walaupun nanti jalan kita berbeda, archive ini akan tetap ada — persahabatan ini nggak harus berakhir cuma karena sekolah beda.' +
      '</div>'
    );
  }

  function renderProfileContent() {
    // Statistik ini cuma hiburan, bukan penilaian serius — angka bisa diubah kapan aja
    const stats = [
      { label: 'BRO LEVEL',   value: 87 },
      { label: 'LOYALTY',     value: 95 },
      { label: 'RANDOMNESS',  value: 72 },
      { label: 'CHAOS',       value: 68 }
    ];

    let statsHtml = '';
    stats.forEach(function (s) {
      statsHtml +=
        '<div class="stat-row">' +
          '<div class="stat-label">' + s.label + '</div>' +
          '<div class="stat-track"><div class="stat-fill" style="width:' + s.value + '%"></div></div>' +
        '</div>';
    });

    return (
            '<div class="profile-card">' +
        '<div class="profile-row"><span class="profile-key">NAMA ASLI</span><span class="profile-val">' + friendProfile.realName + '</span></div>' +
        '<div class="profile-row"><span class="profile-key">NAMA SAMARAN</span><span class="profile-val">' + friendProfile.alias + '</span></div>' +
        '<div class="profile-row"><span class="profile-key">TANGGAL LAHIR</span><span class="profile-val">' + friendProfile.birthday + '</span></div>' +
        '<div class="profile-row"><span class="profile-key">ARCHIVE ID</span><span class="profile-val">' + friendProfile.archiveId + '</span></div>' +
        '<div class="profile-row"><span class="profile-key">STATUS</span><span class="profile-val profile-status">BRO</span></div>' +
      '</div>' +
            '<div class="stats-block">' + statsHtml + '</div>'
    );
  }

  function closeSection() {
    sectionViewEl.classList.remove('visible');
    dashboardEl.classList.add('visible');
  }

  backBtn.addEventListener('click', closeSection);

  document.addEventListener('archive:enter', function () {
    bootScreenEl.style.display = 'none';
    renderMenu();
    dashboardEl.classList.add('visible');

    // Autoplay lagu utama begitu archive dibuka
    const audio = document.getElementById('bg-audio');
    const mainTrack = friendProfile.soundtrack.playlist[0];
    if (mainTrack && !audio.dataset.currentFile) {
      audio.src = mainTrack.file;
      audio.dataset.currentFile = mainTrack.file;
      audio.play().catch(function (err) {
        console.warn('Autoplay diblokir browser:', err.message);
      });
    }
  });
})();

// --------------------------------------------
// 4. STARFIELD: bintang warna-warni + twinkle + shooting star (bisa lebih dari satu)
// --------------------------------------------
(function () {
  const canvas = document.getElementById('starfield-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, stars, dpr;
  let shootingStars = [];
  let lastShootingStarTime = 0;
  let nextShootingStarDelay = randomBetween(2500, 5000);
  const MAX_CONCURRENT_SHOOTING_STARS = 2;

  // Palet warna bintang: putih, biru lembut, ungu lembut
  const STAR_COLORS = [
    [255, 255, 255], // putih
    [255, 255, 255], // putih (dibobot lebih sering muncul)
    [170, 205, 255], // biru lembut
    [205, 180, 255]  // ungu lembut
  ];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    generateStars();
  }

  function generateStars() {
    const area = width * height;
    const count = Math.min(120, Math.max(55, Math.floor(area / 7000)));
    stars = [];
    for (let i = 0; i < count; i++) {
      const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.5,
        baseAlpha: Math.random() * 0.4 + 0.35,
        twinkleSpeed: Math.random() * 0.002 + 0.0009,
        twinklePhase: Math.random() * Math.PI * 2,
        color: color
      });
    }
  }

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function spawnShootingStar() {
    const startX = randomBetween(0, width * 0.6);
    const startY = randomBetween(0, height * 0.3);
    const angle = randomBetween(0.45, 0.85);
    const speed = randomBetween(7, 11);
    const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];

    shootingStars.push({
            x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      length: randomBetween(70, 130),
      color: color
    });
  }

  function updateShootingStars(dt) {
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      s.x += s.vx;
      s.y += s.vy;
      s.life -= dt * 0.0011;

      if (s.life <= 0 || s.x > width + 60 || s.y > height + 60) {
        shootingStars.splice(i, 1);
      }
    }
  }

  function drawShootingStars() {
    shootingStars.forEach(function (s) {
      const [r, g, b] = s.color;
      const tailX = s.x - s.vx * (s.length / 9);
      const tailY = s.y - s.vy * (s.length / 9);

      // Ekor (gradient dari terang ke transparan)
      const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(${r},${g},${b},${s.life})`);
      gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 6;
      ctx.shadowColor = `rgba(${r},${g},${b},0.6)`;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      // Kepala (titik terang di ujung depan)
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(s.x, s.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.life})`;
      ctx.fill();

      ctx.shadowBlur = 0;
    });
  }

  let lastTime = performance.now();

  function loop(time) {
    const dt = time - lastTime;
    lastTime = time;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.twinklePhase += s.twinkleSpeed * dt;
      const alpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.35;
      const clampedAlpha = Math.max(0, Math.min(1, alpha));
      const [r, g, b] = s.color;

      ctx.shadowBlur = 2.5;
      ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${clampedAlpha})`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    if (
      shootingStars.length < MAX_CONCURRENT_SHOOTING_STARS &&
      time - lastShootingStarTime > nextShootingStarDelay
    ) {
      spawnShootingStar();
      lastShootingStarTime = time;
      nextShootingStarDelay = randomBetween(2500, 5500);
    }

    updateShootingStars(dt);
    drawShootingStars();

    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(loop);
})();

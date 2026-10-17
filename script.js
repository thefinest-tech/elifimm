
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const replaySongBtn = document.getElementById("replaySongBtn");
const song = document.getElementById("loveSong");

let stopTimer = null;

// Şarkıyı başlat ve 55 saniye sonra durdur
async function playSong() {
  clearTimeout(stopTimer);

  try {
    song.pause();
    song.currentTime = 0;
    await song.play();

    stopTimer = setTimeout(() => {
      song.pause();
      song.currentTime = 0;
    }, 55000);
  } catch (error) {
    alert("Şarkı açılamadı. elifimm.mp3 dosyasının doğru klasörde olduğunu kontrol et.");
  }
}

// Gizli sürprizi aç ve şarkıyı başlat
surpriseBtn.addEventListener("click", async () => {
  surprise.hidden = false;
  surpriseBtn.textContent = "Seni çok seviyorum ❤️";
  surpriseBtn.disabled = true;
  surpriseBtn.style.opacity = "0.8";

  surprise.scrollIntoView({
    behavior: window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches ? "auto" : "smooth",
    block: "center"
  });

  await playSong();
});

// Şarkıyı yeniden dinle
if (replaySongBtn) {
  replaySongBtn.addEventListener("click", playSong);
}
// Şarkı 55 saniyeden önce biterse de zamanlayıcıyı temizle
song.addEventListener("ended", () => {
  clearTimeout(stopTimer);
});

// Hafif uçuşan kalpler - yeni bölüm 

// Romantik kalp yağmuru 💗
const hearts = document.getElementById("hearts");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reducedMotion && hearts) {
  function createHeart() {
    const heart = document.createElement("span");

    heart.className = "heart";

    const symbols = ["♡", "♥", "💗", "💕", "💖"];
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.opacity = (0.35 + Math.random() * 0.45).toString();

    const duration = 5 + Math.random() * 6;
    heart.style.animationDuration = duration + "s";
    heart.style.animationDelay = "0s";

    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  // Sayfa açıldığında kalpler ekranda belirmeye başlasın
  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 180);
  }

  // Sürekli kalp yağmuru
  setInterval(createHeart, 300);
}

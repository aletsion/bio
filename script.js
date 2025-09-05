// Hiệu ứng view tăng
let views = 281;
setInterval(() => {
  views++;
  document.getElementById("view-count").innerText = views;
}, 5000);

// Click tim để tăng like
let likes = 4;
document.querySelector(".heart").addEventListener("click", () => {
  likes++;
  document.getElementById("like-count").innerText = likes;
});

// Nhạc nền
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    btn.textContent = "🔈";
  } else {
    music.pause();
    btn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});

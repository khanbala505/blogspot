// overlay-script.js
let isEnabled = true;

document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.innerHTML = 'Click to Continue';
  document.body.appendChild(overlay);

  overlay.addEventListener('click', function () {
    openLink();
  });
});

function openLink() {
  if (isEnabled) {
    window.open('https://vaitotoo.net/4/6423252');
    isEnabled = false;
    document.getElementById('overlay').style.display = 'none'; // Hide overlay
    setTimeout(() => {
      isEnabled = true;
      document.getElementById('overlay').style.display = 'block'; // Show overlay
    }, 15000); // 15 seconds delay
  }
}

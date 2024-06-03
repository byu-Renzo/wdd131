const subscribeCountText = document.getElementById('subscribeCountText');
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('subscribe.html')) {
    let subscribeCount = localStorage.getItem('subscribeCount') || 0;
    subscribeCount++;
    localStorage.setItem('subscribeCount', subscribeCount);
    subscribeCountText.textContent = subscribeCount;
  }
})

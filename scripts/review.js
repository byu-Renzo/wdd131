const reviewCountText = document.getElementById('reviewCountText');
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    reviewCountText.textContent = reviewCount;
  }
})

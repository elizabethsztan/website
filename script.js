// Visitor counter using hits.seeyoufarm.com (free, no signup)
fetch('https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flizlizliz.xyz&count_bg=%23000000&title_bg=%23000000&icon=&emoji_mode=false&title=hits&edge_flat=false')
  .then(response => response.text())
  .then(svg => {
    // Extract count from SVG response
    const match = svg.match(/>(\d+)<\/text><\/g><\/svg>/);
    if (match) {
      const count = String(match[1]).padStart(6, '0');
      document.getElementById('visitor-count').textContent = count;
    }
  })
  .catch(() => {
    document.getElementById('visitor-count').textContent = '------';
  });

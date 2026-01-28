// Visitor counter using GoatCounter
fetch('https://liztansz.goatcounter.com/counter//.json')
  .then(response => response.json())
  .then(data => {
    const count = String(data.count).padStart(6, '0');
    document.getElementById('visitor-count').textContent = count;
  })
  .catch(() => {
    document.getElementById('visitor-count').textContent = '------';
  });

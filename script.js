// Visitor counter using GoatCounter
// Fetches total count for the homepage
fetch('https://liztansz.goatcounter.com/counter/TOTAL.json')
  .then(response => response.json())
  .then(data => {
    const count = String(data.count).padStart(6, '0');
    document.getElementById('visitor-count').textContent = count;
  })
  .catch((err) => {
    console.log('Counter error:', err);
    document.getElementById('visitor-count').textContent = '------';
  });

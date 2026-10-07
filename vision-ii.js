(() => {
  'use strict';
  const select = document.getElementById('match-filter');
  const count = document.getElementById('data-count');
  const rows = [...document.querySelectorAll('#penalty-rows tr')];
  document.documentElement.classList.add('case-js');
  select.addEventListener('change', () => {
    rows.forEach(row => { row.hidden = select.value !== 'all' && row.dataset.match !== select.value; });
    count.textContent = `${rows.filter(row => !row.hidden).length} penalty kicks`;
  });
})();

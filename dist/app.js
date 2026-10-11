'use strict';
const announce = (message) => { const toast = document.getElementById('toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(announce.timer); announce.timer = setTimeout(() => toast.classList.remove('show'), 3500); };
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(other => { const active = other === button; other.classList.toggle('active', active); other.setAttribute('aria-pressed', String(active)); });
  document.querySelectorAll('[data-category]').forEach(product => { product.hidden = button.dataset.filter !== 'all' && product.dataset.category !== button.dataset.filter; });
}));
let favorites = [];
try { const saved = JSON.parse(localStorage.getItem('qkinhas-favorites') || '[]'); if (Array.isArray(saved)) favorites = saved.filter(value => typeof value === 'string'); } catch {}
document.querySelectorAll('.favorite').forEach(button => {
  const update = () => { const selected = favorites.includes(button.dataset.name); button.setAttribute('aria-pressed', String(selected)); button.textContent = selected ? '♥' : '♡'; button.setAttribute('aria-label', `${selected ? 'Quitar' : 'Guardar'} ${button.dataset.name}`); };
  update();
  button.addEventListener('click', () => { const name = button.dataset.name; if (favorites.includes(name)) favorites = favorites.filter(value => value !== name); else favorites.push(name); try { localStorage.setItem('qkinhas-favorites', JSON.stringify(favorites)); } catch {} update(); announce(favorites.includes(name) ? `${name}: guardado en tus antojos ♡` : `${name}: quitado de tus antojos`); });
});
document.getElementById('share').addEventListener('click', async () => {
  const url = window.location.origin + window.location.pathname;
  const data = {title: 'Qkinhas · Un plan dulce en A Coruña', text: 'Cookies, café y good vibes. ¿Nos pasamos por Qkinhas?', url};
  if (navigator.share) { try { await navigator.share(data); return; } catch (error) { if (error.name === 'AbortError') return; } }
  try { await navigator.clipboard.writeText(url); announce('Enlace copiado. ¡Pásale el plan a alguien!'); }
  catch { announce('Copia el enlace de esta página para compartir el plan.'); }
});
document.getElementById('load-map').addEventListener('click', () => {
  const frame = document.createElement('iframe'); frame.title = 'Ubicación de Qkinhas en A Coruña'; frame.src = 'https://www.google.com/maps?q=Qkinhas%20Costa%20da%20Uni%C3%B3n%203%20A%20Coru%C3%B1a&output=embed'; frame.loading = 'lazy'; frame.referrerPolicy = 'no-referrer-when-downgrade'; document.getElementById('map-panel').replaceChildren(frame);
});
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.perched-mascot').forEach(button => {
  let greetingTimer;
  button.addEventListener('click', () => {
    button.classList.add('is-greeting');
    announce('¡Hola! ¿Compartimos una cookie? 🍪');
    clearTimeout(greetingTimer);
    greetingTimer = setTimeout(() => button.classList.remove('is-greeting'), 1600);
  });
});

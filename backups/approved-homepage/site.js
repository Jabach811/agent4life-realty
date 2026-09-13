const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape' && navigation.classList.contains('open')) {closeMenu(); menuButton.focus();} });
matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

const properties = {
  waterwell: {name: '8324 Waterwell Way', image: 'listing-waterwell.jpg', facts: 'Tracy · 7 bedrooms · 7,004 sq. ft.', description: 'A gated Fair Oaks estate with a palm-lined arrival, a pool and spa, and a six-car garage. A property with room to make an impression.'},
  roger: {name: '1583 Roger Drive', image: 'listing-roger.jpg', facts: 'Tracy · 5 bedrooms · 3,698 sq. ft.', description: 'An Elissagaray Ranch home with a main-level primary suite, a three-car garage, and a backyard with a pool, patio areas, and fruit trees.'},
  shrute: {name: '3242 Shrute Drive', image: 'listing-shrute.jpg', facts: 'Lathrop · 5 bedrooms · 3,682 sq. ft.', description: 'Built in 2022, this Lathrop home brings a contemporary exterior, generous living space, and a lot of approximately 8,459 square feet.'}
};
const dialog = document.querySelector('#property-dialog');
let trigger;
document.querySelectorAll('[data-property]').forEach(button => button.addEventListener('click', () => {
  const p = properties[button.dataset.property]; trigger = button;
  document.querySelector('#dialog-title').textContent = p.name;
  document.querySelector('#dialog-image').src = 'assets/img/' + p.image;
  document.querySelector('#dialog-image').alt = p.name + ' property exterior';
  document.querySelector('#dialog-facts').textContent = p.facts;
  document.querySelector('#dialog-description').textContent = p.description;
  document.querySelector('#property-inquiry').href = 'mailto:superiorservicerealtor@gmail.com?subject=' + encodeURIComponent('I’m interested in ' + p.name);
  dialog.showModal(); document.body.style.overflow = 'hidden';
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if(event.target === dialog) { const rect = dialog.getBoundingClientRect(); if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => {document.body.style.overflow = ''; trigger?.focus();});

const cityNames = {'tracy':'Tracy','mountain-house':'Mountain House','lathrop':'Lathrop','manteca':'Manteca','dublin':'Dublin','livermore':'Livermore'};
document.querySelectorAll('[data-city]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-city]').forEach(item => {item.classList.remove('active');item.setAttribute('aria-pressed','false');});
  button.classList.add('active');button.setAttribute('aria-pressed','true');
  const name = cityNames[button.dataset.city];
  const img = document.querySelector('#city-image'); img.src = 'assets/img/city-' + button.dataset.city + '.jpg'; img.alt = 'A view of ' + name + ', California';
  document.querySelector('#city-caption').textContent = name + ', California';
  document.querySelector('#city-status').textContent = 'Showing ' + name + ', California';
}));

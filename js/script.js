  // Hamburger / Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Active state on scroll – updates BOTH desktop links and mobile menu items
  const sections     = document.querySelectorAll('section[id]');
  const navLinks     = document.querySelectorAll('.nav-links a');
  const mobileItems  = document.querySelectorAll('.mobile-menu-item');

  function setActive(id) {
    // Desktop
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
    // Mobile
    mobileItems.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }

  function onScroll() {
    let current = sections[0].id; // default to first section
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    setActive(current);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load to set initial state

  // Smooth anchor scroll + close menu
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    });
  });

  // Form submit mock
  document.querySelector('.btn-submit').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.contato-form-box input, .contato-form-box textarea');
    let filled = true;
    inputs.forEach(i => { if (!i.value.trim()) filled = false; });
    if (!filled) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    inputs.forEach(i => i.value = '');
  });

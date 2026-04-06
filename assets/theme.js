function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]');
  const mobileMenu = document.getElementById('mobile-menu');
  const cartDrawerButton = document.querySelector('[aria-label="Open cart"]');
  const closeCartButton = document.getElementById('close-cart');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-backdrop');

  // Sticky Navbar logic
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.classList.add('navbar-scrolled');
    } else {
      header.classList.remove('navbar-scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Cart Drawer open/close
  if (cartDrawerButton) {
    cartDrawerButton.addEventListener('click', function() {
      cartDrawer.classList.remove('translate-x-full');
      cartBackdrop.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeCartButton) {
    closeCartButton.addEventListener('click', function() {
      cartDrawer.classList.add('translate-x-full');
      cartBackdrop.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
  }

  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', function() {
      cartDrawer.classList.add('translate-x-full');
      cartBackdrop.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
  }

  // Parallax Hero Effect
  const sattu = document.querySelector('.parallax-sattu');
  const namkin = document.querySelector('.parallax-namkin');

  if (sattu && namkin && window.innerWidth > 1024) {
    document.addEventListener('mousemove', function(e) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const moveX = (e.clientX - cx) * 0.025;
      const moveY = (e.clientY - cy) * 0.025;
      const moveX2 = (e.clientX - cx) * 0.045;
      const moveY2 = (e.clientY - cy) * 0.045;
      
      sattu.style.transform = `translate(${moveX}px, ${moveY}px)`;
      namkin.style.transform = `translate(${moveX2}px, ${moveY2}px) rotate(-18deg)`;
    });
  }

  // Quantity Selectors
  document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
      const input = this.parentNode.querySelector('input');
      const newValue = this.dataset.action === 'plus' ? parseInt(input.value) + 1 : parseInt(input.value) - 1;
      if (newValue >= 1) {
        input.value = newValue;
      }
    });
  });

  // Variant Switching
  document.querySelectorAll('.variant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.id;
      const parent = this.parentNode;
      parent.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const productForm = document.querySelector('#product-form');
      if (productForm) {
        const variantInput = productForm.querySelector('input[name="id"]');
        variantInput.value = id;
      }
    });
  });
});

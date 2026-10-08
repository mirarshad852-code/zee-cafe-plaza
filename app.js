/**
 * ZEE CAFÉ’S PLAZA - Interactive Application Logic
 * Zero Bridge, Raj Bagh, Near Modern Hospital
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===================================================================
  // 1. MENU DATA (Crafted from Document Reference: Pizza, Burger, Biryani, Rolls)
  // ===================================================================
  const MENU_ITEMS = [
    // --- PIZZAS ---
    {
      id: 'p1',
      name: 'Zee Supreme Cheesy Pizza',
      category: 'pizza',
      diet: 'veg',
      price: 349,
      rating: 4.9,
      badge: 'Bestseller',
      desc: 'Signature hand-tossed crust with rich tomato confit, fresh mozzarella cheese pull, golden corn, and bell peppers.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.06 (1).jpeg'
    },
    {
      id: 'p2',
      name: 'Smoky BBQ Chicken Pizza',
      category: 'pizza',
      diet: 'non-veg',
      price: 399,
      rating: 4.9,
      badge: 'Chef Special',
      desc: 'Tender tandoori smoked chicken cubes, caramelized onions, mozzarella melt & house specialty barbecue drizzle.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.06 (1).jpeg'
    },
    {
      id: 'p3',
      name: 'Paneer Tikka Crunch Pizza',
      category: 'pizza',
      diet: 'veg',
      price: 329,
      rating: 4.8,
      badge: 'Popular',
      desc: 'Marinated cottage cheese tikka cubes, crunchy capsicum, red paprika, and authentic Kashmiri spice herbs.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.06 (1).jpeg'
    },
    {
      id: 'p4',
      name: 'Classic Margherita Fresh Basil',
      category: 'pizza',
      diet: 'veg',
      price: 279,
      rating: 4.7,
      badge: '',
      desc: 'Pure Italian style plum tomato sauce, buffalo mozzarella, garden-fresh sweet basil leaves and virgin olive oil.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.06 (1).jpeg'
    },

    // --- BURGERS ---
    {
      id: 'b1',
      name: 'Zee Double Smash Gourmet Burger',
      category: 'burger',
      diet: 'non-veg',
      price: 249,
      rating: 5.0,
      badge: 'Bestseller',
      desc: 'Twin juicy seared patties, double molten cheddar, caramelized onions, gherkins & secret Plaza relish in toasted brioche.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.08.jpeg'
    },
    {
      id: 'b2',
      name: 'Crispy Zinger Chicken Burger',
      category: 'burger',
      diet: 'non-veg',
      price: 219,
      rating: 4.9,
      badge: 'Crispy Hit',
      desc: 'Ultra-crispy golden crumb-fried chicken breast fillet topped with iceberg lettuce and garlic herb mayo.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.08.jpeg'
    },
    {
      id: 'b3',
      name: 'Spicy Paneer Crunch Burger',
      category: 'burger',
      diet: 'veg',
      price: 199,
      rating: 4.8,
      badge: 'Veg Special',
      desc: 'Thick spiced paneer steak crisp-fried to perfection, paired with pickled jalapeños and chipotle sauce.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.08.jpeg'
    },
    {
      id: 'b4',
      name: 'Loaded BBQ Cheese Veg Burger',
      category: 'burger',
      diet: 'veg',
      price: 179,
      rating: 4.7,
      badge: '',
      desc: 'Rich potato, corn & green pea patty stuffed with molten cheese, crisp coleslaw and house smokey BBQ glaze.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.08.jpeg'
    },

    // --- BIRYANI ---
    {
      id: 'br1',
      name: 'Royal Dum Chicken Biryani',
      category: 'biryani',
      diet: 'non-veg',
      price: 289,
      rating: 5.0,
      badge: 'House Specialty',
      desc: 'Aged long-grain Basmati rice layered with succulent chicken cuts, saffron milk, fried onions & slow cooked on dum. Served with raita.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07.jpeg'
    },
    {
      id: 'br2',
      name: 'Mutton Handi Biryani',
      category: 'biryani',
      diet: 'non-veg',
      price: 369,
      rating: 4.9,
      badge: 'Chef Special',
      desc: 'Tender baby mutton pieces marinated in Kashmiri spices, braised in a sealed handi with royal fragrant herbs & dry fruits.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07.jpeg'
    },
    {
      id: 'br3',
      name: 'Shahi Vegetable Paneer Biryani',
      category: 'biryani',
      diet: 'veg',
      price: 239,
      rating: 4.8,
      badge: 'Flavorsome',
      desc: 'Fragrant aromatic dum rice infused with fresh cottage cheese cubes, garden vegetables, caramelized cashews and mint salan.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07.jpeg'
    },

    // --- ROLLS & WRAPS ---
    {
      id: 'r1',
      name: 'Zee Signature Kathi Roll (Chicken)',
      category: 'rolls',
      diet: 'non-veg',
      price: 169,
      rating: 4.9,
      badge: 'Bestseller',
      desc: 'Flaky layered paratha wrapped with juicy char-grilled spiced chicken tikka, sliced onions, lime juice and mint chutney.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07 (1).jpeg'
    },
    {
      id: 'r2',
      name: 'Crispy Chicken Shawarma Wrap',
      category: 'rolls',
      diet: 'non-veg',
      price: 179,
      rating: 4.9,
      badge: 'Popular',
      desc: 'Arabic style shredded spiced chicken, garlic toum sauce, crunchy french fries and pickles in warm pita bread.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07 (1).jpeg'
    },
    {
      id: 'r3',
      name: 'Paneer Tikka Masala Roll',
      category: 'rolls',
      diet: 'veg',
      price: 149,
      rating: 4.7,
      badge: 'Veg Fav',
      desc: 'Warm butter paratha loaded with smoky tandoori paneer bites, capsicum, house masala seasoning and sweet spicy sauce.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07 (1).jpeg'
    },
    {
      id: 'r4',
      name: 'Spicy Egg & Cheese Roll',
      category: 'rolls',
      diet: 'non-veg',
      price: 129,
      rating: 4.7,
      badge: '',
      desc: 'Double egg coated paratha folded with melted cheese, green chilies, cilantro and zesty chaat masala.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07 (1).jpeg'
    },

    // --- SIDES & DRINKS ---
    {
      id: 's1',
      name: 'Peri Peri Crinkle Fries',
      category: 'sides',
      diet: 'veg',
      price: 119,
      rating: 4.8,
      badge: 'Must Try',
      desc: 'Golden crisp crinkle cut potatoes dusted generously with African bird’s eye peri-peri spice blend and cheese dip.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07 (2).jpeg'
    },
    {
      id: 's2',
      name: 'Crispy Chicken Nuggets (6 Pcs)',
      category: 'sides',
      diet: 'non-veg',
      price: 159,
      rating: 4.8,
      badge: '',
      desc: 'Tender chicken nuggets with super-crunchy golden exterior, served alongside garlic dip and spicy ketchup.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07 (2).jpeg'
    },
    {
      id: 's3',
      name: 'Traditional Saffron Kashmiri Kehwa',
      category: 'sides',
      diet: 'veg',
      price: 89,
      rating: 5.0,
      badge: 'Local Classic',
      desc: 'Authentic green tea brewed with pure saffron strands, crushed almonds, cardamom, and cinnamon. Warm & rejuvenating.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07 (2).jpeg'
    },
    {
      id: 's4',
      name: 'Oreo Choco Thickshake',
      category: 'sides',
      diet: 'veg',
      price: 149,
      rating: 4.9,
      badge: 'Sweet Treat',
      desc: 'Rich Oreo chocolate milkshake blended with creamy ice cream, topped with whipped cream, Oreo cookie and chocolate drizzle.',
      image: 'WhatsApp Image 2026-10-07 at 21.40.07 (2).jpeg'
    }
  ];

  // Combos mapped to Cart additions
  const COMBO_DEALS = {
    deal_1: {
      id: 'deal_1',
      name: 'Zee Plaza Mega Feast (Pizza + Burger + Drinks)',
      price: 489,
      image: 'WhatsApp Image 2026-10-07 at 21.40.06 (1).jpeg'
    },
    deal_2: {
      id: 'deal_2',
      name: 'Royal Handi Biryani Box + Raita & Kathi Roll',
      price: 329,
      image: 'WhatsApp Image 2026-10-07 at 21.40.07.jpeg'
    }
  };

  // ===================================================================
  // 2. STATE MANAGEMENT
  // ===================================================================
  let cart = JSON.parse(localStorage.getItem('zee_cafe_cart')) || [];
  let currentCategory = 'all';
  let currentDiet = 'all';
  let searchQuery = '';
  let activeCoupon = null; // e.g. { code: 'ZEE20', rate: 0.20 } or null

  // ===================================================================
  // 3. DOM ELEMENT REFERENCES
  // ===================================================================
  const menuGrid = document.getElementById('menuGrid');
  const emptyMenuState = document.getElementById('emptyMenuState');
  const categoryTabs = document.getElementById('categoryTabs');
  const dietButtons = document.querySelectorAll('.diet-btn');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Cart DOM elements
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartItemsList = document.getElementById('cartItemsList');
  const emptyCartState = document.getElementById('emptyCartState');
  const cartDrawerFooter = document.getElementById('cartDrawerFooter');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const cartTotalHeader = document.getElementById('cartTotalHeader');
  const cartDrawerBadge = document.getElementById('cartDrawerBadge');
  const startOrderingBtn = document.getElementById('startOrderingBtn');

  // Delivery meter
  const meterText = document.getElementById('meterText');
  const meterFill = document.getElementById('meterFill');

  // Coupons
  const couponCodeInput = document.getElementById('couponCodeInput');
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const appliedCouponTag = document.getElementById('appliedCouponTag');
  const appliedCouponName = document.getElementById('appliedCouponName');
  const removeCouponBtn = document.getElementById('removeCouponBtn');

  // Totals
  const billSubtotal = document.getElementById('billSubtotal');
  const billDiscount = document.getElementById('billDiscount');
  const billDiscountRow = document.getElementById('billDiscountRow');
  const billDelivery = document.getElementById('billDelivery');
  const billGrandTotal = document.getElementById('billGrandTotal');

  // Checkout & Modals
  const checkoutWhatsappBtn = document.getElementById('checkoutWhatsappBtn');
  const openDirectCheckoutBtn = document.getElementById('openDirectCheckoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutModal = document.getElementById('closeCheckoutModal');
  const directCheckoutForm = document.getElementById('directCheckoutForm');
  const modalItemCount = document.getElementById('modalItemCount');
  const modalItemsSnippet = document.getElementById('modalItemsSnippet');
  const modalTotalPrice = document.getElementById('modalTotalPrice');

  // Success Modal
  const successModal = document.getElementById('successModal');
  const successCloseBtn = document.getElementById('successCloseBtn');
  const successOrderId = document.getElementById('successOrderId');
  const successDetailsBox = document.getElementById('successDetailsBox');
  const successWhatsAppTrackBtn = document.getElementById('successWhatsAppTrackBtn');

  // Mobile Drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const closeMobileNav = document.getElementById('closeMobileNav');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');

  // Forms
  const reservationForm = document.getElementById('reservationForm');
  const contactInquiryForm = document.getElementById('contactInquiryForm');
  const quickWhatsAppBtn = document.getElementById('quickWhatsAppBtn');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  // ===================================================================
  // 4. TOAST NOTIFICATION UTILITY
  // ===================================================================
  function showToast(message, type = 'success', icon = 'fa-circle-check') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ===================================================================
  // 5. RENDER MENU ITEMS
  // ===================================================================
  function renderMenu() {
    let filtered = MENU_ITEMS.filter(item => {
      // Category filter
      const matchesCat = currentCategory === 'all' || item.category === currentCategory;
      // Diet filter
      const matchesDiet = currentDiet === 'all' || item.diet === currentDiet;
      // Search query
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery) ||
        item.desc.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery);

      return matchesCat && matchesDiet && matchesSearch;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = '';
      emptyMenuState.classList.remove('hidden');
      return;
    }

    emptyMenuState.classList.add('hidden');
    menuGrid.innerHTML = filtered.map(item => `
      <div class="menu-item-card" data-id="${item.id}">
        <div class="menu-item-image-wrap">
          <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
          ${item.badge ? `<span class="menu-badge badge-bestseller"><i class="fa-solid fa-fire"></i> ${item.badge}</span>` : ''}
          <span class="diet-indicator ${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
        </div>
        <div class="menu-item-body">
          <div class="item-rating-row">
            <span class="item-category-label">${item.category}</span>
            <span class="item-rating"><i class="fa-solid fa-star"></i> ${item.rating}</span>
          </div>
          <h3 class="item-title">${item.name}</h3>
          <p class="item-desc">${item.desc}</p>
          <div class="item-footer">
            <span class="item-price">₹${item.price}</span>
            <button class="add-to-cart-btn" data-add-id="${item.id}">
              <i class="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click events to Add buttons
    document.querySelectorAll('[data-add-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-add-id');
        addToCart(id);
      });
    });
  }

  // ===================================================================
  // 6. CART MANAGEMENT
  // ===================================================================
  function addToCart(itemId, customItem = null) {
    let target = customItem;
    if (!target) {
      target = MENU_ITEMS.find(i => i.id === itemId);
    }
    if (!target) return;

    const existingIndex = cart.findIndex(c => c.id === target.id);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({
        id: target.id,
        name: target.name,
        price: target.price,
        image: target.image,
        qty: 1
      });
    }

    saveAndRefreshCart();
    showToast(`Added <strong>${target.name}</strong> to your basket!`, 'success', 'fa-cart-plus');
  }

  function updateItemQty(id, change) {
    const itemIndex = cart.findIndex(c => c.id === id);
    if (itemIndex === -1) return;

    cart[itemIndex].qty += change;
    if (cart[itemIndex].qty <= 0) {
      cart.splice(itemIndex, 1);
    }

    saveAndRefreshCart();
  }

  function removeItem(id) {
    cart = cart.filter(c => c.id !== id);
    saveAndRefreshCart();
    showToast('Item removed from basket', 'info', 'fa-trash');
  }

  function saveAndRefreshCart() {
    localStorage.setItem('zee_cafe_cart', JSON.stringify(cart));
    renderCart();
  }

  function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    let discountAmount = 0;
    if (activeCoupon) {
      if (activeCoupon.code === 'ZEE20') {
        discountAmount = Math.round(subtotal * 0.20);
      } else if (activeCoupon.code === 'WELCOME50') {
        discountAmount = Math.min(subtotal, 50);
      }
    }

    // Delivery charges: Free delivery if subtotal > 499 or promo code ZEROBRIDGE
    let deliveryFee = 40;
    if (subtotal >= 499 || (activeCoupon && activeCoupon.code === 'ZEROBRIDGE')) {
      deliveryFee = 0;
    }

    const grandTotal = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? deliveryFee : 0));

    return {
      subtotal,
      totalQty,
      discountAmount,
      deliveryFee,
      grandTotal
    };
  }

  function renderCart() {
    const totals = calculateCartTotals();

    // Update Header Badges
    cartCountBadge.textContent = totals.totalQty;
    cartTotalHeader.textContent = `₹${totals.grandTotal}`;
    cartDrawerBadge.textContent = `${totals.totalQty} Items`;

    if (cart.length === 0) {
      cartItemsList.innerHTML = '';
      emptyCartState.classList.remove('hidden');
      cartDrawerFooter.classList.add('hidden');
      meterText.innerHTML = `<span>Order delicious food with <strong>Fast Delivery</strong>!</span>`;
      meterFill.style.width = '0%';
      return;
    }

    emptyCartState.classList.add('hidden');
    cartDrawerFooter.classList.remove('hidden');

    // Free delivery progress meter
    if (totals.subtotal >= 499) {
      meterText.innerHTML = `<span>🎉 You unlocked <strong>FREE FAST DELIVERY</strong>!</span>`;
      meterFill.style.width = '100%';
    } else {
      const remaining = 499 - totals.subtotal;
      const progressPercent = Math.min(100, Math.round((totals.subtotal / 499) * 100));
      meterText.innerHTML = `<span>Add <strong>₹${remaining}</strong> more for <strong>FREE DELIVERY</strong>!</span>`;
      meterFill.style.width = `${progressPercent}%`;
    }

    // Cart Items Listing
    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">₹${item.price * item.qty} <span style="font-size:0.75rem; color:#94a3b8; font-weight:400;">(₹${item.price} each)</span></div>
          <div class="cart-item-controls">
            <button class="qty-btn" data-minus="${item.id}" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-count">${item.qty}</span>
            <button class="qty-btn" data-plus="${item.id}" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
        <button class="cart-item-remove" data-remove="${item.id}" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    // Attach qty listener events
    cartItemsList.querySelectorAll('[data-minus]').forEach(btn => {
      btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-minus'), -1));
    });
    cartItemsList.querySelectorAll('[data-plus]').forEach(btn => {
      btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-plus'), 1));
    });
    cartItemsList.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => removeItem(btn.getAttribute('data-remove')));
    });

    // Totals
    billSubtotal.textContent = `₹${totals.subtotal}`;
    if (totals.discountAmount > 0) {
      billDiscountRow.classList.remove('hidden');
      billDiscount.textContent = `-₹${totals.discountAmount}`;
    } else {
      billDiscountRow.classList.add('hidden');
    }
    billDelivery.textContent = totals.deliveryFee === 0 ? 'FREE' : `₹${totals.deliveryFee}`;
    billGrandTotal.textContent = `₹${totals.grandTotal}`;
  }

  // ===================================================================
  // 7. COUPON LOGIC
  // ===================================================================
  applyCouponBtn.addEventListener('click', () => {
    const code = couponCodeInput.value.trim().toUpperCase();
    if (!code) {
      showToast('Please enter a coupon code', 'error', 'fa-triangle-exclamation');
      return;
    }

    if (code === 'ZEE20') {
      activeCoupon = { code: 'ZEE20', desc: '20% Off' };
      appliedCouponName.textContent = 'ZEE20';
      appliedCouponTag.classList.remove('hidden');
      couponCodeInput.value = '';
      saveAndRefreshCart();
      showToast('Coupon ZEE20 applied! 20% discount granted.', 'success', 'fa-tag');
    } else if (code === 'ZEROBRIDGE') {
      activeCoupon = { code: 'ZEROBRIDGE', desc: 'Free Delivery' };
      appliedCouponName.textContent = 'ZEROBRIDGE (Free Delivery)';
      appliedCouponTag.classList.remove('hidden');
      couponCodeInput.value = '';
      saveAndRefreshCart();
      showToast('Free delivery coupon activated!', 'success', 'fa-truck-fast');
    } else {
      showToast('Invalid coupon code. Try ZEE20 for 20% off!', 'error', 'fa-circle-xmark');
    }
  });

  removeCouponBtn.addEventListener('click', () => {
    activeCoupon = null;
    appliedCouponTag.classList.add('hidden');
    saveAndRefreshCart();
    showToast('Coupon removed', 'info', 'fa-circle-info');
  });

  // Hot Deal / Copy coupon triggers
  document.querySelectorAll('.copy-coupon-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const code = e.currentTarget.getAttribute('data-code');
      activeCoupon = { code: code, desc: '20% Off' };
      appliedCouponName.textContent = code;
      appliedCouponTag.classList.remove('hidden');
      saveAndRefreshCart();
      openCart();
      showToast(`Discount Code <strong>${code}</strong> applied automatically!`, 'success', 'fa-tag');
    });
  });

  // Claim Combo Deals Buttons
  document.querySelectorAll('.add-deal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dealId = e.currentTarget.getAttribute('data-deal-id');
      const combo = COMBO_DEALS[dealId];
      if (combo) {
        addToCart(combo.id, combo);
        openCart();
      }
    });
  });

  // ===================================================================
  // 8. CART DRAWER OPEN / CLOSE
  // ===================================================================
  function openCart() {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  openCartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartBackdrop.addEventListener('click', closeCart);
  startOrderingBtn.addEventListener('click', () => {
    closeCart();
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  });

  // ===================================================================
  // 9. FILTER & SEARCH HANDLERS
  // ===================================================================
  categoryTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;

    categoryTabs.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.getAttribute('data-category');
    renderMenu();
  });

  dietButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dietButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDiet = btn.getAttribute('data-diet');
      renderMenu();
    });
  });

  menuSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderMenu();
  });

  globalSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    menuSearchInput.value = searchQuery;
    renderMenu();
    if (searchQuery.length > 0) {
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    }
  });

  resetFiltersBtn.addEventListener('click', () => {
    currentCategory = 'all';
    currentDiet = 'all';
    searchQuery = '';
    menuSearchInput.value = '';
    globalSearchInput.value = '';
    categoryTabs.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    categoryTabs.querySelector('[data-category="all"]').classList.add('active');
    dietButtons.forEach(b => b.classList.remove('active'));
    dietButtons[0].classList.add('active');
    renderMenu();
  });

  // Footer Category Links
  document.querySelectorAll('[data-filter-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-filter-link');
      currentCategory = cat;
      const targetBtn = categoryTabs.querySelector(`[data-category="${cat}"]`);
      if (targetBtn) {
        categoryTabs.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        targetBtn.classList.add('active');
      }
      renderMenu();
    });
  });

  // ===================================================================
  // 10. WHATSAPP & DIRECT CHECKOUT FLOW
  // ===================================================================
  // WhatsApp Instant Checkout
  checkoutWhatsappBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your basket is empty!', 'error', 'fa-triangle-exclamation');
      return;
    }

    const totals = calculateCartTotals();
    const itemsText = cart.map(i => `• ${i.name} (x${i.qty}) - ₹${i.price * i.qty}`).join('%0A');
    
    let msg = `*NEW ORDER - ZEE CAFÉ’S PLAZA (Raj Bagh)*%0A%0A`;
    msg += `*Order Items:*%0A${itemsText}%0A%0A`;
    msg += `*Subtotal:* ₹${totals.subtotal}%0A`;
    if (totals.discountAmount > 0) {
      msg += `*Discount:* -₹${totals.discountAmount} (${activeCoupon ? activeCoupon.code : 'Promo'})%0A`;
    }
    msg += `*Delivery Fee:* ${totals.deliveryFee === 0 ? 'FREE' : '₹' + totals.deliveryFee}%0A`;
    msg += `*Total Amount:* ₹${totals.grandTotal}%0A%0A`;
    msg += `*Delivery Location:* Near Zero Bridge / Raj Bagh, Srinagar%0A`;
    msg += `Please confirm my order and share estimated delivery time!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${msg}`;
    window.open(whatsappUrl, '_blank');
    showToast('Redirecting to WhatsApp to send your order...', 'info', 'fa-brands fa-whatsapp');
  });

  // Direct Checkout Modal Opening
  openDirectCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your basket is empty!', 'error', 'fa-triangle-exclamation');
      return;
    }

    const totals = calculateCartTotals();
    modalItemCount.textContent = totals.totalQty;
    modalTotalPrice.textContent = `₹${totals.grandTotal}`;
    modalItemsSnippet.innerHTML = cart.map(i => `${i.name} × ${i.qty}`).join(', ');

    checkoutModal.classList.add('open');
    closeCart();
  });

  closeCheckoutModal.addEventListener('click', () => {
    checkoutModal.classList.remove('open');
  });

  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
      checkoutModal.classList.remove('open');
    }
  });

  // Direct Checkout Form Submission
  directCheckoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const customerName = document.getElementById('orderCustomerName').value.trim();
    const customerPhone = document.getElementById('orderCustomerPhone').value.trim();
    const orderAddress = document.getElementById('orderAddress').value.trim();
    const orderNotes = document.getElementById('orderNotes').value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const totals = calculateCartTotals();

    // Generate random order id
    const orderId = '#ZEE-' + Math.floor(1000 + Math.random() * 9000);

    // Populate Success Modal
    successOrderId.textContent = orderId;
    successDetailsBox.innerHTML = `
      <p><strong>Customer:</strong> ${customerName} (${customerPhone})</p>
      <p><strong>Delivery Address:</strong> ${orderAddress}</p>
      <p><strong>Total Bill:</strong> ₹${totals.grandTotal} (${paymentMethod})</p>
      <p><strong>Estimated Arrival:</strong> 25 - 30 Minutes (Express Delivery)</p>
      ${orderNotes ? `<p><strong>Instructions:</strong> ${orderNotes}</p>` : ''}
    `;

    // WhatsApp Tracker Link
    successWhatsAppTrackBtn.onclick = () => {
      const trackMsg = `Hello Zee Café’s Plaza! I would like to track my Order ${orderId} placed by ${customerName}.`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(trackMsg)}`, '_blank');
    };

    checkoutModal.classList.remove('open');
    successModal.classList.add('open');

    // Clear cart
    cart = [];
    activeCoupon = null;
    appliedCouponTag.classList.add('hidden');
    saveAndRefreshCart();
    directCheckoutForm.reset();
  });

  successCloseBtn.addEventListener('click', () => {
    successModal.classList.remove('open');
  });

  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      successModal.classList.remove('open');
    }
  });

  // ===================================================================
  // 11. TABLE RESERVATION FORM
  // ===================================================================
  if (reservationForm) {
    // Set minimum date to today
    const resDateInput = document.getElementById('resDate');
    const todayStr = new Date().toISOString().split('T')[0];
    resDateInput.min = todayStr;
    resDateInput.value = todayStr;

    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const guests = document.getElementById('resGuests').value;

      showToast(`🎉 Table for ${guests} confirmed for ${name} at ${time}! We look forward to hosting you at Zero Bridge.`, 'success', 'fa-calendar-check');
      reservationForm.reset();
      resDateInput.value = todayStr;
    });
  }

  // ===================================================================
  // 12. CONTACT INQUIRY & QUICK WHATSAPP
  // ===================================================================
  if (contactInquiryForm) {
    contactInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      showToast(`Thank you, ${name}! Your inquiry has been sent to Zee Café's Plaza. We will contact you shortly.`, 'success', 'fa-paper-plane');
      contactInquiryForm.reset();
    });
  }

  if (quickWhatsAppBtn) {
    quickWhatsAppBtn.addEventListener('click', () => {
      const msg = `Hello Zee Café’s Plaza! I have an inquiry regarding your menu and delivery in Raj Bagh.`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // ===================================================================
  // 13. MOBILE DRAWER NAVIGATION
  // ===================================================================
  function openMobileMenu() {
    mobileNavDrawer.classList.add('open');
    mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNavDrawer.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggle.addEventListener('click', openMobileMenu);
  closeMobileNav.addEventListener('click', closeMobileMenu);
  mobileBackdrop.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // ===================================================================
  // 14. NAVBAR SCROLL EFFECT & ACTIVE STATE
  // ===================================================================
  const mainHeader = document.getElementById('mainHeader');
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.style.background = 'rgba(11, 15, 23, 0.95)';
      mainHeader.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    } else {
      mainHeader.style.background = 'rgba(11, 15, 23, 0.85)';
      mainHeader.style.boxShadow = 'none';
    }

    // ScrollSpy
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentId}`) {
          item.classList.add('active');
        }
      });
    }
  });

  // ===================================================================
  // 15. INITIALIZATION
  // ===================================================================
  renderMenu();
  renderCart();

});

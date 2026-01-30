// ============================================
// Product Data
// ============================================
const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        category: "men",
        subcategory: "shirts",
        price: 29.99,
        originalPrice: 39.99,
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
            "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600"
        ],
        colors: ["white", "black", "blue"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 128,
        badge: "new",
        description: "Premium quality cotton t-shirt with a comfortable fit. Perfect for everyday wear.",
        sku: "TSH-001",
        tags: ["casual", "cotton", "basic"]
    },
    {
        id: 2,
        name: "Floral Summer Dress",
        category: "women",
        subcategory: "dresses",
        price: 59.99,
        originalPrice: 79.99,
        images: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600"
        ],
        colors: ["pink", "blue", "yellow"],
        sizes: ["XS", "S", "M", "L"],
        rating: 4.8,
        reviews: 256,
        badge: "sale",
        description: "Beautiful floral print summer dress. Lightweight and perfect for warm weather.",
        sku: "DRS-001",
        tags: ["summer", "floral", "casual"]
    },
    {
        id: 3,
        name: "Kids Denim Jacket",
        category: "kids",
        subcategory: "jackets",
        price: 45.99,
        originalPrice: null,
        images: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600"
        ],
        colors: ["blue", "black"],
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        rating: 4.3,
        reviews: 89,
        badge: "new",
        description: "Trendy denim jacket for kids. Durable and stylish for everyday adventures.",
        sku: "KJK-001",
        tags: ["denim", "casual", "kids"]
    },
    {
        id: 4,
        name: "Slim Fit Chinos",
        category: "men",
        subcategory: "pants",
        price: 49.99,
        originalPrice: 69.99,
        images: [
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600"
        ],
        colors: ["black", "blue", "green"],
        sizes: ["30", "32", "34", "36"],
        rating: 4.6,
        reviews: 312,
        badge: "hot",
        description: "Comfortable slim fit chinos made from premium stretch cotton.",
        sku: "PNT-001",
        tags: ["formal", "casual", "cotton"]
    },
    {
        id: 5,
        name: "Elegant Blouse",
        category: "women",
        subcategory: "tops",
        price: 39.99,
        originalPrice: null,
        images: [
            "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600",
            "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600"
        ],
        colors: ["white", "pink", "purple"],
        sizes: ["XS", "S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 198,
        badge: null,
        description: "Elegant blouse perfect for office wear or special occasions.",
        sku: "BLS-001",
        tags: ["formal", "elegant", "office"]
    },
    {
        id: 6,
        name: "Boys Casual Shorts",
        category: "kids",
        subcategory: "pants",
        price: 24.99,
        originalPrice: 34.99,
        images: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600"
        ],
        colors: ["blue", "green", "red"],
        sizes: ["4-5Y", "6-7Y", "8-9Y"],
        rating: 4.4,
        reviews: 67,
        badge: "sale",
        description: "Comfortable cotton shorts for active kids. Perfect for summer.",
        sku: "KSH-001",
        tags: ["casual", "summer", "cotton"]
    },
    {
        id: 7,
        name: "Leather Jacket",
        category: "men",
        subcategory: "jackets",
        price: 199.99,
        originalPrice: 249.99,
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
            "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600"
        ],
        colors: ["black", "brown"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 456,
        badge: "hot",
        description: "Premium genuine leather jacket. Classic style that never goes out of fashion.",
        sku: "JKT-001",
        tags: ["leather", "premium", "classic"]
    },
    {
        id: 8,
        name: "Maxi Skirt",
        category: "women",
        subcategory: "skirts",
        price: 44.99,
        originalPrice: null,
        images: [
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600"
        ],
        colors: ["black", "red", "blue"],
        sizes: ["XS", "S", "M", "L"],
        rating: 4.5,
        reviews: 145,
        badge: "new",
        description: "Flowing maxi skirt perfect for any occasion. Comfortable and stylish.",
        sku: "SKT-001",
        tags: ["casual", "elegant", "summer"]
    },
    {
        id: 9,
        name: "Girls Party Dress",
        category: "kids",
        subcategory: "dresses",
        price: 54.99,
        originalPrice: 74.99,
        images: [
            "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600"
        ],
        colors: ["pink", "purple", "white"],
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        rating: 4.8,
        reviews: 234,
        badge: "sale",
        description: "Beautiful party dress for special occasions. Your little one will love it!",
        sku: "KDR-001",
        tags: ["party", "formal", "special"]
    },
    {
        id: 10,
        name: "Casual Polo Shirt",
        category: "men",
        subcategory: "shirts",
        price: 34.99,
        originalPrice: null,
        images: [
            "https://images.unsplash.com/photo-1625910513413-5fc4e5e7f6ea?w=600",
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600"
        ],
        colors: ["white", "black", "blue", "green"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        rating: 4.4,
        reviews: 178,
        badge: null,
        description: "Classic polo shirt for a smart casual look. Breathable cotton fabric.",
        sku: "POL-001",
        tags: ["casual", "smart", "cotton"]
    },
    {
        id: 11,
        name: "High Waist Jeans",
        category: "women",
        subcategory: "pants",
        price: 69.99,
        originalPrice: 89.99,
        images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
            "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600"
        ],
        colors: ["blue", "black"],
        sizes: ["24", "26", "28", "30", "32"],
        rating: 4.7,
        reviews: 389,
        badge: "hot",
        description: "Trendy high waist jeans with a flattering fit. Stretch denim for comfort.",
        sku: "JNS-001",
        tags: ["denim", "trendy", "casual"]
    },
    {
        id: 12,
        name: "Boys School Uniform Set",
        category: "kids",
        subcategory: "sets",
        price: 64.99,
        originalPrice: null,
        images: [
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600"
        ],
        colors: ["white", "blue"],
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
        rating: 4.3,
        reviews: 112,
        badge: null,
        description: "Complete school uniform set. Includes shirt and pants.",
        sku: "KUN-001",
        tags: ["school", "formal", "uniform"]
    }
];

// ============================================
// Global State
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = [...products];
let currentFilters = {
    categories: [],
    sizes: [],
    colors: [],
    minPrice: 0,
    maxPrice: 500,
    rating: null
};

// ============================================
// DOM Elements
// ============================================
const preloader = document.getElementById('preloader');
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const overlay = document.getElementById('overlay');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const closeWishlist = document.getElementById('closeWishlist');
const userBtn = document.getElementById('userBtn');
const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');
const quickViewModal = document.getElementById('quickViewModal');
const closeQuickView = document.getElementById('closeQuickView');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const orderConfirmModal = document.getElementById('orderConfirmModal');
const backToTop = document.getElementById('backToTop');
const filterToggle = document.getElementById('filterToggle');
const filtersSidebar = document.getElementById('filtersSidebar');
const toastContainer = document.getElementById('toastContainer');

// ============================================
// Initialize App
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);

    // Initialize components
    initHeroSlider();
    initTestimonialsSlider();
    initCountdown();
    renderNewArrivals();
    renderShopProducts();
    renderDeals();
    updateCartUI();
    updateWishlistUI();
    initEventListeners();
    initHeroDots();
});

// ============================================
// Event Listeners
// ============================================
function initEventListeners() {
    // Scroll events
    window.addEventListener('scroll', handleScroll);

    // Mobile menu
    mobileMenuBtn?.addEventListener('click', () => toggleMobileMenu(true));
    closeMobileMenu?.addEventListener('click', () => toggleMobileMenu(false));
    
    // Mobile dropdown
    document.querySelectorAll('.mobile-dropdown > a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            item.parentElement.classList.toggle('active');
        });
    });

    // Cart sidebar
    cartBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSidebar(cartSidebar, true);
    });
    closeCart?.addEventListener('click', () => toggleSidebar(cartSidebar, false));

    // Wishlist sidebar
    wishlistBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSidebar(wishlistSidebar, true);
    });
    closeWishlist?.addEventListener('click', () => toggleSidebar(wishlistSidebar, false));

    // Auth modal
    userBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(authModal, true);
    });
    closeAuth?.addEventListener('click', () => toggleModal(authModal, false));
    document.getElementById('mobileLoginBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMobileMenu(false);
        toggleModal(authModal, true);
    });

    // Auth tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab + 'Form').classList.add('active');
        });
    });

    // Quick view modal
    closeQuickView?.addEventListener('click', () => toggleModal(quickViewModal, false));

    // Checkout modal
    document.getElementById('checkoutBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        if (cart.length > 0) {
            toggleSidebar(cartSidebar, false);
            toggleModal(checkoutModal, true);
        } else {
            showToast('Your cart is empty!', 'warning');
        }
    });
    closeCheckout?.addEventListener('click', () => toggleModal(checkoutModal, false));

    // Checkout steps
    document.getElementById('toPaymentBtn')?.addEventListener('click', () => goToCheckoutStep(2));
    document.getElementById('backToShippingBtn')?.addEventListener('click', () => goToCheckoutStep(1));
    document.getElementById('toReviewBtn')?.addEventListener('click', () => {
        updateOrderReview();
        goToCheckoutStep(3);
    });
    document.getElementById('backToPaymentBtn')?.addEventListener('click', () => goToCheckoutStep(2));
    document.getElementById('placeOrderBtn')?.addEventListener('click', placeOrder);

    // Order confirmation
    document.getElementById('continueShopping')?.addEventListener('click', () => {
        toggleModal(orderConfirmModal, false);
        cart = [];
        saveCart();
        updateCartUI();
    });

    // Overlay click
    overlay?.addEventListener('click', closeAllSidebars);

    // Back to top
    backToTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Filter toggle (mobile)
    filterToggle?.addEventListener('click', () => {
        filtersSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Product tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderNewArrivals(tab.dataset.tab);
        });
    });

    // View options
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const grid = document.getElementById('shopProductsGrid');
            if (btn.dataset.view === 'list') {
                grid.classList.add('list-view');
            } else {
                grid.classList.remove('list-view');
            }
        });
    });

    // Sort select
    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });

    // Filters
    document.getElementById('applyFilters')?.addEventListener('click', applyFilters);
    document.getElementById('clearFilters')?.addEventListener('click', clearFilters);

    // Price range
    document.getElementById('priceRange')?.addEventListener('input', (e) => {
        document.getElementById('maxPrice').value = e.target.value;
    });

    // Newsletter form
    document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you for subscribing!', 'success');
        e.target.reset();
    });

    // Contact form
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent successfully!', 'success');
        e.target.reset();
    });

    // Login form
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Login successful!', 'success');
        toggleModal(authModal, false);
    });

    // Register form
    document.getElementById('registerForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Account created successfully!', 'success');
        toggleModal(authModal, false);
    });

    // Password toggle
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            const icon = btn.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    // Search
    document.getElementById('searchBtn')?.addEventListener('click', handleSearch);
    document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterByCategory(category);
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        });
    });

        // Load more
    document.getElementById('loadMoreNew')?.addEventListener('click', () => {
        showToast('Loading more products...', 'info');
        // In a real app, this would load more products from API
    });

    // Coupon apply
    document.getElementById('applyCouponBtn')?.addEventListener('click', () => {
        const coupon = document.getElementById('couponInput').value;
        if (coupon.toLowerCase() === 'save10') {
            showToast('Coupon applied! 10% discount', 'success');
        } else if (coupon) {
            showToast('Invalid coupon code', 'error');
        }
    });

    // Quick view quantity buttons
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('input');
            let value = parseInt(input.value);
            if (btn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (btn.classList.contains('plus')) {
                input.value = value + 1;
            }
        });
    });

    // Close modals on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllSidebars();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Scroll Handler
// ============================================
function handleScroll() {
    const scrollY = window.scrollY;
    
    // Header shadow
    if (scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'var(--shadow)';
    }
    
    // Back to top button
    if (scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

// ============================================
// Hero Slider
// ============================================
let heroSlideIndex = 0;
let heroInterval;

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    
    if (slides.length === 0) return;
    
    prevBtn?.addEventListener('click', () => {
        changeHeroSlide(-1);
        resetHeroInterval();
    });
    
    nextBtn?.addEventListener('click', () => {
        changeHeroSlide(1);
        resetHeroInterval();
    });
    
    // Auto slide
    startHeroInterval();
}

function initHeroDots() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.querySelector('.hero-dots');
    
    if (!dotsContainer || slides.length === 0) return;
    
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToHeroSlide(index);
            resetHeroInterval();
        });
        dotsContainer.appendChild(dot);
    });
}

function changeHeroSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    
    slides[heroSlideIndex].classList.remove('active');
    dots[heroSlideIndex]?.classList.remove('active');
    
    heroSlideIndex += direction;
    
    if (heroSlideIndex >= slides.length) heroSlideIndex = 0;
    if (heroSlideIndex < 0) heroSlideIndex = slides.length - 1;
    
    slides[heroSlideIndex].classList.add('active');
    dots[heroSlideIndex]?.classList.add('active');
}

function goToHeroSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    
    slides[heroSlideIndex].classList.remove('active');
    dots[heroSlideIndex]?.classList.remove('active');
    
    heroSlideIndex = index;
    
    slides[heroSlideIndex].classList.add('active');
    dots[heroSlideIndex]?.classList.add('active');
}

function startHeroInterval() {
    heroInterval = setInterval(() => changeHeroSlide(1), 5000);
}

function resetHeroInterval() {
    clearInterval(heroInterval);
    startHeroInterval();
}

// ============================================
// Testimonials Slider
// ============================================
let testimonialIndex = 0;

function initTestimonialsSlider() {
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    if (!track) return;
    
    prevBtn?.addEventListener('click', () => moveTestimonials(-1));
    nextBtn?.addEventListener('click', () => moveTestimonials(1));
    
    // Auto slide
    setInterval(() => moveTestimonials(1), 6000);
}

function moveTestimonials(direction) {
    const track = document.getElementById('testimonialsTrack');
    const cards = track.querySelectorAll('.testimonial-card');
    
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth + 30; // Including gap
    const maxIndex = Math.max(0, cards.length - getVisibleTestimonials());
    
    testimonialIndex += direction;
    
    if (testimonialIndex > maxIndex) testimonialIndex = 0;
    if (testimonialIndex < 0) testimonialIndex = maxIndex;
    
    track.style.transform = `translateX(-${testimonialIndex * cardWidth}px)`;
}

function getVisibleTestimonials() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

// ============================================
// Countdown Timer
// ============================================
function initCountdown() {
    // Set deal end date (7 days from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    updateCountdown(endDate);
    setInterval(() => updateCountdown(endDate), 1000);
}

function updateCountdown(endDate) {
    const now = new Date();
    const diff = endDate - now;
    
    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ============================================
// Product Rendering
// ============================================
function createProductCard(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const discountPercent = product.originalPrice 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : 0;
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="product-badges">
                    ${product.badge === 'new' ? '<span class="product-badge badge-new">New</span>' : ''}
                    ${product.badge === 'sale' ? '<span class="product-badge badge-sale">-' + discountPercent + '%</span>' : ''}
                    ${product.badge === 'hot' ? '<span class="product-badge badge-hot">Hot</span>' : ''}
                </div>
                <div class="product-actions">
                    <button class="product-action-btn wishlist-btn ${isInWishlist ? 'active' : ''}" 
                            onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="product-action-btn" onclick="openQuickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">
                    <a href="#" onclick="openQuickView(${product.id}); return false;">${product.name}</a>
                </h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => `
                        <span class="product-color" style="background: ${getColorCode(color)}" title="${color}"></span>
                    `).join('')}
                </div>
                <p class="product-description" style="display: none;">${product.description}</p>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `;
}

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function getColorCode(colorName) {
    const colors = {
        black: '#000000',
        white: '#ffffff',
        red: '#e74c3c',
        blue: '#3498db',
        green: '#27ae60',
        yellow: '#f1c40f',
        purple: '#9b59b6',
        pink: '#e91e63',
        brown: '#8d6e63',
        gray: '#95a5a6'
    };
    return colors[colorName] || colorName;
}

function renderNewArrivals(category = 'all') {
    const grid = document.getElementById('newArrivalsGrid');
    if (!grid) return;
    
    let filtered = products;
    if (category !== 'all') {
        filtered = products.filter(p => p.category === category);
    }
    
    // Show only first 8 products
    const displayProducts = filtered.slice(0, 8);
    
    grid.innerHTML = displayProducts.map(product => createProductCard(product)).join('');
}

function renderShopProducts() {
    const grid = document.getElementById('shopProductsGrid');
    if (!grid) return;
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayProducts = filteredProducts.slice(startIndex, endIndex);
    
    grid.innerHTML = displayProducts.map(product => createProductCard(product)).join('');
    
    // Update results count
    document.getElementById('resultsCount').textContent = filteredProducts.length;
    
    // Render pagination
    renderPagination();
}

function renderDeals() {
    const grid = document.getElementById('dealsGrid');
    if (!grid) return;
    
    // Filter products with original price (on sale)
    const dealProducts = products.filter(p => p.originalPrice !== null).slice(0, 4);
    
    grid.innerHTML = dealProducts.map(product => createProductCard(product)).join('');
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Previous button
    html += `<button class="page-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
    </button>`;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<button class="page-btn" disabled>...</button>`;
        }
    }
    
    // Next button
    html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fas fa-chevron-right"></i>
    </button>`;
    
    pagination.innerHTML = html;
}

function goToPage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderShopProducts();
    
    // Scroll to shop section
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// Filtering & Sorting
// ============================================
function applyFilters() {
    // Get selected categories
    currentFilters.categories = [];
    document.querySelectorAll('input[name="category"]:checked').forEach(cb => {
        currentFilters.categories.push(cb.value);
    });
    
    // Get selected sizes
    currentFilters.sizes = [];
    document.querySelectorAll('input[name="size"]:checked').forEach(cb => {
        currentFilters.sizes.push(cb.value);
    });
    
    // Get selected colors
    currentFilters.colors = [];
    document.querySelectorAll('input[name="color"]:checked').forEach(cb => {
        currentFilters.colors.push(cb.value);
    });
    
    // Get price range
    currentFilters.minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    currentFilters.maxPrice = parseFloat(document.getElementById('maxPrice').value) || 500;
    
    // Get rating
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    currentFilters.rating = ratingInput ? parseInt(ratingInput.value) : null;
    
    // Apply filters
    filteredProducts = products.filter(product => {
        // Category filter
        if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(product.category)) {
            return false;
        }
        
        // Size filter
        if (currentFilters.sizes.length > 0) {
            const hasSize = currentFilters.sizes.some(size => product.sizes.includes(size));
            if (!hasSize) return false;
        }
        
        // Color filter
        if (currentFilters.colors.length > 0) {
            const hasColor = currentFilters.colors.some(color => product.colors.includes(color));
            if (!hasColor) return false;
        }
        
        // Price filter
        if (product.price < currentFilters.minPrice || product.price > currentFilters.maxPrice) {
            return false;
        }
        
        // Rating filter
        if (currentFilters.rating && product.rating < currentFilters.rating) {
            return false;
        }
        
        return true;
    });
    
    currentPage = 1;
    renderShopProducts();
    
    // Close filter sidebar on mobile
    if (window.innerWidth <= 992) {
        filtersSidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
    
    showToast(`${filteredProducts.length} products found`, 'info');
}

function clearFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('.filters-sidebar input[type="radio"]').forEach(rb => rb.checked = false);
    
    // Reset price range
    document.getElementById('minPrice').value = 0;
    document.getElementById('maxPrice').value = 500;
    document.getElementById('priceRange').value = 500;
    
    // Reset filters
    currentFilters = {
        categories: [],
        sizes: [],
        colors: [],
        minPrice: 0,
        maxPrice: 500,
        rating: null
    };
    
    filteredProducts = [...products];
    currentPage = 1;
    renderShopProducts();
    
    showToast('Filters cleared', 'info');
}

function filterByCategory(category) {
    clearFilters();
    
    const categoryCheckbox = document.querySelector(`input[name="category"][value="${category}"]`);
    if (categoryCheckbox) {
        categoryCheckbox.checked = true;
        applyFilters();
    }
}

function sortProducts(sortBy) {
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            filteredProducts = [...products].filter(p => {
                // Reapply current filters
                if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(p.category)) return false;
                if (p.price < currentFilters.minPrice || p.price > currentFilters.maxPrice) return false;
                return true;
            });
    }
    
    currentPage = 1;
    renderShopProducts();
}

function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!query) {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }
    
    currentPage = 1;
    renderShopProducts();
    
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    showToast(`${filteredProducts.length} products found for "${query}"`, 'info');
}


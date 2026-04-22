const products = [
    // أحذية رجالية (11 منتج)
    { id: 1, name: "حذاء رياضي برو", price: 250, category: "men", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { id: 2, name: "كلاسيك جلد بني", price: 400, category: "men", img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=400" },
    { id: 3, name: "حذاء جري أسود", price: 300, category: "men", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
    { id: 4, name: "سنيكرز أبيض", price: 220, category: "men", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400" },
    { id: 5, name: "حذاء رسمي اسود", price: 450, category: "men", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
    { id: 6, name: "هاف بوت كاجوال", price: 380, category: "men", img: "https://images.unsplash.com/photo-1520639889410-1df6c7526c88?w=400" },
    { id: 7, name: "حذاء رياضي أزرق", price: 270, category: "men", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400" },
    { id: 8, name: "فلات رجالي مريح", price: 150, category: "men", img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400" },
    { id: 9, name: "حذاء جبلي متين", price: 550, category: "men", img: "https://images.unsplash.com/photo-1541597471942-b924ce99697f?w=400" },
    { id: 10, name: "سنيكرز رياضي رمادي", price: 290, category: "men", img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400" },
    { id: 11, name: "حذاء قماشي خفيف", price: 120, category: "men", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400" },

    // أحذية نسائية (10 منتجات)
    { id: 12, name: "حذاء كعب وردي", price: 350, category: "women", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },
    { id: 13, name: "سنيكرز نسائي مريح", price: 280, category: "women", img: "https://images.unsplash.com/photo-1512374382149-4332c6c021f1?w=400" },
    { id: 14, name: "صندل صيفي", price: 180, category: "women", img: "https://images.unsplash.com/photo-1562273103-91d446733189?w=400" },
    { id: 15, name: "حذاء فلات ذهبي", price: 200, category: "women", img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=400" },
    { id: 16, name: "بوت شتوي طويل", price: 600, category: "women", img: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400" },
    { id: 17, name: "كعب أسود سهرة", price: 420, category: "women", img: "https://images.unsplash.com/photo-1509121405288-31686083394a?w=400" },
    { id: 18, name: "حذاء رياضي تيفاني", price: 310, category: "women", img: "https://images.unsplash.com/photo-1515347645631-04514651fb8e?w=400" },
    { id: 19, name: "سنيكرز ملون عالي", price: 330, category: "women", img: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=400" },
    { id: 20, name: "حذاء باليرينا أحمر", price: 190, category: "women", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400" },
    { id: 21, name: "صندل كاجوال أبيض", price: 240, category: "women", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" }
];

let cart = [];

function startShopping() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('main-store').style.display = 'block';
    displayProducts('all');
}

function displayProducts(cat) {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
    
    filtered.forEach(p => {
        list.innerHTML += `
            <div class="product-card">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p>${p.price} ريال</p>
                <button onclick="addToCart(${p.id})">إضافة للسلة 🛒</button>
            </div>
        `;
    });
}

function filterProducts(cat) { displayProducts(cat); }

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-items-list');
    let total = 0;
    cartList.innerHTML = '';
    cart.forEach(item => {
        cartList.innerHTML += `<p>${item.name} - ${item.price} ريال</p>`;
        total += item.price;
    });
    document.getElementById('total-price').innerText = total;
}

function completeCheckout() {
    const name = document.getElementById('user-name').value;
    const phone = document.getElementById('user-phone').value;
    if(name && phone && cart.length > 0) {
        alert(`شكراً يا ${name}! تم استلام طلبك بنجاح. سنقوم بالتواصل معك على رقم ${phone} لشحن طلبيتك.`);
        cart = [];
        document.getElementById('cart-count').innerText = 0;
        toggleCart();
    } else {
        alert("برجاء إكمال البيانات وإضافة منتجات للسلة أولاً!");
    }
}
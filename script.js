const products = {
    fragrance: [
        {title: "Bleu de Chanel", desc: "بلو دي شانيل - عطر فرنسي أصلي", price: 1250, img: "https://via.placeholder.com/150?text=Bleu+de+Chanel"},
        {title: "Khamrah", desc: "خمرة - عطر لطافة الفاخر", price: 650, img: "https://via.placeholder.com/150?text=Khamrah"}
    ],
    incense: [
        {title: "Vegas Stick", desc: "أعواد البخور الفاخرة - عود السديم", price: 180, img: "https://via.placeholder.com/150?text=Vegas+Stick"},
        {title: "Vegas Cubes", desc: "مكعبات بخور فاخرة", price: 220, img: "https://via.placeholder.com/150?text=Vegas+Cubes"},
        {title: "Vegas Bullet", desc: "بخور عالي التركيز عبق العود", price: 350, img: "https://via.placeholder.com/150?text=Vegas+Bullet"}
    ],
    musk: [
        {title: "Musk Al-Aroosa", desc: "طقم مسك العروسة 3×30 مل", price: 450, img: "https://via.placeholder.com/150?text=Musk+Al-Aroosa"}
    ],
    latifa: [
        {title: "Latifa Collection", desc: "عطر لطافة الفاخر", price: 550, img: "https://via.placeholder.com/150?text=Latifa+Collection"}
    ],
    smart: [
        {title: "Backflow Incense Burner", desc: "المبخرة الذكية التدفق العكسي", price: 800, img: "https://via.placeholder.com/150?text=Backflow+Burner"}
    ]
};

const grid = document.getElementById("products-grid");
const allGrid = document.getElementById("all-products-grid");

function showProducts(section) {
    grid.innerHTML = "";
    products[section].forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image"><img src="${p.img}" alt="${p.title}" style="border-radius:50%; width:100%; height:100%; object-fit:cover;"></div>
            <h3 class="product-title">${p.title}</h3>
            <p class="product-desc">${p.desc}</p>
            <div class="product-price"><span>جنيه</span> ${p.price}</div>
            <button class="btn">عرض المنتج</button>
        `;
        grid.appendChild(card);
    });
}

function showAllProducts() {
    if (!allGrid) return;
    Object.keys(products).forEach(section => {
        products[section].forEach(p => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-image"><img src="${p.img}" alt="${p.title}" style="border-radius:50%; width:100%; height:100%; object-fit:cover;"></div>
                <h3 class="product-title">${p.title}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="product-price"><span>جنيه</span> ${p.price}</div>
                <button class="btn">عرض المنتج</button>
            `;
            allGrid.appendChild(card);
        });
    });
}

// عرض جميع المنتجات عند الدخول على صفحة products.html
showAllProducts();

// التعامل مع أقسام nav
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
        const section = item.getAttribute("data-section");
        showProducts(section);
        window.scrollTo({top: grid.offsetTop, behavior: "smooth"});
    });
});

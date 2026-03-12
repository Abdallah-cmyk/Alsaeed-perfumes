// بيانات الأقسام والمنتجات
const data = {
    bakhoor: [
        {id:"b1", title:"مجموعة أعواد السعيد", desc:"أعواد بخور طويلة الأمد، رائحة شرقية غنية.", price:180, img:"https://via.placeholder.com/150"},
        {id:"b2", title:"مجموعة المكعبات", desc:"مكعبات بخور مضغوطة بتصميم فاخر.", price:200, img:"https://via.placeholder.com/150"},
        {id:"b3", title:"مجموعة طلقة", desc:"بخور عالي التركيز مع عبق العود.", price:250, img:"https://via.placeholder.com/150"},
        {id:"b4", title:"مجموعة الشوكولاتة", desc:"قطع بخور على شكل الشوكولاتة.", price:220, img:"https://via.placeholder.com/150"},
        {id:"b5", title:"أرض النيل", desc:"أعواد بخور مستوحاة من المدن المصرية.", price:300, img:"https://via.placeholder.com/150"},
        {id:"b6", title:"المجموعة الفرعونية", desc:"أعواد بخور بلمسة فرعونية ملكية.", price:350, img:"https://via.placeholder.com/150"}
    ],
    perfumes: [
        {id:"p1", title:"Bleu de Chanel", desc:"عطر فرنسي أصلي", price:1250, img:"https://via.placeholder.com/150"},
        {id:"p2", title:"Khamrah", desc:"عطر لطافة الفاخر", price:650, img:"https://via.placeholder.com/150"}
    ],
    musk: [
        {id:"m1", title:"Musk Al-Aroosa", desc:"طقم مسك العروسة 3×30 مل", price:450, img:"https://via.placeholder.com/150"}
    ],
    burners: [
        {id:"bd1", title:"المبخرة الذكية", desc:"مبخرة التدفق العكسي الحديثة", price:900, img:"https://via.placeholder.com/150"}
    ],
    gifts: [
        {id:"g1", title:"مجموعة معطرات الجسم", desc:"معطرات جسم مستوحاة من أشهر الروائح العالمية", price:350, img:"https://via.placeholder.com/150"}
    ]
};

// عرض المنتجات حسب القسم في index.html
const sectionContainer = document.getElementById("section-container");
if(sectionContainer){
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const section = item.dataset.section;
            sectionContainer.innerHTML = "";
            data[section].forEach(prod => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                    <div class="product-image"><img src="${prod.img}" alt="${prod.title}" style="width:100%; border-radius:50%;"></div>
                    <h3 class="product-title">${prod.title}</h3>
                    <p class="product-desc">${prod.desc}</p>
                    <div class="product-price"><span>جنيه</span> ${prod.price}</div>
                    <a href="product.html?id=${prod.id}" class="btn">عرض المنتج</a>
                `;
                sectionContainer.appendChild(card);
            });
        });
    });
}

// عرض جميع المنتجات في products.html
const allProductsContainer = document.getElementById("all-products");
if(allProductsContainer){
    Object.keys(data).forEach(section=>{
        data[section].forEach(prod=>{
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-image"><img src="${prod.img}" alt="${prod.title}" style="width:100%; border-radius:50%;"></div>
                <h3 class="product-title">${prod.title}</h3>
                <p class="product-desc">${prod.desc}</p>
                <div class="product-price"><span>جنيه</span> ${prod.price}</div>
                <a href="product.html?id=${prod.id}" class="btn">عرض المنتج</a>
            `;
            allProductsContainer.appendChild(card);
        });
    });
}

// صفحة المنتج المنفصلة
const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id');
if(prodId){
    Object.keys(data).some(section=>{
        const prod = data[section].find(p=>p.id===prodId);
        if(prod){
            document.getElementById("product-name").innerText = prod.title;
            document.getElementById("product-title").innerText = prod.title;
            document.getElementById("product-desc").innerText = prod.desc;
            document.getElementById("product-price").querySelector("span").innerText = prod.price;
            document.getElementById("product-image").src = prod.img;
            return true;
        }
        return false;
    });
}
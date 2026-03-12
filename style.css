const productsData = {
    bakhoor: [
        {title:"مجموعة بخور أعواد",desc:"أعواد بخور طويلة الأمد برائحة شرقية",price:"180",image:"https://via.placeholder.com/150"},
        {title:"مجموعة بخور مكعبات",desc:"مكعبات بخور مضغوطة وعصرية",price:"200",image:"https://via.placeholder.com/150"},
        {title:"مجموعة بخور طلقة",desc:"بخور عالي التركيز في عبوات عملية",price:"220",image:"https://via.placeholder.com/150"}
    ],
    perfumes: [
        {title:"Bleu de Chanel",desc:"عطر فرنسي أصلي",price:"1250",image:"https://via.placeholder.com/150"},
        {title:"Khamrah",desc:"عطر لطافة الفاخر",price:"650",image:"https://via.placeholder.com/150"}
    ],
    "body-splash": [
        {title:"212 Sexy",desc:"معطر جسم منعش",price:"250",image:"https://via.placeholder.com/150"},
        {title:"Good Girls",desc:"معطر جسم منعش",price:"230",image:"https://via.placeholder.com/150"}
    ],
    "incense-burners": [
        {title:"المبخرة الذكية",desc:"أسطوانة زجاجية مع قاعدة خشبية",price:"500",image:"https://via.placeholder.com/150"}
    ]
};

// لإظهار المنتجات على products.html
const grid = document.getElementById("products-grid");
if(grid){
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat') || "bakhoor";
    const items = productsData[cat] || [];

    items.forEach(p=>{
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image"><img src="${p.image}" alt="${p.title}" style="width:100%;border-radius:50%;"/></div>
            <h3 class="product-title">${p.title}</h3>
            <p class="product-desc">${p.desc}</p>
            <div class="product-price"><span>جنيه</span> ${p.price}</div>
            <button class="btn">عرض المنتج</button>
        `;
        grid.appendChild(card);
    });
}

// الضغط على الأقسام لإرسال المستخدم للصفحة الصحيحة
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(item=>{
    item.addEventListener("click",()=>{
        const category = item.dataset.category;
        window.location.href = `products.html?cat=${category}`;
    });
});

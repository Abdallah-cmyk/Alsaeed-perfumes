// بيانات المنتجات
const products = [
    {
        id:1, category:"incense", title:"Vegas Stick Collection", desc:"أعواد بخور طويلة الأمد تتميز بروائح شرقية غنية.", price:180, img:"https://via.placeholder.com/150"
    },
    {
        id:2, category:"incense", title:"Vegas Cubes", desc:"مجموعة مكعبات بخور مضغوطة بأفضل الزيوت العطرية.", price:200, img:"https://via.placeholder.com/150"
    },
    {
        id:3, category:"incense", title:"Vegas Bullet Collection", desc:"بخور عالي التركيز في عبوات أنيقة.", price:250, img:"https://via.placeholder.com/150"
    },
    {
        id:4, category:"musk", title:"Musk Al-Aroosa", desc:"طقم مسك العروسة 3×30 مل.", price:450, img:"https://via.placeholder.com/150"
    },
    {
        id:5, category:"perfumes", title:"Bleu de Chanel", desc:"بلو دي شانيل - عطر فرنسي أصلي.", price:1250, img:"https://via.placeholder.com/150"
    },
    {
        id:6, category:"body", title:"Body Splash Collection", desc:"معطرات جسم خفيفة ومنعشة.", price:300, img:"https://via.placeholder.com/150"
    }
];

// عرض المنتجات حسب القسم
function showSection(category){
    const container = document.getElementById("products-container");
    if(!container) return;
    container.innerHTML="";
    const filtered = products.filter(p=>p.category===category);
    filtered.forEach(p=>{
        const card=document.createElement("div");
        card.className="product-card";
        card.innerHTML=`
            <div class="product-image"><img src="${p.img}" alt="${p.title}" width="150"></div>
            <h3 class="product-title">${p.title}</h3>
            <p class="product-desc">${p.desc}</p>
            <div class="product-price"><span>جنيه</span> ${p.price}</div>
            <button class="btn" onclick="window.location='product.html?id=${p.id}'">عرض المنتج</button>
        `;
        container.appendChild(card);
    });
}

// عرض كل المنتجات في products.html
const allContainer = document.getElementById("all-products-container");
if(allContainer){
    products.forEach(p=>{
        const card=document.createElement("div");
        card.className="product-card";
        card.innerHTML=`
            <div class="product-image"><img src="${p.img}" alt="${p.title}" width="150"></div>
            <h3 class="product-title">${p.title}</h3>
            <p class="product-desc">${p.desc}</p>
            <div class="product-price"><span>جنيه</span> ${p.price}</div>
            <button class="btn" onclick="window.location='product.html?id=${p.id}'">عرض المنتج</button>
        `;
        allContainer.appendChild(card);
    });
}

// عرض المنتج المفصل
const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id');
if(prodId){
    const prod = products.find(p=>p.id==prodId);
    if(prod){
        document.getElementById("product-title").innerText = prod.title;
        document.getElementById("product-desc").innerText = prod.desc;
        document.getElementById("product-price").innerHTML = `<span>جنيه</span> ${prod.price}`;
        document.getElementById("product-image").innerHTML = `<img src="${prod.img}" alt="${prod.title}" width="250">`;
    }
}
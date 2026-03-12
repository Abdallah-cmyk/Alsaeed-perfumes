const products = {

bakhoor: [
{ id:"n1", name:"بخور نفرتيتي", price:"250 جنيه", img:"https://via.placeholder.com/200x200.png?text=بخور+نفرتيتي" },
{ id:"n2", name:"بخور كليوباترا", price:"260 جنيه", img:"https://via.placeholder.com/200x200.png?text=بخور+كليوباترا" }
],

perfume: [
{ id:"p1", name:"عطر عود ملكي", price:"450 جنيه", img:"https://via.placeholder.com/200x200.png?text=عطر+عود+ملكي" },
{ id:"p2", name:"عطر مسك فاخر", price:"420 جنيه", img:"https://via.placeholder.com/200x200.png?text=عطر+مسك+فاخر" }
],

incense: [
{ id:"i1", name:"عود السديم", price:"180 جنيه", img:"https://via.placeholder.com/200x200.png?text=عود+السديم" },
{ id:"i2", name:"عود جودي", price:"200 جنيه", img:"https://via.placeholder.com/200x200.png?text=عود+جودي" }
],

body: [
{ id:"b1", name:"معطر 212 Sexy", price:"150 جنيه", img:"https://via.placeholder.com/200x200.png?text=212+Sexy" },
{ id:"b2", name:"معطر Pink Blossom", price:"160 جنيه", img:"https://via.placeholder.com/200x200.png?text=Pink+Blossom" }
]

};

// الضابط الذي يربط القسم مع المنتجات
const params = new URLSearchParams(window.location.search)
const cat = params.get("cat")
const container = document.getElementById("products")

if(products[cat]){
  products[cat].forEach(p=>{
    container.innerHTML+=`
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a class="btn" href="product.html?id=${p.id}">عرض المنتج</a>
      </div>
    `
  })
}

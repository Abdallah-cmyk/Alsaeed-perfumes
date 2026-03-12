* {margin:0;padding:0;box-sizing:border-box;font-family:'Arial',sans-serif;}
body {background: linear-gradient(135deg, #0a0f1e, #1a1f2f);color:#fff;min-height:100vh;padding:20px;}

.header {text-align:center;padding:30px;}
.header h1 {font-size:2.5rem;color:#FFD700;text-shadow:0 0 10px #FFD700;}
.header p {font-size:1.2rem;color:#ccc;margin-top:10px;}

.nav-menu {display:flex;justify-content:center;gap:20px;flex-wrap:wrap;margin-bottom:40px;}
.nav-item {background:rgba(255,255,255,0.05);padding:15px 30px;border-radius:30px;border:1px solid rgba(255,215,0,0.3);color:#FFD700;font-weight:bold;cursor:pointer;transition:0.3s;}
.nav-item:hover {background:#FFD700;color:#0a0f1e;transform:scale(1.05);box-shadow:0 0 20px #FFD700;}

.products-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;max-width:1400px;margin:0 auto;}
.product-card {background:rgba(255,255,255,0.05);backdrop-filter:blur(5px);border-radius:20px;padding:20px;text-align:center;border:1px solid rgba(255,215,0,0.2);transition:0.3s;transform-style:preserve-3d;animation:float 3s ease-in-out infinite;}
.product-card:hover {transform:translateY(-10px) rotateX(5deg);box-shadow:0 20px 40px rgba(255,215,0,0.2);border-color:#FFD700;}

@keyframes float {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}

.product-image {width:150px;height:150px;background:linear-gradient(145deg,#FFD700,#ff9900);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:3rem;color:#0a0f1e;box-shadow:0 10px 30px rgba(255,215,0,0.3);}
.product-title {color:#FFD700;font-size:1.5rem;margin-bottom:10px;}
.product-desc {color:#aaa;margin-bottom:20px;line-height:1.6;}
.product-price {font-size:1.8rem;color:#fff;margin-bottom:20px;}
.product-price span {color:#FFD700;font-weight:bold;}
.btn {background:transparent;border:2px solid #FFD700;color:#FFD700;padding:12px 30px;border-radius:30px;font-weight:bold;cursor:pointer;transition:0.3s;width:100%;font-size:1.1rem;}
.btn:hover {background:#FFD700;color:#0a0f1e;box-shadow:0 0 20px #FFD700;}

.cart {position:fixed;top:20px;left:20px;font-size:1.2rem;font-weight:bold;color:#FFD700;}

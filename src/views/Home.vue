<template>
  <div>
    <!-- Hero Section -->
    <div class="hero d-flex flex-column justify-content-center align-items-center text-center text-white">
      <h1 class="fw-bold display-3 mb-3 animate__animated animate__fadeInDown">Discover Your Style</h1>
      <p class="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
        Trendy outfits, fresh looks, and timeless classics — all in one place.
      </p>
      <button id="buut" class="btn btn-primary btn-lg animate__animated animate__zoomIn animate__delay-2s"
              @click="$router.push('/products')">
        Shop Now
      </button>
    </div>

    <section class="text-center my-5 container">
      <h2 id="ad" class="fw-bold">Most Popular</h2>
      <p class="lead text-muted">Our best-selling items loved by thousands of customers.</p>
    </section>

    <section class="container mb-5">
      <div class="row g-4">
        <div class="col-md-3" v-for="(product, i) in products.slice(0, 4)" :key="'p1-' + i">
          <div class="card h-100 shadow-sm product-card animate__animated animate__fadeInUp">
            <img :src="product.image" class="card-img-top product-img" :alt="product.title">
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.title.substring(0, 20) }}...</h5>
              <p class="card-text text-muted">${{ product.price }}</p>
              <button class="btn btn-primary btn-sm">🛒 Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Most Popular Section (2) -->
    <section class="text-center my-5 container">
      <h2 id="ad" class="fw-bold">Trending Now</h2>
      <p class="lead text-muted">Discover the latest arrivals everyone is talking about.</p>
    </section>

    <section class="container mb-5">
      <div class="row g-4">
        <div class="col-md-3" v-for="(product, i) in products.slice(4, 8)" :key="'p2-' + i">
          <div class="card h-100 shadow-sm product-card animate__animated animate__fadeInUp">
            <img :src="product.image" class="card-img-top product-img" :alt="product.title">
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.title.substring(0, 20) }}...</h5>
              <p class="card-text text-muted">${{ product.price }}</p>
              <button class="btn btn-primary btn-sm">🛒 Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center my-5 container">
      <h2 class="fw-bold">Why Shop With Us?</h2>
      <p class="lead text-muted mb-5">We're not just another store — we're your fashion partner.</p>
      <div class="row g-4">
        <div class="col-md-3" v-for="(feature, i) in features" :key="i">
          <div class="card h-100 shadow-sm border-0 feature-card animate__animated animate__fadeInUp">
            <div class="card-body text-center p-4">
              <div class="icon mb-3">
                <i :class="feature.icon"></i>
              </div>
              <h5 class="fw-bold">{{ feature.title }}</h5>
              <p class="text-muted">{{ feature.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      products: [],
      features: [
        { title: "Premium Quality", text: "Every product is carefully selected to ensure top-notch quality.", icon: "bi bi-star-fill fs-1 text-primary" },
        { title: "Affordable Prices", text: "Trendy fashion doesn't have to break the bank.", icon: "bi bi-cash-coin fs-1 text-success" },
        { title: "Fast Shipping", text: "We deliver your favorite outfits quickly and safely.", icon: "bi bi-truck fs-1 text-info" },
        { title: "Customer Support", text: "Our team is always ready to help you with your questions.", icon: "bi bi-headset fs-1 text-warning" }
      ]
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => this.products = data);
  }
};
</script>

<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  background-image: url('/back.jpg'); /* الصورة من public */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero > * {
  position: relative;
  z-index: 2;
}

.buut{
  border-radius: 10px;
  font-size: medium;
  font-weight: 500;
}
.btn-sm {
  border-radius: 12px;
  padding: 10px 0;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  width: 100%;
}
.btn-sm:hover {
  background-color: #0b5ed7;
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.4);
}

#ad {
  margin-top: 100px;
  font-size: 50px;
  font-family: 'Lucida Sans', sans-serif;
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.product-img {
  height: 250px;
  object-fit: contain;
  padding: 15px;
}

/* Why Shop With Us */
.feature-card {
  transition: transform 0.3s ease, 0.3s ease;
  border-radius: 15px;
  min-height: 250px;
}
.feature-card:hover {
  background: #f8f9fa;
  transform: translateY(-5px);
}
.icon {
  font-size: 40px;
}
</style>

<!-- مكتبة أيقونات Bootstrap Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
<!-- مكتبة الأنيميشن -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

<template>
  <div class="about container my-5">
    <div class="text-center mb-5 fade-in">
      <h1 class="fw-bold display-4">About Us</h1>
      <p class="lead text-muted">
        Welcome to <span class="fw-bold">MyShop</span> — your go-to destination for fashion, style, and lifestyle products.
      </p>
    </div>
    <section class="row align-items-center mb-5 slide-up">
      <div class="col-md-6">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800" 
              alt="Our Story" class="img-fluid rounded shadow-lg" />
      </div>
      <div class="col-md-6">
        <h2 class="fw-bold mb-3">Our Story</h2>
        <p>
          Founded with a passion for bringing the latest trends to everyone, MyShop
          is more than just an online store — it’s a community of fashion lovers.
          We started small, curating unique collections, and grew into a trusted
          place where people discover products that match their personality.
        </p>
        <p>
          Our mission is simple: to make style accessible, affordable, and inspiring.
          Every piece we select tells a story, and we want you to be part of it.
        </p>
      </div>
    </section>
    <section class="text-center mb-5">
      <h2 class="fw-bold mb-4">Why Choose Us?</h2>
      <div class="row g-4">
        <div class="col-md-4 fade-in">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-bag-check display-5 text-primary mb-3"></i>
              <h5 class="fw-bold">Quality Products</h5>
              <p class="text-muted">Every item is handpicked to ensure the best quality and durability.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 fade-in">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-cash-coin display-5 text-success mb-3"></i>
              <h5 class="fw-bold">Affordable Prices</h5>
              <p class="text-muted">We believe great fashion shouldn’t break the bank — style for everyone.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 fade-in">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-truck display-5 text-warning mb-3"></i>
              <h5 class="fw-bold">Fast Delivery</h5>
              <p class="text-muted">Shop today and enjoy quick, reliable delivery to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}
.slide-up {
  opacity: 0;
  transform: translateY(40px);
  animation: slideUp 1.2s ease forwards;
}
@keyframes fadeIn {
  to { opacity: 1; }
}
@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script setup>
    import Navbar from './components/Navbar.vue';
</script>
<template>
  <div>
    <Navbar />
    <router-view />
    <footer class="footer bg-dark text-white pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row">

        <div class="col-md-3 mb-4">
          <h3 class="fw-bold">GochOn</h3>
          <p class="text-white">
            Where fashion meets elegance — discover the latest trends, premium outfits, and timeless styles
          </p>
        </div>

        <div class="col-md-3 mb-4">
          <h5 class="fw-bold">Shop</h5>
          <ul class="list-unstyled">
            <li><a href="/" class="text-white text-decoration-none">Home</a></li>
            <li><a href="/products" class="text-white text-decoration-none">Products</a></li>
            <li><a href="/about" class="text-white text-decoration-none">About</a></li>
            <li><a href="/contact" class="text-white text-decoration-none">Contact</a></li>
          </ul>
        </div>

        <div class="col-md-3 mb-4">
          <h5 class="fw-bold">Customer Service</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-none">FAQ</a></li>
            <li><a href="#" class="text-white text-decoration-none">Shipping</a></li>
            <li><a href="#" class="text-white text-decoration-none">Returns</a></li>
            <li><a href="#" class="text-white text-decoration-none">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-md-3 mb-4">
          <h5 class="fw-bold">Follow Us</h5>
          <div class="d-flex gap-3">
            <a href="#" class="text-white fs-4"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-white fs-4"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-white fs-4"><i class="bi bi-twitter"></i></a>
          </div>
        </div>
      </div>

      <hr class="border-secondary my-4" />

      <div class="text-center text-white">
        © 2025 GochOn. All rights reserved.
      </div>
    </div>
  </footer>
  </div>
</template>
<style>
body { background: #fafafa; }
.footer a:hover {
  color: #ffffff !important;
}
.list-unstyled{
  color: aliceblue;
}
</style>
<script>
export default {
  name: "Footer"
};
</script>


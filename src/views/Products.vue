<script setup>
import { ref, onMounted, watch } from 'vue'
import { useCart } from '../stores/cart'

const cart = useCart()

const loading = ref(false)
const error = ref('')
const products = ref([])
const filtered = ref([])
const search = ref('')

// جلب المنتجات من Fake Store API
onMounted(async () => {
  loading.value = true
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) throw new Error('Failed to fetch')
    const data = await res.json()
    products.value = data
    filtered.value = data
  } catch (e) {
    error.value = 'حدث خطأ أثناء تحميل المنتجات. حاول مجددًا.'
  } finally {
    loading.value = false
  }
})

// فلترة المنتجات عند الكتابة في البحث
watch(search, (val) => {
  const q = val.trim().toLowerCase()
  filtered.value = q
    ? products.value.filter(p => p.title.toLowerCase().includes(q))
    : products.value
})
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-3 text-center fw-bold text-primary">✨ Our Products ✨</h2>

    <!-- شريط بحث -->
    <div class="mb-4">
      <input
        v-model="search"
        type="text"
        class="form-control search-box shadow-sm"
        placeholder="🔍 Search for amazing products..."
      />
      <div class="form-text text-center mt-1 text-muted">
        Discover unique fashion & lifestyle products from our exclusive collection.
      </div>
    </div>

    <!-- حالات التحميل/الخطأ -->
    <div v-if="loading" class="d-flex justify-content-center align-items-center my-4">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
    <div v-else-if="error" class="alert alert-danger text-center">{{ error }}</div>
    <div v-else-if="filtered.length === 0" class="alert alert-warning text-center">No products found.</div>

    <!-- شبكة المنتجات -->
    <transition-group name="fade" tag="div" class="row g-4" appear>
      <div class="col-12 col-sm-6 col-lg-4" v-for="p in filtered" :key="p.id">
        <div class="card h-100 shadow-sm product-card">
          <img
            :src="p.image"
            :alt="p.title"
            class="card-img-top p-3"
            style="object-fit: contain; height: 230px;"
          />
          <div class="card-body d-flex flex-column">
            <h6 class="card-title text-truncate" :title="p.title">{{ p.title }}</h6>
            <p class="mt-auto mb-2 fs-5 text-success fw-bold">{{ p.price.toFixed(2) }} $</p>
            <button
              class="btn btn-primary w-100 add-to-cart-btn"
              @click="cart.addItem(p)"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
/* 🎨 تحسين شريط البحث */
.search-box {
  border-radius: 12px;
  padding: 12px 15px;
  font-size: 16px;
  transition: all 0.3s ease;
}
.search-box:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 8px rgba(13, 110, 253, 0.4);
}

/* ✨ كروت المنتجات */
.product-card {
  border: none;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.product-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

/* 🎭 زر إضافة المنتج */
.add-to-cart-btn {
  border-radius: 12px;
  padding: 10px 0;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
.add-to-cart-btn:hover {
  background-color: #0b5ed7;
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.4);
}

/* 🌟 تأثيرات التحميل */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>

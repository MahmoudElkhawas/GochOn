<script setup>

</script>
<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100 p-2" :class="statusClass">
      <img class="card-img-top" :src="product.image" :alt="product.name">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text mb-1">Price: {{ product.price }} EGP</p>
        <p class="mb-1">
          <span v-if="!product.inStock || product.stock === 0" class="fw-bold">Out of stock</span>
          <span v-else-if="product.stock <= 5" class="fw-bold">>Limited stock ({{ product.stock }})</span>
          <span v-else class="fw-bold">In stock</span>
        </p>
        <p class="card-text" v-text="product.description"></p>
        <button class="btn btn-primary mt-auto"
                @click="$emit('add-to-cart', product)"
                :disabled="!product.inStock || product.stock === 0">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true }
  },
  computed: {
    statusClass() {
      if (!this.product.inStock || this.product.stock === 0) return 'out-of-stock'
      if (this.product.stock <= 5) return 'limited-stock'
      return 'in-stock'
    }
  }
}
</script>

<style scoped>
.out-of-stock { opacity: 0.7; }
.in-stock { border: 1px solid #e6f9ed; }
.limited-stock { border: 1px solid #fff4e6; }
</style>

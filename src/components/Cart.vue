<script setup>

</script>
<template>
  <div>
    <h4>Cart ({{ cart.length }})</h4>
    <div v-if="cart.length === 0" class="text-muted">Cart is empty</div>

    <ul class="list-group" v-else>
      <li v-for="(item, idx) in cart" :key="idx" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <div class="fw-bold">{{ item.name }}</div>
          <small>{{ item.price }} EGP</small>  
        </div>
        <button class="btn btn-sm btn-outline-danger" @click="$emit('remove-from-cart', idx)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: { type: Array, required: true }
  }
}
</script>

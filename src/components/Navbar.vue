<template>
<div class="sticky-top">
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">GochOn</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/products" class="nav-link">Products</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
        </ul>

        <router-link to="/cart" class="btn btn-outline-black">
          Cart <span class="badge bg-black ms-1">{{ count }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</div>  
</template>

<script setup>
import { computed } from 'vue'
import { useCart } from '../stores/cart'

const cart = useCart()
const count = computed(() => cart.totalCount.value)
</script>
<style>
.navbar-brand{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: xx-large !important;
  box-shadow: 100px;
}
.nav-item{
  font-size: larger;
  font-weight: 600;
}
.btn{
  border: none !important;
}
.btn:hover{
  color: black;
}
</style>

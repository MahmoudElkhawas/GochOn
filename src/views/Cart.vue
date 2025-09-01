<script setup>
import { useCart } from '../stores/cart'
const cart = useCart()
</script>

<template>
  <div class="container">
    <h2 class="mb-3">Cart</h2>

    <div v-if="cart.state.items.length === 0" class="alert alert-secondary">
      Your cart is empty.
    </div>

    <div v-else class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>Product</th>
            <th class="text-end">Price</th>
            <th class="text-center">Qty</th>
            <th class="text-end">Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="it in cart.state.items" :key="it.id">
            <td class="d-flex align-items-center">
              <img :src="it.image" :alt="it.title" style="height:48px; width:48px; object-fit:contain" class="me-2">
              <span>{{ it.title }}</span>
            </td>
            <td class="text-end">{{ it.price.toFixed(2) }} $</td>
            <td class="text-center">
              <div class="btn-group">
                <button class="btn btn-sm btn-outline-secondary" @click="cart.decrement(it.id)">-</button>
                <button class="btn btn-sm btn-light" disabled>{{ it.qty }}</button>
                <button class="btn btn-sm btn-outline-secondary" @click="cart.increment(it.id)">+</button>
              </div>
            </td>
            <td class="text-end">{{ (it.price * it.qty).toFixed(2) }} $</td>
            <td class="text-end">
              <button class="btn btn-sm btn-outline-danger" @click="cart.removeItem(it.id)">Remove</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="3" class="text-end">Total</th>
            <th class="text-end">{{ cart.totalPrice.value.toFixed(2) }} $</th>
            <th class="text-end">
              <button class="btn btn-sm btn-outline-dark" @click="cart.clear()">Empty Cart</button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

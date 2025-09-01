import { reactive, computed, watch } from 'vue'

const state = reactive({
  // كل عنصر: { id, title, price, image, qty }
  items: []
})

// تحميل من LocalStorage عند بدء التطبيق
try {
  const saved = JSON.parse(localStorage.getItem('cart') || '[]')
  if (Array.isArray(saved)) state.items.push(...saved)
} catch { /* تجاهل أي خطأ بارس */ }

// حفظ تلقائي عند أي تغيير (بونص)
watch(
  () => state.items,
  (val) => localStorage.setItem('cart', JSON.stringify(val)),
  { deep: true }
)

function addItem(product) {
  const found = state.items.find(i => i.id === product.id)
  if (found) found.qty++
  else state.items.push({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    qty: 1
  })
}

function increment(id) {
  const it = state.items.find(i => i.id === id)
  if (it) it.qty++
}

function decrement(id) {
  const it = state.items.find(i => i.id === id)
  if (!it) return
  if (it.qty > 1) it.qty--
  else removeItem(id)
}

function removeItem(id) {
  const idx = state.items.findIndex(i => i.id === id)
  if (idx !== -1) state.items.splice(idx, 1)
}

function clear() {
  state.items.splice(0, state.items.length)
}

const totalCount = computed(() => state.items.reduce((s, i) => s + i.qty, 0))
const totalPrice = computed(() => state.items.reduce((s, i) => s + i.price * i.qty, 0))

export function useCart() {
  return {
    state,
    addItem,
    increment,
    decrement,
    removeItem,
    clear,
    totalCount,
    totalPrice
  }
}

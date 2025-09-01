<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const success = ref(false)

function validate() {
  errors.name = form.name ? '' : 'Name is required.'
  errors.email = /\S+@\S+\.\S+/.test(form.email) ? '' : 'Valid email is required.'
  errors.message = form.message ? '' : 'Message is required.'
  return !errors.name && !errors.email && !errors.message
}

function submitForm(e) {
  e.preventDefault()
  success.value = false
  if (validate()) {
    success.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  }
}
</script>

<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero d-flex flex-column justify-content-center align-items-center text-center text-white">
      <h1 class="fw-bold display-4">Contact Us</h1>
      <p class="lead">We’d love to hear from you! Let’s stay connected.</p>
    </section>

    <!-- Contact Form Section -->
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow-lg border-0 p-4 fade-in">
            <h2 class="text-center fw-bold mb-4">Get In Touch</h2>
            <p class="text-muted text-center mb-4">
              Have a question, suggestion, or just want to say hi? Fill out the form below 👇
            </p>

            <form @submit="submitForm" novalidate class="row g-3">
              <div class="col-md-6">
                <label class="form-label fw-semibold">Name</label>
                <input v-model="form.name" type="text" class="form-control" :class="{'is-invalid': errors.name}">
                <div class="invalid-feedback">{{ errors.name }}</div>
              </div>

              <div class="col-md-6">
                <label class="form-label fw-semibold">Email</label>
                <input v-model="form.email" type="email" class="form-control" :class="{'is-invalid': errors.email}">
                <div class="invalid-feedback">{{ errors.email }}</div>
              </div>

              <div class="col-12">
                <label class="form-label fw-semibold">Message</label>
                <textarea v-model="form.message" rows="5" class="form-control" :class="{'is-invalid': errors.message}"></textarea>
                <div class="invalid-feedback">{{ errors.message }}</div>
              </div>

              <div class="col-12">
                <button class="btn btn-primary btn-lg w-100">Send Message</button>
              </div>

              <div v-if="success" class="col-12">
                <div class="alert alert-success mt-3 text-center">
                  ✅ Thank you for contacting us! We’ll get back to you shortly.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section like homepage */
.hero {
  height: 40vh;
  width: 100%;
  background-image: url('/back.jpg'); /* استخدم نفس الخلفية بتاعة الموقع */
  background-size: cover;
  background-position: center;
  position: relative;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
.hero > * {
  position: relative;
  z-index: 2;
}

/* Fade-in Animation */
.fade-in {
  opacity: 0;
  animation: fadeIn 1.2s ease forwards;
}
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Form Styling */
.card {
  border-radius: 15px;
}
.btn-primary {
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: 0.3s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
</style>

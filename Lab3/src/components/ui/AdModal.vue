<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Реклама'
  },
  image: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: 'Дякуємо, що переглядаєте нашу рекламу!'
  }
})

const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="modelValue" class="backdrop" @click.self="close">
        <div class="modal">
          <header class="modal-header">
            <h2>{{ title }}</h2>
            <button type="button" class="close-btn" @click="close">×</button>
          </header>
          <section class="modal-body">
            <img v-if="image" :src="image" alt="Ad image" class="modal-image" />
            <p>{{ text }}</p>
          </section>
          <footer class="modal-footer">
            <button type="button" class="primary-btn" @click="close">
              Закрити
            </button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 40;
}

.modal {
  width: min(420px, 90vw);
  background-color: var(--bg-surface);
  border-radius: 12px;
  padding: 14px 16px 16px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.35);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.1rem;
}

.close-btn {
  border: none;
  background: transparent;
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--text-color);
}

.modal-body {
  margin-top: 10px;
  font-size: 0.95rem;
}

.modal-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
}

.modal-footer {
  margin-top: 12px;
  text-align: right;
}

.primary-btn {
  padding: 6px 12px;
  border-radius: 999px;
  border: none;
  background-color: var(--accent-color);
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
}

/* transition для модалки */
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.2s ease;
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>

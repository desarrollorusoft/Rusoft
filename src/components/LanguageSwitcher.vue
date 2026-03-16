<template>
  <div class="lang-switcher" ref="container">
    <button class="lang-btn" @click="toggle" :aria-label="`Language: ${currentLocale.toUpperCase()}`">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      <span class="lang-code">{{ currentLocale.toUpperCase() }}</span>
      <svg class="chevron" :class="{ open: isOpen }" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <transition name="dropdown">
      <div v-if="isOpen" class="lang-dropdown">
        <button
          v-for="locale in locales"
          :key="locale.code"
          class="lang-option"
          :class="{ active: locale.code === currentLocale }"
          @click="select(locale.code)"
        >
          <span class="lang-option-code">{{ locale.code.toUpperCase() }}</span>
          <span class="lang-option-label">{{ locale.label }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { STORAGE_KEY } from '@/i18n'

const locales = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

export default defineComponent({
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n()
    const isOpen = ref(false)
    const container = ref<HTMLElement | null>(null)

    const currentLocale = locale

    function toggle() {
      isOpen.value = !isOpen.value
    }

    function select(code: string) {
      locale.value = code
      localStorage.setItem(STORAGE_KEY, code)
      isOpen.value = false
    }

    function onClickOutside(e: MouseEvent) {
      if (container.value && !container.value.contains(e.target as Node)) {
        isOpen.value = false
      }
    }

    onMounted(() => document.addEventListener('click', onClickOutside))
    onUnmounted(() => document.removeEventListener('click', onClickOutside))

    return { currentLocale, isOpen, locales, container, toggle, select }
  },
})
</script>

<style scoped>
.lang-switcher {
  position: relative;
  display: inline-block;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: 1px solid rgba(5, 44, 89, 0.25);
  border-radius: 8px;
  padding: 5px 10px;
  color: rgb(5, 44, 89);
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.lang-btn:hover {
  background: rgba(5, 44, 89, 0.06);
  border-color: rgba(5, 44, 89, 0.2);
}

.lang-code {
  letter-spacing: 0.5px;
}

.chevron {
  transition: transform 0.2s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 130px;
  background: #0b0f14;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 100;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 9px 14px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  transition: background 0.15s ease;
  text-align: left;
}

.lang-option:hover {
  background: rgba(255, 255, 255, 0.08);
}

.lang-option.active {
  background: rgba(255, 255, 255, 0.1);
  font-weight: 600;
}

.lang-option-code {
  font-weight: 700;
  font-size: 12px;
  min-width: 26px;
  letter-spacing: 0.5px;
}

.lang-option-label {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

/* Transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>

<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <router-link to="/" class="brand" aria-label="Rusoft">
        <img :src="logo" alt="Rusoft" class="logo" />
      </router-link>

      <!-- Menú hamburguesa para móviles -->
      <button
        class="mobile-menu-toggle"
        @click="toggleMobileMenu"
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="Abrir menú"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Menú de navegación -->
      <nav class="nav-menu" :class="{ 'mobile-open': isMobileMenuOpen }">
        <router-link to="/" @click="closeMobileMenu">{{ $t('nav.home') }}</router-link>
        <router-link to="/nosotros" @click="closeMobileMenu">{{ $t('nav.about') }}</router-link>
        <router-link to="/contacto" @click="closeMobileMenu">{{ $t('nav.contact') }}</router-link>
        <router-link to="/cv" @click="closeMobileMenu">{{ $t('nav.careers') }}</router-link>
      </nav>

      <LanguageSwitcher class="lang-switcher-header" />
      <div
        class="mobile-overlay"
        :class="{ 'active': isMobileMenuOpen }"
        @click="closeMobileMenu"
      ></div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default defineComponent({
  name: "AppHeader",
  components: { LanguageSwitcher },
  setup() {
    const isMobileMenuOpen = ref(false);
    const isScrolled = ref(false);

    const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value; };
    const closeMobileMenu  = () => { isMobileMenuOpen.value = false; };

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
      if (isMobileMenuOpen.value) closeMobileMenu();
    };

    const handleResize = () => {
      if (window.innerWidth > 768) closeMobileMenu();
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    });

    return { logo, isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu };
  },
});
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.app-header.scrolled {
  background: rgba(255, 255, 255, 0.55);
  border-bottom-color: rgba(5, 44, 89, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.container {
  max-width: 1540px;
  margin: 0 auto;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;
}

.logo {
  height: 54px;
  width: auto;
  object-fit: contain;
}

/* Hamburguesa */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 100%;
  height: 2.5px;
  background-color: rgb(5, 44, 89);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: center;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5.5px, 5.5px);
}
.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5.5px, -5.5px);
}

/* Navegación */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-menu a {
  position: relative;
  color: rgb(5, 44, 89);
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
  white-space: nowrap;
  opacity: 0.75;
}

/* Underline animado desde el centro */
.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: calc(100% - 24px);
  height: 2px;
  background: var(--brand);
  border-radius: 1px;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-menu a:hover {
  opacity: 1;
  color: rgb(5, 44, 89);
}

.nav-menu a:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-menu a.router-link-exact-active {
  opacity: 1;
  font-weight: 600;
}

.nav-menu a.router-link-exact-active::after {
  transform: translateX(-50%) scaleX(1);
}

/* Overlay móvil */
.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-overlay.active { opacity: 1; }

.lang-switcher-header {
  z-index: 1001;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .container { padding: 8px 20px; }

  .mobile-menu-toggle { display: flex; }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 80px 0 0 0;
    gap: 0;
    transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1000;
    box-shadow: -4px 0 24px rgba(0,0,0,0.12);
  }

  .nav-menu.mobile-open { right: 0; }

  .nav-menu a {
    width: 100%;
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 0;
    border-bottom: 1px solid rgba(5, 44, 89, 0.08);
    opacity: 1;
  }

  .nav-menu a::after { display: none; }

  .nav-menu a:hover { background: rgba(5, 44, 89, 0.05); }

  .mobile-overlay { display: block; }
  .logo { height: 48px; }
}

@media (max-width: 480px) {
  .container { padding: 8px 16px; }

  .nav-menu {
    width: 100%;
    right: -100%;
  }

  .nav-menu a { padding: 18px 20px; font-size: 15px; }
  .logo { height: 44px; }

  .mobile-menu-toggle { width: 28px; height: 28px; }
  .hamburger-line { height: 2px; }
}

@media (max-width: 360px) {
  .container { padding: 6px 12px; }
  .nav-menu a { padding: 16px 16px; font-size: 14px; }
  .logo { height: 40px; }
}
</style>

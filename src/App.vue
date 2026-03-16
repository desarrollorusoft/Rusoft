<template>
  <div>
    <Preloader v-if="isLoading" />
    <div v-if="!isLoading" class="app-content">
      <AppHeader />
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Preloader from "@/components/Preloader.vue";
import { applyRouteMeta } from "@/router";
import "@/assets/styles/base.css";

export default defineComponent({
  name: "App",
  components: { AppHeader, AppFooter, Preloader },
  setup() {
    const store = useStore();
    const { locale } = useI18n();
    const route = useRoute();
    const isLoading = computed(() => store.getters['app/isLoading']);

    onMounted(async () => {
      await store.dispatch('app/initializePreloader');
    });

    // Re-apply SEO meta tags when language changes
    watch(locale, () => {
      if (route.name) applyRouteMeta(route.name as string);
    });

    return { isLoading };
  }
});
</script>

<style>
/* estilos globales en base.css */

.app-content {
  animation: fadeInContent 0.8s ease-in-out;
}

@keyframes fadeInContent {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

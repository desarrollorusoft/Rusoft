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

    watch(locale, () => {
      if (route.name) applyRouteMeta(route.name as string);
    });

    return { isLoading };
  }
});
</script>

<style>
.app-content {
  animation: fadeInContent 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

</style>

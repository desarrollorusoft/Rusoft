<template>
  <main>
    <!-- ========== HERO ========== -->
    <section class="hero">
      <video class="hero__video" :class="{ 'hero__video--fixed': isVideoFixed }" autoplay muted loop playsinline>
        <source src="@/assets/video-fondo3.mp4" type="video/mp4">
      </video>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <span class="hero__badge" :class="{ 'fade-in': true }">Software Factory</span>
        <h1 class="hero__title">{{ hero.headline }}</h1>
        <p class="hero__sub">{{ hero.subheadline }}</p>
        <div class="hero__ctas">
          <router-link to="/contacto" class="btn btn--primary">{{ hero.primary_cta.label }}</router-link>
          <a href="#servicios" class="btn btn--ghost">{{ $t('pages.home.hero.cta_services') }}</a>
        </div>
      </div>
      <div class="hero__scroll">
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- ========== STATS ========== -->
    <section class="stats" ref="statsRef">
      <div class="stats__inner">
        <div class="stats__item" v-for="(stat, i) in stats" :key="i" :class="{ 'slide-up': isStatsVisible }" :style="{ animationDelay: `${i * 0.1}s` }">
          <span class="stats__value">{{ stat.value }}</span>
          <span class="stats__label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- ========== SERVICES (BENTO) ========== -->
    <section id="servicios" class="section">
      <div class="container">
        <div class="section-header">
          <span ref="servicesTitle" class="section-tag">{{ services.title }}</span>
        </div>
        <div class="bento">
          <article
            v-for="(s, index) in services.items"
            :key="s.key"
            class="bento__card"
            :class="{
              'bento__card--hero': s.key === 'ai',
              'slide-up': isServicesVisible
            }"
            :style="{ animationDelay: isServicesVisible ? `${index * 0.04}s` : '0s' }"
          >
            <span v-if="s.key === 'ai'" class="bento__badge">{{ $t('pages.home.ai_section.badge') }}</span>
            <div class="bento__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="getServiceIcon(s.key)"></svg>
            </div>
            <h3 class="bento__title">{{ s.name }}</h3>
            <p class="bento__text">{{ s.summary }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ========== AI SHOWCASE ========== -->
    <section class="section ai">
      <div class="ai__glow"></div>
      <div class="container">
        <div class="section-header">
          <span ref="aiTitle" class="section-tag">{{ $t('pages.home.ai_section.badge') }}</span>
          <h2 class="section-title gradient-text" :class="{ 'slide-up': isAiVisible }">{{ $t('pages.home.ai_section.title') }}</h2>
          <p class="section-sub" :class="{ 'slide-up': isAiVisible }" style="animation-delay: 0.1s">{{ $t('pages.home.ai_section.subtitle') }}</p>
        </div>
        <div class="ai__grid">
          <div v-for="(caseKey, index) in aiCaseKeys" :key="caseKey" class="ai__card" :class="{ 'slide-up': isAiVisible }" :style="{ animationDelay: `${0.15 + index * 0.08}s` }">
            <div class="ai__card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="getAiCaseIcon(caseKey)"></svg>
            </div>
            <h3>{{ $t(`pages.home.ai_section.cases.${caseKey}.title`) }}</h3>
            <p>{{ $t(`pages.home.ai_section.cases.${caseKey}.text`) }}</p>
          </div>
        </div>
        <div class="ai__cta" :class="{ 'slide-up': isAiVisible }" style="animation-delay: 0.5s">
          <router-link to="/contacto" class="btn btn--primary">{{ $t('pages.home.ai_section.cta') }}</router-link>
        </div>
      </div>
    </section>

    <!-- ========== PROCESS ========== -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span ref="processTitle" class="section-tag">{{ $t('pages.home.process.title') }}</span>
          <p class="section-sub" :class="{ 'slide-up': isProcessVisible }">{{ $t('pages.home.process.subtitle') }}</p>
        </div>
        <div class="process">
          <div class="process__timeline" :class="{ 'slide-up': isProcessVisible }">
            <div class="process__line"></div>
            <div v-for="(step, i) in processSteps" :key="i" class="process__step" :class="{ 'slide-up': isProcessVisible }" :style="{ animationDelay: `${0.1 + i * 0.12}s` }">
              <div class="process__dot">
                <span>{{ i + 1 }}</span>
              </div>
              <div class="process__body">
                <h3>{{ step.title }}</h3>
                <p>{{ step.text }}</p>
              </div>
            </div>
          </div>
          <div class="process__visual" :class="{ 'slide-right': isProcessVisible }">
            <img src="@/assets/flujo.png" alt="Flujo de proceso" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========== TECH ========== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span ref="techTitle" class="section-tag">{{ $t('pages.home.tech.title') }}</span>
        </div>
        <div class="tech-grid">
          <div v-for="(tech, index) in technologies" :key="tech.name" class="tech-chip" :class="{ 'slide-up': isTechVisible }" :style="{ animationDelay: isTechVisible ? `${index * 0.03}s` : '0s' }">
            <span class="tech-chip__name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== TESTIMONIALS ========== -->
    <section class="section" ref="testimonialsRef">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ $t('pages.home.testimonials.label') }}</span>
          <h2 class="section-title" :class="{ 'slide-up': isTestimonialsVisible }">{{ $t('pages.home.testimonials.title') }}</h2>
        </div>
        <div class="testimonials">
          <div v-for="(item, i) in testimonials" :key="i" class="testimonial" :class="{ 'slide-up': isTestimonialsVisible }" :style="{ animationDelay: `${0.1 + i * 0.1}s` }">
            <p class="testimonial__quote">"{{ item.quote }}"</p>
            <div class="testimonial__author">
              <div class="testimonial__avatar">{{ item.author.charAt(0) }}</div>
              <div>
                <strong>{{ item.author }}</strong>
                <span>{{ item.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CLIENTS ========== -->
    <section class="section section--alt" ref="clientsSectionRef">
      <div class="container">
        <div class="section-header">
          <span ref="clientsTitle" class="section-tag">{{ $t('pages.home.clients.title') }}</span>
          <h2 class="section-title" :class="{ 'slide-up': isVisible }">{{ $t('pages.home.clients.subtitle') }}</h2>
        </div>

        <div class="clients-grid">
          <article v-for="(client, index) in featuredClients" :key="client.name" class="client-card" :class="{ 'slide-up': isVisible }" :style="{ animationDelay: `${0.1 + index * 0.08}s` }">
            <div class="client-card__logo">
              <img :src="client.logo" :alt="client.name" loading="lazy" />
            </div>
            <div class="client-card__body">
              <h3>{{ client.name }}</h3>
              <ul v-if="client.highlights && client.highlights.length">
                <li v-for="(point, i) in client.highlights" :key="i">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div class="section-header" style="margin-top: 48px">
          <span class="section-tag">{{ $t('pages.home.clients.more_title') }}</span>
        </div>
        <div class="logo-wall">
          <div v-for="(client, index) in otherClients" :key="client.name" class="logo-wall__item" :class="{ 'slide-up': isVisible }" :style="{ animationDelay: `${0.3 + index * 0.05}s` }" :title="client.name">
            <img :src="client.logo" :alt="client.name" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CTA ========== -->
    <section class="cta-section" ref="ctaRef">
      <div class="cta-section__glow"></div>
      <div class="container">
        <span class="section-tag" style="margin-bottom: 16px">{{ $t('pages.home.cta.label') }}</span>
        <h2 class="cta-section__title gradient-text" :class="{ 'slide-up': isCtaVisible }">{{ $t('pages.home.cta.title') }}</h2>
        <p class="cta-section__sub" :class="{ 'slide-up': isCtaVisible }" style="animation-delay: 0.1s">{{ $t('pages.home.cta.subtitle') }}</p>
        <div :class="{ 'slide-up': isCtaVisible }" style="animation-delay: 0.2s">
          <router-link to="/contacto" class="btn btn--primary btn--lg">{{ $t('pages.home.cta.button') }}</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const SERVICE_KEYS = [
  'ai', 'tax', 'invoicing', 'accounts', 'stock',
  'auditing', 'apis', 'migration',
  'consulting', 'bi', 'mobile', 'process_audit',
] as const;

export default defineComponent({
  name: "HomeView",
  setup() {
    const { t, tm } = useI18n();

    const hero = computed(() => ({
      headline: t('pages.home.hero.headline'),
      subheadline: t('pages.home.hero.subheadline'),
      primary_cta: { label: t('pages.home.hero.cta') },
    }));

    const services = computed(() => ({
      title: t('pages.home.services.title'),
      items: SERVICE_KEYS.map(key => ({
        key,
        name: t(`pages.home.services.items.${key}.name`),
        summary: t(`pages.home.services.items.${key}.summary`),
      })),
    }));

    const processSteps = computed(() =>
      tm('pages.home.process.steps') as Array<{ title: string; text: string }>
    );

    const stats = computed(() => {
      const s = tm('pages.home.stats') as any;
      return [
        { value: s.clients.value, label: s.clients.label },
        { value: s.projects.value, label: s.projects.label },
        { value: s.years.value, label: s.years.label },
        { value: s.services.value, label: s.services.label },
      ];
    });

    const testimonials = computed(() =>
      tm('pages.home.testimonials.items') as Array<{ quote: string; author: string; role: string }>
    );

    const aiCaseKeys = ['automation', 'chatbots', 'analytics', 'integration'];

    // Visibility refs
    const isVisible = ref(false);
    const isTechVisible = ref(false);
    const isProcessVisible = ref(false);
    const isServicesVisible = ref(false);
    const isAiVisible = ref(false);
    const isStatsVisible = ref(false);
    const isTestimonialsVisible = ref(false);
    const isCtaVisible = ref(false);
    const isVideoFixed = ref(true);

    // Element refs
    const clientsTitle = ref<HTMLElement | null>(null);
    const techTitle = ref<HTMLElement | null>(null);
    const processTitle = ref<HTMLElement | null>(null);
    const servicesTitle = ref<HTMLElement | null>(null);
    const aiTitle = ref<HTMLElement | null>(null);
    const statsRef = ref<HTMLElement | null>(null);
    const testimonialsRef = ref<HTMLElement | null>(null);
    const ctaRef = ref<HTMLElement | null>(null);

    const getAiCaseIcon = (key: string) => {
      const icons: Record<string, string> = {
        automation: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
        chatbots: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01M12 10h.01M16 10h.01"></path>',
        analytics: '<path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>',
        integration: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1 .34-4.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0-.34-4.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>',
      };
      return icons[key] || '';
    };

    const getServiceIcon = (key: string) => {
      const icons: Record<string, string> = {
        tax: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline>',
        invoicing: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>',
        accounts: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
        stock: '<path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6"></path>',
        auditing: '<path d="M9 12l2 2 4-4"></path><path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path><path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path><path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"></path><path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"></path>',
        ai: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1 .34-4.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0-.34-4.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>',
        apis: '<polyline points="16,18 22,12 16,6"></polyline><polyline points="8,6 2,12 8,18"></polyline>',
        migration: '<path d="M3 3h18v18H3zM12 8v8M8 12h8"></path><path d="M3 3l18 18M21 3L3 21"></path>',
        consulting: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path><circle cx="12" cy="12" r="3"></circle>',
        bi: '<path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path><circle cx="18" cy="6" r="3"></circle>',
        mobile: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
        process_audit: '<path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"></path><rect x="9" y="7" width="6" height="4"></rect><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>',
      };
      return icons[key] || '<circle cx="12" cy="12" r="10"></circle>';
    };

    const technologies = [
      { name: "Java" }, { name: ".NET" }, { name: "PHP" }, { name: "Laravel" },
      { name: "Node.js" }, { name: "MySQL" }, { name: "SQL Server" }, { name: "Vue.js" },
      { name: "JavaScript" }, { name: "TypeScript" }, { name: "Python" }, { name: "PostgreSQL" },
      { name: "Informix" }, { name: "React" }, { name: "Angular" }, { name: "Docker" },
      { name: "AWS" }, { name: "Git" },
    ];

    const clients = computed(() => [
      { key: 'municipalidad', name: "Municipalidad Vicente López", logo: require("@/assets/logos-clientes/logo-municipalidad_vicente-lopez.png"), highlights: tm('pages.home.clients.featured.municipalidad.highlights') as string[] },
      { key: 'enod', name: "Enod", logo: require("@/assets/logos-clientes/logo-enod-web.jpg"), highlights: tm('pages.home.clients.featured.enod.highlights') as string[] },
      { key: 'pastoriza', name: "La Pastoriza", logo: require("@/assets/logos-clientes/logo-la-pastoriza.jpg"), highlights: tm('pages.home.clients.featured.pastoriza.highlights') as string[] },
      { key: 'demarco', name: "Corralón de Marco", logo: require("@/assets/logos-clientes/logo_de-marco-corralon.png"), highlights: tm('pages.home.clients.featured.demarco.highlights') as string[] },
      { key: 'prisports', name: "Pri Sports", logo: require("@/assets/logos-clientes/logo-pri-sports.jpg"), highlights: [] as string[] },
      { key: 'arz', name: "ARZ E HIJOS", logo: require("@/assets/logos-clientes/logo-sanitarios-alvarez.jpg"), highlights: [] as string[] },
      { key: 'demarco_seco', name: "De Marco contrucción en seco", logo: require("@/assets/logos-clientes/logo-kanauf.png"), highlights: [] as string[] },
      { key: 'noria', name: "La Noria", logo: require("@/assets/logos-clientes/logo_la-noria_revistimiento.png"), highlights: [] as string[] },
      { key: 'magimundo', name: "Magimundo", logo: require("@/assets/logos-clientes/logo_magimundo_color.png"), highlights: [] as string[] },
      { key: 'aberturas', name: "Aberturas 3 de Febrero", logo: require("@/assets/logos-clientes/logo_abertura-3-febrero-r8_color.png"), highlights: [] as string[] },
      { key: 'enfoque', name: "Enfoque Pop", logo: require("@/assets/logos-clientes/logo-enfoque-pop.jpg"), highlights: [] as string[] },
      { key: 'herrajes', name: "Herrajes Mitre", logo: require("@/assets/logos-clientes/logo-herrajes-mitre.png"), highlights: [] as string[] },
      { key: 'pintureria', name: "Pinturería San Andrés", logo: require("@/assets/logos-clientes/logo_pintureria-san-andres.png"), highlights: [] as string[] },
    ]);

    const FEATURED_KEYS = ['municipalidad', 'enod', 'pastoriza', 'demarco'];
    const featuredClients = computed(() => clients.value.filter(c => FEATURED_KEYS.includes(c.key)));
    const otherClients = computed(() => clients.value.filter(c => !FEATURED_KEYS.includes(c.key)));

    // Observers
    let observers: IntersectionObserver[] = [];

    const observe = (el: HTMLElement | null, flag: { value: boolean }) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => { if (entries[0].isIntersecting) { flag.value = true; obs.disconnect(); } },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    };

    onMounted(() => {
      observe(servicesTitle.value, isServicesVisible);
      observe(aiTitle.value, isAiVisible);
      observe(processTitle.value, isProcessVisible);
      observe(techTitle.value, isTechVisible);
      observe(clientsTitle.value, isVisible);
      observe(statsRef.value, isStatsVisible);
      observe(testimonialsRef.value, isTestimonialsVisible);
      observe(ctaRef.value, isCtaVisible);
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
      isVideoFixed.value = window.scrollY < 100;
    };

    return {
      hero, services, processSteps, technologies, clients, stats, testimonials,
      featuredClients, otherClients, aiCaseKeys,
      isVisible, isTechVisible, isProcessVisible, isServicesVisible, isAiVisible,
      isStatsVisible, isTestimonialsVisible, isCtaVisible, isVideoFixed,
      clientsTitle, techTitle, processTitle, servicesTitle, aiTitle,
      statsRef, testimonialsRef, ctaRef,
      getServiceIcon, getAiCaseIcon, handleScroll,
    };
  },
});
</script>

<style scoped>
/* =============================================
   ANIMATIONS
   ============================================= */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes lineGrow {
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
}
@keyframes scrollLine {
  0%   { transform: scaleY(0); opacity: 0; }
  30%  { opacity: 1; }
  100% { transform: scaleY(1); opacity: 0; }
}

.slide-up {
  opacity: 0;
  animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.slide-right {
  opacity: 0;
  animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.fade-in {
  animation: fadeIn 1.2s ease forwards;
}

/* =============================================
   UTILITY
   ============================================= */
.gradient-text {
  background: linear-gradient(135deg, #2dd4bf 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.section { padding: 100px 0; position: relative; }
.section--alt { background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%); }

.section-header { text-align: center; margin-bottom: 56px; }
.section-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2dd4bf;
  margin-bottom: 16px;
  position: relative;
}
.section-tag::before,
.section-tag::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40px;
  height: 1px;
  background: rgba(45, 212, 191, 0.3);
}
.section-tag::before { right: calc(100% + 12px); }
.section-tag::after  { left: calc(100% + 12px); }

.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 16px;
  line-height: 1.15;
}
.section-sub {
  color: rgba(255,255,255,0.55);
  max-width: 600px;
  margin: 0 auto;
  font-size: 0.95rem;
  line-height: 1.7;
}

/* =============================================
   HERO
   ============================================= */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.hero__video {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: 1;
}
.hero__video--fixed {
  position: fixed;
  width: 100vw; height: 100vh;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 100%);
  z-index: 2;
}
.hero__content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 780px;
  padding: 0 24px;
  animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}
.hero__badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2dd4bf;
  border: 1px solid rgba(45, 212, 191, 0.3);
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 28px;
  backdrop-filter: blur(8px);
  background: rgba(45, 212, 191, 0.06);
}
.hero__title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 20px;
  line-height: 1.1;
  letter-spacing: -0.03em;
}
.hero__sub {
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: rgba(255,255,255,0.75);
  margin: 0 0 36px;
  line-height: 1.7;
}
.hero__ctas {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
.hero__scroll-line {
  width: 1px;
  height: 48px;
  background: rgba(255,255,255,0.3);
  transform-origin: top;
  animation: scrollLine 2s ease-in-out infinite;
}

/* =============================================
   BUTTONS
   ============================================= */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  border: none;
  font-family: inherit;
}
.btn--primary {
  background: linear-gradient(135deg, #2dd4bf, #14b8a4);
  color: #0b0f14;
  box-shadow: 0 0 20px rgba(45, 212, 191, 0.2);
}
.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(45, 212, 191, 0.35);
}
.btn--ghost {
  background: rgba(255,255,255,0.06);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(4px);
}
.btn--ghost:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}
.btn--lg { padding: 16px 40px; font-size: 0.95rem; }

/* =============================================
   STATS
   ============================================= */
.stats {
  position: relative;
  z-index: 4;
  margin-top: -50px;
  padding: 0 24px;
}
.stats__inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 36px 20px;
}
.stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: 0;
}
.stats__value {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2dd4bf, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stats__label {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.45);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

/* =============================================
   BENTO GRID (SERVICES)
   ============================================= */
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.bento__card {
  position: relative;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 28px 22px;
  opacity: 0;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.bento__card:hover {
  border-color: rgba(45, 212, 191, 0.2);
  box-shadow: 0 0 30px rgba(45, 212, 191, 0.06);
  transform: translateY(-3px);
}
.bento__card--hero {
  grid-column: 1 / -1;
  text-align: center;
  border-color: rgba(45, 212, 191, 0.15);
  background: linear-gradient(135deg, rgba(45,212,191,0.04) 0%, rgba(59,130,246,0.04) 100%);
}
.bento__card--hero:hover {
  border-color: rgba(45, 212, 191, 0.35);
  box-shadow: 0 0 40px rgba(45, 212, 191, 0.1);
}
.bento__badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: linear-gradient(135deg, #2dd4bf, #14b8a4);
  color: #0b0f14;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.bento__icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(45, 212, 191, 0.08);
  border-radius: 11px;
  color: #2dd4bf;
  margin-bottom: 14px;
}
.bento__card--hero .bento__icon { margin: 0 auto 14px; }
.bento__title {
  font-size: 0.92rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 6px;
}
.bento__text {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
  margin: 0;
}

/* =============================================
   AI SHOWCASE
   ============================================= */
.ai { overflow: hidden; }
.ai__glow {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.ai__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
}
.ai__card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 26px 20px;
  text-align: center;
  opacity: 0;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1);
}
.ai__card:hover {
  border-color: rgba(45,212,191,0.25);
  box-shadow: 0 8px 24px rgba(45,212,191,0.08);
  transform: translateY(-3px);
}
.ai__card-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(45,212,191,0.08);
  border-radius: 11px;
  color: #2dd4bf;
  margin: 0 auto 12px;
}
.ai__card h3 {
  font-size: 0.88rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 6px;
}
.ai__card p {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
  margin: 0;
}
.ai__cta {
  text-align: center;
  margin-top: 44px;
  opacity: 0;
}

/* =============================================
   PROCESS
   ============================================= */
.process {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.process__timeline { position: relative; padding-left: 40px; }
.process__line {
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, #2dd4bf, rgba(59,130,246,0.3));
  transform-origin: top;
}
.process__step {
  display: flex;
  gap: 16px;
  margin-bottom: 28px;
  opacity: 0;
}
.process__step:last-child { margin-bottom: 0; }
.process__dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(45,212,191,0.12);
  border: 1px solid rgba(45,212,191,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: -40px;
  z-index: 1;
}
.process__dot span {
  font-size: 11px;
  font-weight: 700;
  color: #2dd4bf;
}
.process__body h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px;
}
.process__body p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
  margin: 0;
}
.process__visual {
  opacity: 0;
}
.process__visual img {
  width: 100%;
  border-radius: 16px;
}

/* =============================================
   TECH CHIPS
   ============================================= */
.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
}
.tech-chip {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
  padding: 10px 22px;
  opacity: 0;
  transition: border-color 0.25s, background 0.25s, transform 0.25s;
}
.tech-chip:hover {
  border-color: rgba(45,212,191,0.3);
  background: rgba(45,212,191,0.06);
  transform: translateY(-2px);
}
.tech-chip__name {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
}
.tech-chip:hover .tech-chip__name { color: #2dd4bf; }

/* =============================================
   TESTIMONIALS
   ============================================= */
.testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.testimonial {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 28px 24px;
  opacity: 0;
  transition: border-color 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1);
}
.testimonial:hover {
  border-color: rgba(255,255,255,0.12);
  transform: translateY(-2px);
}
.testimonial__quote {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  margin: 0 0 20px;
  font-style: italic;
}
.testimonial__author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.testimonial__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2dd4bf, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #0b0f14;
}
.testimonial__author strong {
  display: block;
  font-size: 0.82rem;
  color: #fff;
}
.testimonial__author span {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.4);
}

/* =============================================
   CLIENTS
   ============================================= */
.clients-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.client-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 24px;
  opacity: 0;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1);
}
.client-card:hover {
  border-color: rgba(45,212,191,0.25);
  box-shadow: 0 8px 24px rgba(45,212,191,0.06);
  transform: translateY(-3px);
}
.client-card__logo {
  flex-shrink: 0;
  width: 100px;
  height: 72px;
  background: rgba(255,255,255,0.92);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.client-card__logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.client-card__body h3 {
  font-size: 0.92rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 10px;
}
.client-card__body ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.client-card__body li {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 0.76rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.5;
}
.client-card__body li svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: #2dd4bf;
}

/* Logo Wall */
.logo-wall {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
}
.logo-wall__item {
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 18px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  opacity: 0;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.logo-wall__item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(45,212,191,0.08);
  border-color: rgba(45,212,191,0.25);
}
.logo-wall__item img {
  max-width: 85%;
  max-height: 52px;
  object-fit: contain;
  filter: grayscale(30%) opacity(0.85);
  transition: filter 0.25s;
}
.logo-wall__item:hover img {
  filter: grayscale(0%) opacity(1);
}

/* =============================================
   CTA SECTION
   ============================================= */
.cta-section {
  position: relative;
  padding: 100px 0;
  text-align: center;
  overflow: hidden;
}
.cta-section__glow {
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%);
  pointer-events: none;
}
.cta-section__title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  margin: 0 0 16px;
  opacity: 0;
}
.cta-section__sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.55);
  max-width: 500px;
  margin: 0 auto 32px;
  line-height: 1.7;
  opacity: 0;
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 1024px) {
  .process { grid-template-columns: 1fr; gap: 40px; }
  .process__visual { order: -1; }
  .process__visual img { max-width: 500px; margin: 0 auto; display: block; }
  .ai__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .section { padding: 72px 0; }
  .stats__inner { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .bento { grid-template-columns: repeat(2, 1fr); }
  .bento__card--hero { grid-column: 1 / -1; }
  .testimonials { grid-template-columns: 1fr; }
  .clients-grid { grid-template-columns: 1fr; }
  .logo-wall { grid-template-columns: repeat(3, 1fr); }
  .hero__title { font-size: clamp(1.5rem, 5vw, 2rem); }
  .process__visual img { max-width: 400px; }
}

@media (max-width: 480px) {
  .section { padding: 56px 0; }
  .container { padding: 0 16px; }
  .stats__inner { grid-template-columns: repeat(2, 1fr); padding: 24px 16px; }
  .stats__value { font-size: 1.4rem; }
  .bento { grid-template-columns: 1fr; gap: 10px; }
  .bento__card { padding: 20px 16px; }
  .ai__grid { grid-template-columns: 1fr; }
  .tech-grid { gap: 8px; }
  .tech-chip { padding: 8px 16px; }
  .logo-wall { grid-template-columns: repeat(2, 1fr); }
  .hero__ctas { flex-direction: column; align-items: center; }
  .btn { width: 100%; max-width: 280px; justify-content: center; }
  .client-card { flex-direction: column; align-items: center; text-align: center; }
  .client-card__logo { width: 80px; height: 60px; }
  .process__visual img { max-width: 300px; }
  .section-tag::before, .section-tag::after { width: 24px; }
}
</style>

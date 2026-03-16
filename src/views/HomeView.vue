<template>
  <main>
    <section class="hero-section">
      <video class="hero-video" :class="{ 'video-fixed': isVideoFixed }" autoplay muted loop playsinline>
        <source src="@/assets/video-fondo3.mp4" type="video/mp4">
      </video>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">{{ hero.headline }}</h1>
          <p class="hero-subtitle">{{ hero.subheadline }}</p>
          <div class="hero-buttons">
            <router-link to="/contacto" class="button-secondary hero-btn">{{
              hero.primary_cta.label
            }}</router-link>
            <a href="#servicios" class="button-secondary hero-btn">{{ $t('pages.home.hero.cta_services') }}</a>
          </div>
        </div>
      </div>
      <div class="hero-overlay"></div>
      <!-- Scroll indicator -->
      <div class="hero-scroll-indicator">
        <span></span>
      </div>
    </section>


    <!-- Nuestro Proceso -->
    <section id="proceso" class="process-section">
      <div class="process-container">
        <div class="process-grid">
          <div class="process-content" :class="{ 'animate-left': isProcessVisible }">
            <div class="clients-wall-header" style="margin: 0 0 12px;">
              <div class="clients-wall-line"></div>
              <span ref="processTitle" class="clients-wall-label">{{ $t('pages.home.process.title') }}</span>
              <div class="clients-wall-line"></div>
            </div>
            <p class="process-subtitle">{{ $t('pages.home.process.subtitle') }}</p>

            <ol class="process-steps-list">
              <li v-for="(step, i) in processSteps" :key="i" class="process-step-item">
                <span class="process-step-number">{{ i + 1 }}</span>
                <div class="process-step-content">
                  <h3 class="process-step-title">{{ step.title }}</h3>
                  <p class="process-step-text">{{ step.text }}</p>
                </div>
              </li>
            </ol>
          </div>
          
          <!-- SVG del flujo de proceso -->
          <div class="process-visual" :class="{ 'animate-right': isProcessVisible }" :style="{ transitionDelay: isProcessVisible ? '0.3s' : '0s' }">
            <svg viewBox="0 0 520 500" xmlns="http://www.w3.org/2000/svg" class="process-svg">
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000" flood-opacity="0.08"/>
                </filter>
              </defs>
              <rect x="0" y="0" width="520" height="500" rx="28" fill="#ffffff" />
              <g stroke="#052c59" stroke-opacity=".2" stroke-width="2" fill="none">
                <path d="M40 70 H480"/>
                <path d="M40 140 H200 V220 H480"/>
                <path d="M40 210 H170 V300 H480"/>
                <path d="M40 280 H220 V380 H480"/>
                <circle cx="140" cy="70" r="3" fill="#052c59"/>
                <circle cx="360" cy="140" r="3" fill="#052c59"/>
                <circle cx="430" cy="220" r="3" fill="#052c59"/>
                <circle cx="260" cy="300" r="3" fill="#052c59"/>
                <circle cx="140" cy="380" r="3" fill="#052c59"/>
              </g>
              <!-- Bloques del flujo -->
              <g filter="url(#shadow)">
                <g transform="translate(70,60)">
                  <rect width="140" height="70" rx="16" fill="#ffffff" stroke="#0c2a45"/>
                  <text x="70" y="40" text-anchor="middle" font-family="Inter,ui-sans-serif" font-size="14" fill="#0c2a45">{{ $t('pages.home.process.svg.discovery') }}</text>
                </g>
                <g transform="translate(220,140)">
                  <rect width="140" height="70" rx="16" fill="#ffffff" stroke="#0c2a45"/>
                  <text x="70" y="40" text-anchor="middle" font-family="Inter,ui-sans-serif" font-size="14" fill="#0c2a45">{{ $t('pages.home.process.svg.design') }}</text>
                </g>
                <g transform="translate(370,220)">
                  <rect width="140" height="70" rx="16" fill="#ffffff" stroke="#0c2a45"/>
                  <text x="70" y="40" text-anchor="middle" font-family="Inter,ui-sans-serif" font-size="14" fill="#0c2a45">{{ $t('pages.home.process.svg.development') }}</text>
                </g>
                <g transform="translate(220,300)">
                  <rect width="140" height="70" rx="16" fill="#ffffff" stroke="#0c2a45"/>
                  <text x="70" y="40" text-anchor="middle" font-family="Inter,ui-sans-serif" font-size="14" fill="#0c2a45">{{ $t('pages.home.process.svg.testing') }}</text>
                </g>
                <g transform="translate(70,380)">
                  <rect width="140" height="70" rx="16" fill="#ffffff" stroke="#0c2a45"/>
                  <text x="70" y="40" text-anchor="middle" font-family="Inter,ui-sans-serif" font-size="14" fill="#0c2a45">{{ $t('pages.home.process.svg.delivery') }}</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section id="servicios" class="section bg-alt servicios-clave-bg">
      <div class="container">
        <div class="clients-wall-header" style="margin: 0 0 40px;">
          <div class="clients-wall-line"></div>
          <span ref="servicesTitle" class="clients-wall-label">{{ services.title }}</span>
          <div class="clients-wall-line"></div>
        </div>
        <div
          class="grid services-grid"
          style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-top: 16px;
          "
        >
          <article 
            v-for="(s, index) in services.items" 
            :key="s.name" 
            class="card service-card"
            :class="{ 
              'animate-service': isServicesVisible 
            }"
            :style="{ animationDelay: isServicesVisible ? `${index * 0.05}s` : '0s' }"
          >
            <div class="service-icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                v-html="getServiceIcon(s.key)"
              ></svg>
            </div>
            <h3 style="margin-top: 0">{{ s.name }}</h3>
            <p style="opacity: 0.9">{{ s.summary }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Sección de Tecnologías -->
    <section class="section bg-tech">
      <div class="container">
        <div class="clients-wall-header clients-wall-header--light" style="margin: 0 0 40px;">
          <div class="clients-wall-line clients-wall-line--light"></div>
          <span ref="techTitle" class="clients-wall-label clients-wall-label--light">{{ $t('pages.home.tech.title') }}</span>
          <div class="clients-wall-line clients-wall-line--light"></div>
        </div>
        <div class="tech-grid">
          <div 
            v-for="(tech, index) in technologies" 
            :key="tech.name"
            class="tech-item"
            :class="{ 
              'animate-tech-left': index % 2 === 0 && isTechVisible, 
              'animate-tech-right': index % 2 === 1 && isTechVisible 
            }"
            :style="{ animationDelay: isTechVisible ? `${index * 0.05}s` : '0s' }"
          >
            <div class="tech-icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                v-html="tech.icon"
              ></svg>
            </div>
            <p class="tech-name">{{ tech.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section clientes-bg">
      <div class="container">

        <!-- Header -->
        <div class="clients-wall-header" style="margin: 0 0 32px;">
          <div class="clients-wall-line"></div>
          <span ref="clientsTitle" class="clients-wall-label">{{ $t('pages.home.clients.title') }}</span>
          <div class="clients-wall-line"></div>
        </div>
        <h2 class="clients-title">{{ $t('pages.home.clients.subtitle') }}</h2>

        <!-- Cards destacadas -->
        <div class="clients-featured-grid">
          <article
            v-for="(client, index) in featuredClients"
            :key="client.name"
            class="client-card"
            :class="{ 'client-card--visible': isVisible }"
            :style="{ transitionDelay: isVisible ? `${index * 0.08}s` : '0s' }"
          >
            <div class="client-card__logo-wrap">
              <img :src="client.logo" :alt="client.name" loading="lazy" />
            </div>
            <div class="client-card__body">
              <h3 class="client-card__name">{{ client.name }}</h3>
              <ul class="client-card__list" v-if="client.highlights && client.highlights.length">
                <li v-for="(point, i) in client.highlights" :key="i" class="client-card__item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>

        <!-- Logo wall -->
        <div class="clients-wall-header">
          <div class="clients-wall-line"></div>
          <span class="clients-wall-label">{{ $t('pages.home.clients.more_title') }}</span>
          <div class="clients-wall-line"></div>
        </div>
        <div class="clients-logo-wall">
          <div
            v-for="(client, index) in otherClients"
            :key="client.name"
            class="logo-tile"
            :class="{ 'logo-tile--visible': isVisible }"
            :style="{ transitionDelay: isVisible ? `${(index + featuredClients.length) * 0.06}s` : '0s' }"
            :title="client.name"
          >
            <img :src="client.logo" :alt="client.name" loading="lazy" />
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const SERVICE_KEYS = [
  'tax', 'invoicing', 'accounts', 'stock',
  'auditing', 'ai', 'apis', 'migration',
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
    const isVisible = ref(false);
    const isTechVisible = ref(false);
    const isProcessVisible = ref(false);
    const isServicesVisible = ref(false);
    const isVideoFixed = ref(true);
    const clientsTitle = ref<HTMLElement | null>(null);
    const techTitle = ref<HTMLElement | null>(null);
    const processTitle = ref<HTMLElement | null>(null);
    const servicesTitle = ref<HTMLElement | null>(null);


    // Función para obtener el icono de cada servicio (por clave)
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
      return icons[key] || '<circle cx="12" cy="12" r="10"></circle><path d="M12 16V8M8 12h8"></path>';
    };

    const technologies = [
      {
        name: "Java",
        icon: '<path d="M12 2l6 4v12l-6 4-6-4V6l6-4z"></path><path d="M12 6l-4 2.5v7l4 2.5 4-2.5v-7L12 6z"></path>'
      },
      {
        name: ".NET",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "PHP",
        icon: '<path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path><path d="M10 9h4"></path><path d="M10 15h4"></path>'
      },
      {
        name: "Laravel",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M12 7l-4 2.5v5l4 2.5 4-2.5v-5L12 7z"></path>'
      },
      {
        name: "Node.js",
        icon: '<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path d="M12 6.5V17.5M12 6.5L8 10.5M12 6.5L16 10.5"></path>'
      },
      {
        name: "MySQL",
        icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>'
      },
      {
        name: "SQL Server",
        icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>'
      },
      {
        name: "Vue.js",
        icon: '<path d="M12 22l-10-17h20l-10 17zM2.83 5.42L12 20.25l9.17-14.83H2.83z"></path><path d="M12 2l-7 12h14zM12 4l-5.5 9h11z"></path>'
      },
      {
        name: "JavaScript",
        icon: '<circle cx="12" cy="12" r="10"></circle><path d="M12 16V8M8 12h8"></path>'
      },
      {
        name: "TypeScript",
        icon: '<path d="M12 2l6 4v12l-6 4-6-4V6l6-4z"></path><path d="M12 6l-4 2.5v7l4 2.5 4-2.5v-7L12 6z"></path>'
      },
      {
        name: "Python",
        icon: '<path d="M12 2l-7 5v10l7 5 7-5V7l-7-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "PostgreSQL",
        icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>'
      },
      {
        name: "Informix",
        icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>'
      },
      {
        name: "React",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "Angular",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "Docker",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "AWS",
        icon: '<path d="M12 2l-7 5v10l7 5 7-5V7l-7-5z"></path><path d="M8 12h8M12 8v8"></path>'
      },
      {
        name: "Git",
        icon: '<path d="M12 2l-8 5v10l8 5 8-5V7l-8-5z"></path><path d="M8 12h8M12 8v8"></path>'
      }
    ];

    const clients = computed(() => [
      {
        key: 'municipalidad',
        name: "Municipalidad Vicente López",
        logo: require("@/assets/logos-clientes/logo-municipalidad_vicente-lopez.png"),
        highlights: tm('pages.home.clients.featured.municipalidad.highlights') as string[],
      },
      {
        key: 'enod',
        name: "Enod",
        logo: require("@/assets/logos-clientes/logo-enod-web.jpg"),
        highlights: tm('pages.home.clients.featured.enod.highlights') as string[],
      },
      {
        key: 'pastoriza',
        name: "La Pastoriza",
        logo: require("@/assets/logos-clientes/logo-la-pastoriza.jpg"),
        highlights: tm('pages.home.clients.featured.pastoriza.highlights') as string[],
      },
      {
        key: 'demarco',
        name: "Corralón de Marco",
        logo: require("@/assets/logos-clientes/logo_de-marco-corralon.png"),
        highlights: tm('pages.home.clients.featured.demarco.highlights') as string[],
      },
      {
        key: 'prisports',
        name: "Pri Sports",
        logo: require("@/assets/logos-clientes/logo-pri-sports.jpg"),
        highlights: [] as string[],
      },
      {
        key: 'arz',
        name: "ARZ E HIJOS",
        logo: require("@/assets/logos-clientes/logo-sanitarios-alvarez.jpg"),
        highlights: [] as string[],
      },
      {
        key: 'demarco_seco',
        name: "De Marco contrucción en seco",
        logo: require("@/assets/logos-clientes/logo-kanauf.png"),
        highlights: [] as string[],
      },
      {
        key: 'noria',
        name: "La Noria",
        logo: require("@/assets/logos-clientes/logo_la-noria_revistimiento.png"),
        highlights: [] as string[],
      },
      {
        key: 'magimundo',
        name: "Magimundo",
        logo: require("@/assets/logos-clientes/logo_magimundo_color.png"),
        highlights: [] as string[],
      },
      {
        key: 'aberturas',
        name: "Aberturas 3 de Febrero",
        logo: require("@/assets/logos-clientes/logo_abertura-3-febrero-r8_color.png"),
        highlights: [] as string[],
      },
      {
        key: 'enfoque',
        name: "Enfoque Pop",
        logo: require("@/assets/logos-clientes/logo-enfoque-pop.jpg"),
        highlights: [] as string[],
      },
      {
        key: 'herrajes',
        name: "Herrajes Mitre",
        logo: require("@/assets/logos-clientes/logo-herrajes-mitre.png"),
        highlights: [] as string[],
      },
      {
        key: 'pintureria',
        name: "Pinturería San Andrés",
        logo: require("@/assets/logos-clientes/logo_pintureria-san-andres.png"),
        highlights: [] as string[],
      },
    ]);

    const FEATURED_KEYS = ['municipalidad', 'enod', 'pastoriza', 'demarco'];

    const featuredClients = computed(() =>
      clients.value.filter(c => FEATURED_KEYS.includes(c.key))
    );
    const otherClients = computed(() =>
      clients.value.filter(c => !FEATURED_KEYS.includes(c.key))
    );

    

    // Intersection Observer para activar animaciones cuando las secciones sean visibles
    let clientsObserver: IntersectionObserver | null = null;
    let techObserver: IntersectionObserver | null = null;
    let processObserver: IntersectionObserver | null = null;
    let servicesObserver: IntersectionObserver | null = null;

    onMounted(() => {
      // Observer para la sección de proceso
      if (processTitle.value) {
        processObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isProcessVisible.value = true;
                if (processObserver) processObserver.disconnect();
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px 0px 0px'
          }
        );
        processObserver.observe(processTitle.value);
      }

      // Observer para la sección de servicios
      if (servicesTitle.value) {
        servicesObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isServicesVisible.value = true;
                // Una vez que se activa, desconectamos el observer
                if (servicesObserver) {
                  servicesObserver.disconnect();
                }
              }
            });
          },
          {
            threshold: 0.1, // Se activa cuando el 10% del título es visible
            rootMargin: '0px 0px 0px 0px' // Se activa ni bien aparece el título
          }
        );
        
        servicesObserver.observe(servicesTitle.value);
      }

      // Observer para la sección de clientes
      if (clientsTitle.value) {
        clientsObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isVisible.value = true;
                // Una vez que se activa, desconectamos el observer
                if (clientsObserver) {
                  clientsObserver.disconnect();
                }
              }
            });
          },
          {
            threshold: 0.1, // Se activa cuando el 10% del título es visible
            rootMargin: '0px 0px 0px 0px' // Se activa ni bien aparece el título
          }
        );
        
        clientsObserver.observe(clientsTitle.value);
      }

      // Observer para la sección de tecnologías
      if (techTitle.value) {
        techObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isTechVisible.value = true;
                // Una vez que se activa, desconectamos el observer
                if (techObserver) {
                  techObserver.disconnect();
                }
              }
            });
          },
          {
            threshold: 0.1, // Se activa cuando el 10% del título es visible
            rootMargin: '0px 0px 0px 0px' // Se activa ni bien aparece el título
          }
        );
        
        techObserver.observe(techTitle.value);
      }

      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      if (clientsObserver) clientsObserver.disconnect();
      if (techObserver) techObserver.disconnect();
      if (processObserver) processObserver.disconnect();
      if (servicesObserver) servicesObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    });

    // Control del video basado en scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      isVideoFixed.value = scrollY < 100; // Solo fijo cuando estás cerca del top
    };

    return {
      hero,
      services,
      processSteps,
      technologies,
      clients,
      featuredClients,
      otherClients,
      isVisible,
      isTechVisible,
      isProcessVisible,
      isServicesVisible,
      isVideoFixed,
      clientsTitle,
      techTitle,
      processTitle,
      servicesTitle,
      getServiceIcon,
      handleScroll,
    };
  },
});
</script>

<style scoped>
/* =============================================
   ANIMACIONES
   ============================================= */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideInFromLeft {
  from { opacity: 0; transform: translateX(-60px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideInFromRight {
  from { opacity: 0; transform: translateX(60px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes techFadeIn {
  from { opacity: 0; transform: translateY(16px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes slideInFromLeftTech {
  from { opacity: 0; transform: translateX(-50px) scale(0.95); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
}

@keyframes slideInFromRightTech {
  from { opacity: 0; transform: translateX(50px) scale(0.95); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
}

@keyframes slideInFromBottom {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Cards de servicios */
.service-card {
  opacity: 0;
  transform: translateY(30px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s ease;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.08) !important;
}

.service-card.animate-service {
  animation: slideInFromBottom 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.service-card:hover {
  transform: translateY(-4px) !important;
  border-color: rgba(45, 212, 191, 0.3) !important;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 0 20px rgba(45, 212, 191, 0.08) !important;
  cursor: pointer;
  z-index: 1;
}

.service-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(45, 212, 191, 0.1);
  border-radius: 14px;
  color: #2dd4bf;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .service-icon {
  background: rgba(45, 212, 191, 0.18);
  transform: scale(1.08);
}

.service-card h3 {
  font-size: 1rem;
  margin-bottom: 6px;
}

.service-card p {
  font-size: 0.85rem;
  line-height: 1.5;
}

/* Grid de tecnologías */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  max-width: 1540px;
  margin: 0 auto;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 14px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.3s ease,
              border-color 0.3s ease;
  opacity: 0;
  transform: translateX(-50px) scale(0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.tech-item.animate-tech-left {
  animation: slideInFromLeftTech 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.tech-item.animate-tech-right {
  animation: slideInFromRightTech 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.tech-item:hover {
  transform: translateY(-4px) scale(1.05) !important;
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(45, 212, 191, 0.45);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1;
}

.tech-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: rgba(255,255,255,0.75);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tech-item:hover .tech-icon {
  color: #2dd4bf;
  transform: scale(1.12);
}

.tech-name {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  color: rgba(255,255,255,0.85);
  transition: color 0.3s ease;
}

.tech-item:hover .tech-name {
  color: #ffffff;
}

/* Animaciones genéricas */
.animate-left {
  animation: slideInFromLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-right {
  animation: slideInFromRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* =============================================
   SECCIÓN CLIENTES — rediseño moderno
   ============================================= */

.clients-title {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 36px;
  text-align: center;
  line-height: 1.2;
}

/* Cards destacadas */
.clients-featured-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.client-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: 24px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s ease,
              border-color 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
}

.client-card--visible {
  opacity: 1;
  transform: translateY(0);
}

.client-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(45,212,191,0.25);
  border-color: rgba(45,212,191,0.35);
}

.client-card__logo-wrap {
  flex-shrink: 0;
  width: 110px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid rgba(0,0,0,0.06);
}

.client-card__logo-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.client-card__body {
  flex: 1;
  min-width: 0;
}

.client-card__name {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #052c59;
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.client-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.client-card__item {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #475569;
  line-height: 1.5;
}

.client-card__item svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: #2dd4bf;
}

/* Separador de secciones — estilo unificado */
.clients-wall-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 36px 0 20px;
}

.clients-wall-line {
  flex: 1;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
}

.clients-wall-label {
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
  white-space: nowrap;
}

/* Variante para fondos oscuros */
.clients-wall-line--light {
  background: rgba(255, 255, 255, 0.2);
}

.clients-wall-label--light {
  color: rgba(255, 255, 255, 0.5);
}

/* Logo wall */
.clients-logo-wall {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.logo-tile {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 12px;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.25s ease,
              border-color 0.25s ease,
              background 0.25s ease;
  cursor: default;
}

.logo-tile--visible {
  opacity: 1;
  transform: translateY(0);
}

.logo-tile:hover {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1), 0 0 0 1px rgba(45,212,191,0.25);
  border-color: rgba(45,212,191,0.35);
  transform: translateY(-3px);
}

.logo-tile img {
  max-width: 85%;
  max-height: 60px;
  object-fit: contain;
  filter: grayscale(35%) opacity(0.8);
  transition: filter 0.25s ease, transform 0.25s ease;
}

.logo-tile:hover img {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.06);
}

/* Nuestro Proceso */
.process-section {
  background-image: url('@/assets/background4.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0;
}

.process-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

.process-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 48px;
  align-items: center;
}

.process-subtitle {
  margin: 0 0 32px 0;
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
}

.process-steps-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.process-step-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.process-step-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #052c59;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.process-step-content {
  flex: 1;
}

.process-content {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
}

.process-content.animate-left {
  opacity: 1;
  transform: translateX(0);
}

.process-step-title {
  margin: 0 0 8px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
}

.process-step-text {
  margin: 0;
  color: #475569;
  line-height: 1.6;
  font-size: 0.85rem;
}

.process-visual {
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.8s ease-out;
}

.process-visual.animate-right {
  opacity: 1;
  transform: translateX(0);
}

.process-svg {
  width: 100%;
  max-width: 700px;
  height: auto;
}

@media (max-width: 1024px) {
  .process-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  
  .process-subtitle {
    text-align: center;
  }
  
  .process-svg {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .process-section {
    padding: 60px 0;
  }
  
  .process-container {
    padding: 0 20px;
  }
  
  .process-grid {
    gap: 24px;
  }
  
  .process-subtitle {
    font-size: 0.95rem;
    margin-bottom: 24px;
  }
  
  .process-subtitle {
    font-size: 0.95rem;
    margin-bottom: 24px;
  }
  
  .process-steps-list {
    gap: 20px;
  }
  
  .process-step-item {
    gap: 12px;
  }
  
  .process-step-number {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }
  
  .process-step-title {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }

  .process-step-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }
  
  .process-svg {
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .process-section {
    padding: 40px 0;
  }
  
  .process-container {
    padding: 0 16px;
  }
  
  
  .process-subtitle {
    font-size: 0.9rem;
  }
  
  .process-steps-list {
    gap: 16px;
  }
  
  .process-step-item {
    gap: 10px;
  }
  
  .process-step-number {
    width: 24px;
    height: 24px;
    font-size: 0.75rem;
  }
  
  .process-step-title {
    font-size: 0.9rem;
  }

  .process-step-text {
    font-size: 0.78rem;
  }
  
  .process-svg {
    max-width: 320px;
  }
}

.client-logo-caption { margin: 0 4px; font-size: 0.95rem; font-weight: 600; color: rgb(5, 44, 89); line-height: 1.3; text-align: center; }

.section h2 {
  animation: fadeInUp 0.8s ease-out;
}

.bg-tech h2 {
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 12px !important;
  }
  
  .service-card {
    padding: 16px;
  }
  
  .service-card h3 {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }

  .service-card p {
    font-size: 0.8rem;
    line-height: 1.5;
  }
  
  .service-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
  }
  
  .clients-featured-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .clients-logo-wall {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 16px;
  }
  
  .tech-item {
    padding: 16px 12px;
  }
  
  .tech-item.animate-tech-left,
  .tech-item.animate-tech-right {
    animation: techFadeIn 0.6s ease-out forwards;
    animation-delay: 0s !important;
  }
  
  .tech-icon {
    width: 40px;
    height: 40px;
  }
  
  .tech-name {
    font-size: 12px;
  }
  
  .clients-list {
    margin: 24px 0 0;
  }
  
  .client-item {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }
  
  .client-item.animate-left,
  .client-item.animate-right {
    animation: fadeInUp 0.6s ease-out forwards;
    animation-delay: 0s !important;
  }
  
  .client-item:hover {
    transform: translateY(-4px) scale(1.02);
  }
  
  .client-logo {
    width: 120px;
    height: 80px;
    margin-right: 0;
    margin-bottom: 20px;
    animation: fadeInUp 0.6s ease-out 0.2s forwards;
  }
  
  .client-name {
    font-size: 1.3rem;
  }
  
  .client-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  
  .service-card {
    padding: 14px;
  }
  
  .service-card h3 {
    font-size: 0.85rem;
  }

  .service-card p {
    font-size: 0.75rem;
  }
  
  .service-icon {
    width: 44px;
    height: 44px;
    margin-bottom: 10px;
  }
  
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  
  .tech-item {
    padding: 12px 8px;
  }
  
  .tech-icon {
    width: 32px;
    height: 32px;
  }
  
  .tech-name {
    font-size: 11px;
  }
  
  .clients-logo-wall {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .client-card {
    padding: 18px;
    gap: 16px;
  }

  .client-card__logo-wrap {
    width: 90px;
    height: 70px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 360px) {
  .services-grid {
    gap: 8px !important;
  }
  
  .service-card {
    padding: 12px;
  }
  
  .service-card h3 {
    font-size: 0.8rem;
  }

  .service-card p {
    font-size: 0.72rem;
  }
  
  .service-icon {
    width: 40px;
    height: 40px;
  }
  
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  .tech-item {
    padding: 10px 6px;
  }
  
  .tech-icon {
    width: 28px;
    height: 28px;
  }
  
  .tech-name {
    font-size: 10px;
  }
  
  .clients-logo-wall {
    grid-template-columns: repeat(2, 1fr);
  }

  .client-card {
    padding: 14px;
    gap: 12px;
  }

  .client-card__logo-wrap {
    width: 80px;
    height: 60px;
  }
}

</style>
<style scoped>
.servicios-clave-bg {
  background-image: url('@/assets/background4.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.clientes-bg {
  background-image: url('@/assets/background4.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
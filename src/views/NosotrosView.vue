<template>
  <!-- Nuestra Empresa / Our Company -->
  <section id="empresa" class="empresa-section">
    <div class="empresa-container">
      <div class="empresa-content">

        <!-- Intro -->
        <div class="intro-section">
          <h2 class="intro-title">{{ $t('pages.nosotros.title') }}</h2>
          <p class="intro-description" v-html="$t('pages.nosotros.intro')"></p>
        </div>

        <!-- Historia + Cómo trabajamos -->
        <div class="grid-section">
          <div class="grid-item">
            <h3 class="section-title">{{ $t('pages.nosotros.history_title') }}</h3>
            <p class="section-text">{{ $t('pages.nosotros.history') }}</p>
          </div>
          <div class="grid-item">
            <h3 class="section-title">{{ $t('pages.nosotros.how_we_work_title') }}</h3>
            <p class="section-text">{{ $t('pages.nosotros.how_we_work') }}</p>
          </div>
        </div>

        <!-- Cita -->
        <blockquote class="quote-section">
          "{{ $t('pages.nosotros.quote') }}"
        </blockquote>

        <!-- Qué hacemos + Equipo -->
        <div class="grid-section">
          <div class="grid-item">
            <h3 class="section-title">{{ $t('pages.nosotros.what_we_do_title') }}</h3>
            <p class="section-text">{{ $t('pages.nosotros.what_we_do') }}</p>
          </div>
          <div class="grid-item">
            <h3 class="section-title">{{ $t('pages.nosotros.team_title') }}</h3>
            <p class="section-text">{{ $t('pages.nosotros.team') }}</p>
          </div>
        </div>

        <!-- Valores -->
        <div class="valores-section">
          <h3 class="valores-title">{{ $t('pages.nosotros.values_title') }}</h3>
          <div class="valores-grid">
            <div class="valor-card">
              <h4 class="valor-title">{{ $t('pages.nosotros.values.transparency_title') }}</h4>
              <p class="valor-text">{{ $t('pages.nosotros.values.transparency') }}</p>
            </div>
            <div class="valor-card">
              <h4 class="valor-title">{{ $t('pages.nosotros.values.quality_title') }}</h4>
              <p class="valor-text">{{ $t('pages.nosotros.values.quality') }}</p>
            </div>
            <div class="valor-card">
              <h4 class="valor-title">{{ $t('pages.nosotros.values.results_title') }}</h4>
              <p class="valor-text">{{ $t('pages.nosotros.values.results') }}</p>
            </div>
            <div class="valor-card">
              <h4 class="valor-title">{{ $t('pages.nosotros.values.empathy_title') }}</h4>
              <p class="valor-text">{{ $t('pages.nosotros.values.empathy') }}</p>
            </div>
          </div>
        </div>

        <!-- Compromiso + Diseño -->
        <div class="grid-section">
          <div class="grid-item">
            <h3 class="section-title">{{ $t('pages.nosotros.commitment_title') }}</h3>
            <p class="section-text">{{ $t('pages.nosotros.commitment') }}</p>
          </div>
          <div class="grid-item">
            <h3 class="section-title">{{ $t('pages.nosotros.design_title') }}</h3>
            <p class="section-text">{{ $t('pages.nosotros.design') }}</p>
          </div>
        </div>

        <!-- Cierre -->
        <div class="cierre-section">
          <p class="cierre-text" v-html="$t('pages.nosotros.closing')"></p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.empresa-section {
  background-color: #ffffff;
  padding: 80px 0;
}

.empresa-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 16px;
}

.empresa-content {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

/* Intro Section */
.intro-section {
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
}

.intro-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 24px 0;
}

.intro-description {
  font-size: 1.125rem;
  line-height: 1.75;
  color: #475569;
  margin: 0;
}

.brand-text {
  font-weight: 600;
  color: #052c59;
}

.highlight-text {
  font-weight: 500;
}

/* Grid Section */
.grid-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 16px 0;
}

.section-text {
  color: #475569;
  line-height: 1.75;
  margin: 0;
}

/* Quote Section */
.quote-section {
  padding: 32px;
  background-color: #f8fafc;
  border-left: 4px solid #052c59;
  font-style: italic;
  font-size: 1.125rem;
  color: #334155;
  max-width: 896px;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Valores Section */
.valores-section {
  text-align: center;
}

.valores-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 32px 0;
}

.valores-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.valor-card {
  padding: 24px;
  background-color: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.valor-title {
  font-weight: 600;
  color: #052c59;
  margin: 0 0 8px 0;
}

.valor-text {
  color: #475569;
  font-size: 0.875rem;
  line-height: 1.75;
  margin: 0;
}

/* Cierre Section */
.cierre-section {
  text-align: center;
  max-width: 768px;
  margin: 80px auto 0;
}

.cierre-text {
  font-size: 1.125rem;
  line-height: 1.75;
  color: #334155;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-section {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .valores-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .empresa-section {
    padding: 60px 0;
  }
  
  .empresa-container {
    padding: 0 20px;
  }
  
  .empresa-content {
    gap: 60px;
  }
  
  .intro-title {
    font-size: 1.875rem;
  }
  
  .intro-description {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .section-text {
    font-size: 0.95rem;
  }
  
  .valores-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .valor-card {
    padding: 20px;
  }
  
  .valor-title {
    font-size: 1rem;
  }
  
  .valor-text {
    font-size: 0.85rem;
  }
  
  .quote-section {
    padding: 24px;
    font-size: 1rem;
  }
  
  .cierre-section {
    margin-top: 60px;
  }
  
  .cierre-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .empresa-section {
    padding: 40px 0;
  }
  
  .empresa-container {
    padding: 0 16px;
  }
  
  .empresa-content {
    gap: 40px;
  }
  
  .intro-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .intro-description {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .section-title {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
  
  .section-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .valores-title {
    font-size: 1.3rem;
    margin-bottom: 24px;
  }
  
  .valores-grid {
    gap: 16px;
  }
  
  .valor-card {
    padding: 16px;
  }
  
  .valor-title {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }
  
  .valor-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }
  
  .quote-section {
    padding: 20px;
    font-size: 0.95rem;
    margin: 0 16px;
  }
  
  .cierre-section {
    margin-top: 40px;
  }
  
  .cierre-text {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

@media (max-width: 360px) {
  .empresa-container {
    padding: 0 12px;
  }
  
  .empresa-content {
    gap: 32px;
  }
  
  .intro-title {
    font-size: 1.3rem;
  }
  
  .intro-description {
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.1rem;
  }
  
  .section-text {
    font-size: 0.85rem;
  }
  
  .valores-title {
    font-size: 1.2rem;
  }
  
  .valor-card {
    padding: 14px;
  }
  
  .valor-title {
    font-size: 0.9rem;
  }
  
  .valor-text {
    font-size: 0.75rem;
  }
  
  .quote-section {
    padding: 16px;
    font-size: 0.9rem;
    margin: 0 12px;
  }
  
  .cierre-text {
    font-size: 0.9rem;
  }
}
</style>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <div class="footer-item">
            <span class="footer-label">{{ $t('footer.location_label') }}</span>
            <span class="footer-value">{{ $t('footer.location_value') }}</span>
          </div>
          <div class="footer-divider"></div>
          <div class="footer-item">
            <span class="footer-label">{{ $t('footer.email_label') }}</span>
            <a href="mailto:rusoft@rusoft.com.ar" class="footer-link">rusoft@rusoft.com.ar</a>
          </div>
        </div>
        <div class="footer-separator"></div>
        <div class="copy">{{ $t('footer.copyright') }}</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "AppFooter" });
</script>

<style scoped>
.app-footer {
  background: #0b0f14;
  color: #94a3b8;
  padding: 40px 20px 28px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.footer-info {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-divider {
  width: 1px;
  height: 32px;
  background: rgba(255,255,255,0.1);
}

.footer-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
}

.footer-label {
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.footer-value {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.5;
}

.footer-link {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.footer-link:hover {
  color: var(--brand, #2dd4bf);
  transform: translateX(2px);
}

.footer-separator {
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.06);
  margin: 24px 0 20px;
}

.copy {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 1.6;
}

@media (max-width: 480px) {
  .footer-info {
    flex-direction: column;
    gap: 16px;
  }

  .footer-divider { display: none; }
}
</style>

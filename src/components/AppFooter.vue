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
          <div class="footer-divider"></div>
          <div class="footer-item">
            <span class="footer-label">LinkedIn</span>
            <a href="https://www.linkedin.com/company/rusoftsrl/" target="_blank" rel="noopener noreferrer" class="footer-link footer-linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>Rusoft SRL</span>
            </a>
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
  color: rgb(51, 87, 225);
  transform: translateX(2px);
}

.footer-linkedin {
  display: inline-flex;
  align-items: center;
  gap: 6px;
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

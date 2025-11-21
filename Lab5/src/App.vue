<script setup>
import { onMounted } from 'vue'
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProblemSolutionSection from './components/sections/ProblemSolutionSection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import HowItWorksSection from './components/sections/HowItWorksSection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="app-root">
    <Toast />
    <MainHeader />

    <main class="app-main">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="problem">
        <ProblemSolutionSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="how-it-works">
        <HowItWorksSection />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="faq">
        <FaqSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>

    <MainFooter />
  </div>
</template>

<style>
:root {
  --bg-body: #0f172a;
  --bg-surface: #020617;
  --bg-soft: #0b1220;
  --accent: #22c55e;
  --accent-soft: #16a34a33;
  --accent-strong: #4ade80;
  --border-subtle: #1f2937;
  --text-main: #e5e7eb;
  --text-muted: #9ca3af;
  --text-soft: #6b7280;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #111827 0, #020617 55%, #000 100%);
  color: var(--text-main);
}

.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 16px 16px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

section {
  scroll-margin-top: 72px;
}

a {
  color: inherit;
  text-decoration: none;
}

</style>

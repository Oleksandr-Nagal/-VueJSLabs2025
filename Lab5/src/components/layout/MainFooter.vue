<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="copy">© {{ new Date().getFullYear() }} FinanceTrack, Inc.</p>
      <div class="links">
        <a href="#hero">Overview</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #111827;
  background: #020617;
}

.footer-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 12px 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-soft);
}

.links {
  display: flex;
  gap: 10px;
}

.links a {
  color: inherit;
  text-decoration: none;
}

.links a:hover {
  color: var(--accent-strong);
}
</style>

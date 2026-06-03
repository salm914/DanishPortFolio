<template>
  <header class="header-div fixed-top">
    <div class="brand">
      <span class="text-large"> AbuDanish Masood Muhammed </span>
    </div>

    <nav class="nav-links">
      <a href="#home">Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.header-div {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.85);

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  z-index: 1000;
}

/* Brand */

.brand {
  min-width: 0;
}

.text-large {
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-weight: 700;
  color: #111;
  white-space: nowrap;
}

/* Navigation */

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #444;
  font-size: 0.95rem;
  font-weight: 500;

  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: #d4af37;
}

/* Tablet */

@media (max-width: 768px) {
  .header-div {
    padding: 0.85rem 1.25rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-links a {
    font-size: 0.9rem;
  }
}

/* Mobile */

@media (max-width: 576px) {
  .header-div {
    padding: 0.75rem 1rem;
  }

  .text-large {
    font-size: 0.9rem;
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nav-links {
    gap: 0.75rem;
  }

  .nav-links a {
    font-size: 0.85rem;
  }
}
</style>

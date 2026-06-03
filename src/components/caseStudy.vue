<template>
  <section class="case-study-section">
    <div class="section-header">
      <span class="section-badge"> CASE STUDY </span>

      <h2>Saffron Oud Attar – A Signature Fragrance Journey</h2>

      <p>
        An in-depth exploration of a luxury attar blend, highlighting its inspiration, fragrance
        notes, longevity, concentration, and the craftsmanship behind creating a memorable scent
        experience.
      </p>
    </div>

    <div class="image-wrapper fade-up">
      <img class="case-study-image" src="/img.png" alt="Luxury Fragrance Collection" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.case-study-section {
  max-width: 1400px;
  margin: auto;
  padding: 6rem 1rem;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: auto auto 3rem;
}

.section-badge {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.12);
  color: #d4af37;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.15;
  margin-bottom: 1rem;
}

.section-header p {
  color: #666;
  line-height: 1.8;
  max-width: 650px;
  margin: auto;
}

.image-wrapper {
  overflow: hidden;
  border-radius: 28px;

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.08),
    0 8px 20px rgba(0, 0, 0, 0.04);
}

.case-study-image {
  width: 100%;
  display: block;
  border-radius: 28px;

  transition:
    transform 0.8s ease,
    filter 0.5s ease;
}

.image-wrapper:hover .case-study-image {
  transform: scale(1.05);
}

.fade-up {
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991px) {
  .case-study-section {
    padding: 4rem 1rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }
}

@media (max-width: 576px) {
  .section-header h2 {
    line-height: 1.25;
  }

  .image-wrapper {
    border-radius: 20px;
  }

  .case-study-image {
    border-radius: 20px;
  }
}
</style>

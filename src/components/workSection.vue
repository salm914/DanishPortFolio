<template>
  <section class="expertise-section">
    <div class="section-header fade-up">
      <span class="section-badge"> EXPERTISE </span>

      <h2>Fragrance Knowledge & Consultation</h2>

      <p>
        Helping individuals discover fragrances that align with their personality, lifestyle, and
        preferences through thoughtful recommendations and deep understanding of scent compositions.
      </p>
    </div>

    <div class="expertise-card fade-up">
      <div class="expertise-grid">
        <div class="expertise-item">
          <div class="icon">🌿</div>
          <h4>Fragrance Notes</h4>
          <p>Understanding top, heart, and base notes and how they evolve over time.</p>
        </div>

        <div class="expertise-item">
          <div class="icon">🪵</div>
          <h4>Oud & Oriental Scents</h4>
          <p>Strong knowledge of oud-based, oriental, woody, and amber compositions.</p>
        </div>

        <div class="expertise-item">
          <div class="icon">✨</div>
          <h4>Personal Recommendations</h4>
          <p>Matching fragrances with personality, occasion, and lifestyle.</p>
        </div>

        <div class="expertise-item">
          <div class="icon">⏳</div>
          <h4>Performance Analysis</h4>
          <p>Guidance on longevity, projection, sillage, and seasonal suitability.</p>
        </div>
      </div>

      <div class="fragrance-types">
        <span>Oud</span>
        <span>Oriental</span>
        <span>Amber</span>
        <span>Woody</span>
        <span>Musky</span>
        <span>Fresh</span>
        <span>Citrus</span>
        <span>Aquatic</span>
        <span>Spicy</span>
        <span>Gourmand</span>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.expertise-section {
  max-width: 1400px;
  margin: auto;
  padding: 6rem 1rem;
}

.section-header {
  text-align: center;
  max-width: 850px;
  margin: auto auto 4rem;
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
  margin-bottom: 1rem;
  line-height: 1.15;
}

.section-header p {
  color: #666;
  line-height: 1.9;
  font-size: 1.05rem;
}

.expertise-card {
  background: #fff;
  border-radius: 28px;
  padding: 2rem;
  border: 1px solid #ececec;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.expertise-item {
  padding: 1.5rem;
  border-radius: 20px;
  background: #fafafa;
  border: 1px solid #eee;
  transition: 0.3s ease;
}

.expertise-item:hover {
  transform: translateY(-6px);
  border-color: #d4af37;
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.expertise-item h4 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.expertise-item p {
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.fragrance-types {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.fragrance-types span {
  padding: 10px 18px;
  border-radius: 999px;
  background: #111;
  color: white;
  font-size: 0.9rem;
  transition: 0.3s ease;
}

.fragrance-types span:hover {
  background: #d4af37;
  color: #111;
}

.fade-up {
  animation: fadeUp 0.9s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(35px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .expertise-section {
    padding: 4rem 1rem;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
  }

  .expertise-card {
    padding: 1.5rem;
  }

  .section-header h2 {
    line-height: 1.25;
  }
}
</style>

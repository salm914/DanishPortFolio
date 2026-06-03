<template>
  <section class="about-section">
    <div class="container-fluid">
      <div class="row align-items-center g-5">
        <!-- Image -->
        <div class="col-lg-5">
          <div class="image-wrapper fade-left">
            <img src="/img3.jpeg" alt="Fragrance Consultant" class="about-img" />
          </div>
        </div>

        <!-- Content -->
        <div class="col-lg-7">
          <div class="about-card fade-up">
            <span class="about-badge"> ABOUT ME </span>

            <h2>Helping You Discover Fragrances That Feel Personal</h2>

            <p class="lead-text">
              With over 5 years of experience in the fragrance space, I've developed a deep
              understanding of perfume composition, scent behavior, and how different notes create
              memorable impressions.
            </p>

            <p class="body-text">
              I help individuals discover fragrances that align with their personality, style, and
              lifestyle—guiding them toward scents that feel authentic, sophisticated, and uniquely
              their own.
            </p>

            <p class="body-text">
              Through extensive experience with oud, florals, spices, musks, and modern fragrance
              compositions, I've learned how fragrances evolve throughout the day and interact with
              individual skin chemistry.
            </p>

            <p class="body-text">
              My goal is to simplify the fragrance journey by providing trusted recommendations,
              helping clients confidently select scents for everyday wear, special occasions, and
              lasting impressions.
            </p>

            <!-- Highlights -->
            <div class="highlights">
              <div class="highlight-item">
                <span class="highlight-number">5+</span>
                <span class="highlight-text">Years Experience</span>
              </div>

              <div class="highlight-item">
                <span class="highlight-number">100+</span>
                <span class="highlight-text">Fragrances Studied</span>
              </div>

              <div class="highlight-item">
                <span class="highlight-number">OUD</span>
                <span class="highlight-text">Specialist</span>
              </div>

              <div class="highlight-item">
                <span class="highlight-number">1:1</span>
                <span class="highlight-text">Personal Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-section {
  padding: 6rem 1rem;
  max-width: 1400px;
  margin: auto;
}

.about-card {
  padding: 2rem;
}

.about-badge {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.12);
  color: #d4af37;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 5vw, 3.8rem);
  line-height: 1.15;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #111;
}

.lead-text {
  font-size: 1.15rem;
  line-height: 1.9;
  color: #222;
  margin-bottom: 1.5rem;
}

.body-text {
  font-size: 1rem;
  line-height: 1.9;
  color: #666;
  margin-bottom: 1rem;
}

/* Image */

.image-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  width: 320px;
  height: 320px;
  background: rgba(212, 175, 55, 0.12);
  border-radius: 50%;
  filter: blur(60px);
  z-index: -1;
}

.about-img {
  width: 100%;
  max-width: 420px;
  height: 550px;
  object-fit: cover;
  border-radius: 24px;

  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.12),
    0 0 40px rgba(212, 175, 55, 0.15);

  transition: all 0.4s ease;
}

.about-img:hover {
  transform: translateY(-8px);
}

/* Highlight Cards */

.highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.highlight-item {
  background: white;
  border: 1px solid #eee;
  border-radius: 18px;
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-5px);
  border-color: #d4af37;

  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.15);
}

.highlight-number {
  font-size: 1.4rem;
  font-weight: 700;
  color: #d4af37;
}

.highlight-text {
  margin-top: 0.3rem;
  color: #555;
  font-size: 0.9rem;
}

/* Animations */

.fade-up {
  animation: fadeUp 1s ease forwards;
}

.fade-left {
  animation: fadeLeft 1s ease forwards;
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

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Tablet */

@media (max-width: 991px) {
  .about-section {
    text-align: center;
    padding: 5rem 1.5rem;
  }

  .about-card {
    padding: 1rem;
  }

  .about-img {
    height: 450px;
  }

  .highlights {
    margin-top: 2rem;
  }
}

/* Mobile */

@media (max-width: 576px) {
  .about-section {
    padding: 4rem 1rem;
  }

  h2 {
    line-height: 1.25;
  }

  .about-img {
    max-width: 320px;
    height: 380px;
  }

  .highlights {
    grid-template-columns: 1fr;
  }

  .lead-text,
  .body-text {
    text-align: left;
  }
}
</style>

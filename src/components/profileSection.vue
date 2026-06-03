<template>
  <section class="profileSection">
    <div class="row align-items-center gy-5">
      <!-- Content -->
      <div class="col-lg-7">
        <div class="content fade-up">
          <span class="badge-text"> Fragrance Enthusiast </span>

          <h1>Curating fragrances for every season, occasion, and lasting impression.</h1>

          <p>
            Specializing in fragrance consultation, seasonal scent curation, and personalized
            recommendations for discerning clients who appreciate quality, sophistication, and
            memorable impressions.
          </p>
        </div>
      </div>

      <!-- Image -->
      <div class="col-lg-5">
        <div class="image-wrapper fade-in">
          <img src="/img4.png" alt="Fragrance Expert" class="profile-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.profileSection {
  max-width: 1400px;
  margin: 100px auto 0;
  padding-inline: clamp(1rem, 4vw, 5rem);
}

/* ---------- Content ---------- */

.content {
  max-width: 680px;
}

.badge-text {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.12);
  color: #c89b2f;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: clamp(2rem, 5vw, 4.2rem);
  line-height: 1.15;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #111;
}

p {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.9;
  color: #666;
  max-width: 600px;
}

/* ---------- Image ---------- */

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.profile-image {
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;

  border-radius: 24px;

  background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.02));

  padding: 1rem;

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.08),
    0 8px 20px rgba(0, 0, 0, 0.05);

  animation: float 5s ease-in-out infinite;
}

/* ---------- Tablet ---------- */

@media (max-width: 991px) {
  .profileSection {
    text-align: center;
  }

  .content {
    max-width: 700px;
    margin-inline: auto;
  }

  p {
    margin-inline: auto;
  }

  .image-wrapper {
    padding-inline: 2rem;
  }

  .profile-image {
    max-width: 350px;
  }
}

/* ---------- Mobile ---------- */

@media (max-width: 576px) {
  .profileSection {
    margin-top: 70px;
    padding-inline: 1.25rem;
  }

  h1 {
    line-height: 1.25;
  }

  .image-wrapper {
    padding-inline: 1rem;
  }

  .profile-image {
    max-width: 280px;
  }
}

/* ---------- Animations ---------- */

.fade-up {
  animation: fadeUp 1s ease forwards;
}

.fade-in {
  animation: fadeIn 1.2s ease forwards;
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>

<template>
  <section class="contact-section">
    <div class="row align-items-center g-5">
      <!-- Left Content -->
      <div class="col-lg-5">
        <div class="contact-content fade-up">
          <span class="section-badge"> CONTACT </span>

          <h2>Let's Find Your Signature Fragrance</h2>

          <p class="contact-text">
            Looking for the perfect fragrance for yourself or someone special? I provide
            personalized recommendations based on personality, lifestyle, occasion, and scent
            preferences.
          </p>

          <p class="contact-text">
            Whether you're exploring oud, florals, musks, fresh scents, or luxury Arabic fragrances,
            I'm happy to help.
          </p>

          <div class="contact-info">
            <span>Email</span>
            <h5>abudaneesh1@gmail.com</h5>
          </div>
        </div>
      </div>

      <!-- Right Form -->
      <div class="col-lg-7">
        <div class="contact-card fade-up">
          <form action="https://formsubmit.co/abudaneesh1@gmail.com" method="POST">
            <div class="row g-4">
              <input type="hidden" name="_subject" value="New Fragrance Consultation Request" />

              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_template" value="table" />
              <div class="col-md-6">
                <label>Name</label>
                <input type="text" class="custom-input" name="name" placeholder="Your name" />
              </div>

              <div class="col-md-6">
                <label>Email</label>
                <input type="email" class="custom-input" name="email" placeholder="your@email.com" />
              </div>

              <div class="col-12">
                <label>Phone Number</label>
                <input type="text" class="custom-input" name="phone" placeholder="Phone number" />
              </div>

              <div class="col-12">
                <label>Message</label>
                <textarea
                  rows="5"
                  class="custom-input"
                  name="message"
                  placeholder="Tell me about your fragrance preferences..."
                ></textarea>
              </div>

              <div class="col-12">
                <button type="submit" class="submit-button">Send Consultation Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>

<style scoped>
.contact-section {
  max-width: 1400px;
  margin: auto;
  padding: 6rem 1rem;
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

.contact-content h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.15;
  margin-bottom: 1.5rem;
}

.contact-text {
  color: #666;
  line-height: 1.9;
  margin-bottom: 1rem;
}

.contact-info {
  margin-top: 2rem;
  padding: 1.25rem;
  border-left: 4px solid #d4af37;
  background: rgba(212, 175, 55, 0.05);
  border-radius: 12px;
}

.contact-info span {
  color: #777;
  display: block;
  margin-bottom: 0.5rem;
}

.contact-info h5 {
  margin: 0;
  font-weight: 600;
}

.contact-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
}

.contact-card label {
  display: block;
  margin-bottom: 0.6rem;
  font-weight: 500;
}

.custom-input {
  width: 100%;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid #e5e5e5;
  background: white;
  transition: 0.3s ease;
}

.custom-input:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.12);
}

textarea.custom-input {
  resize: none;
}

.submit-button {
  width: 100%;
  border: none;
  padding: 16px;
  border-radius: 14px;
  font-weight: 600;
  background: #111;
  color: white;
  transition: 0.3s ease;
}

.submit-button:hover {
  background: #d4af37;
  color: #111;
  transform: translateY(-2px);
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

@media (max-width: 991px) {
  .contact-section {
    padding: 4rem 1rem;
  }

  .contact-content {
    text-align: center;
  }

  .contact-info {
    text-align: left;
  }

  .contact-card {
    padding: 1.5rem;
  }
}
</style>

<template>
    <div class="loader-wrapper">
    <div class="logo">D</div>

    <div class="bottle-top"></div>

    <div class="drop"></div>

    <div class="bottle-bottom"></div>

    <p class="loading-text">Crafting Your Fragrance Experience</p>
    </div>
</template>
<script setup></script>

<style>
.loader-wrapper {
  position: fixed;
  inset: 0;
  background: #0f0f0f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.logo {
  font-size: 80px;
  font-family: "Cormorant Garamond", serif;
  color: #d4af37;
  margin-bottom: 40px;
}

.bottle-top {
  width: 80px;
  height: 30px;
  border: 2px solid #d4af37;
  border-radius: 8px;
  position: relative;
}

.bottle-top::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 10px;
  background: #d4af37;
  left: 50%;
  transform: translateX(-50%);
  top: -10px;
  border-radius: 4px;
}

.drop {
  width: 12px;
  height: 12px;
  background: #d4af37;
  border-radius: 50% 50% 50% 50%;
  margin: 10px 0;
  animation: drip 1.5s infinite ease-in;
}

.bottle-bottom {
  width: 90px;
  height: 110px;
  border: 2px solid #d4af37;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.bottle-bottom::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(212, 175, 55, 0.5);
  animation: fill 1.5s infinite;
}

.loading-text {
  color: #c5b28a;
  margin-top: 30px;
  letter-spacing: 2px;
  font-size: 14px;
}

@keyframes drip {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    transform: translateY(120px);
    opacity: 0;
  }
}

@keyframes fill {
  0% {
    height: 0%;
  }

  100% {
    height: 35%;
  }
}
</style>

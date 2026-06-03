<template>
  <div class="dashboard-container">
    <Header />
    <main>
      <Dashboard id="home" />
      <Work />
      <CaseStudy />
      <About id="about" />
      <Contact id="contact" />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'
import Dashboard from '@/components/profileSection.vue'
import Work from '@/components/workSection.vue'
import CaseStudy from '@/components/caseStudy.vue'
import About from '@/components/about.vue'
import Contact from '@/components/contact.vue'
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  width: 100%;
  overflow-x: hidden;
}
</style>

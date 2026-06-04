<script setup lang="ts">
import {onMounted,ref} from 'vue'
import { RouterView } from 'vue-router'
import Loader from '@/components/loader.vue'

const loading = ref(true)
onMounted(()=>{
  setTimeout(()=>{
    loading.value= false;
  },2000)
})

</script>

<template>
  <Loader v-if="loading"/>
  <RouterView v-else />
</template>

<style scoped></style>

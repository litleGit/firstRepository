<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<style lang='scss' scoped >

</style>
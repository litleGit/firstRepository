<template>
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,html{
  width: 100vh;
  height: 100vw;
}
li{
  list-style: none;
}
</style>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCoreStore } from "@/stores/coreStore";

onMounted(async () => {});
</script>

<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<style>
@font-face {
  font-family: "okami";
  src: url("./fonts/Okami.otf");
}
</style>

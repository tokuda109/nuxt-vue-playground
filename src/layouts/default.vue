<template>
  <main class="Layout -default">
    <nuxt />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

type Props = {};

export default defineComponent<Props>({
  setup() {
    return {
    };
  }
});
</script>

<style scoped>
.Layout.-default {
  width: 100%;
}
</style>

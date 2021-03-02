<template>
  <main class="Layout -error">
    <p>{{ error.message }}</p>
  </main>
</template>

<script lang="ts">
import { NuxtError } from '@nuxt/types/app';
import { defineComponent } from '@nuxtjs/composition-api';

type Props = {
  error: NuxtError
};

export default defineComponent<Props>({
  setup() {
    return {
    };
  }
});
</script>

<style scoped>
.Layout.-error {
  width: 100%;
}
</style>

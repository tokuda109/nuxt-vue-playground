<template>
  <header class="Header"></header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

type Props = {};

export default defineComponent<Props>({
  setup() {
    return {};
  }
});
</script>

<style scoped>
.Header {
  display: block;
  width: 100%;
}
</style>

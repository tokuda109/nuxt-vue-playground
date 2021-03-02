<template>
  <div class="IndexPage">
    <Button type="primary">test</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Button from '~/components/button';

type Props = {};

export default defineComponent<Props>({
  components: {
    Button
  },
  setup() {
    return {
    };
  }
});
</script>

<style scoped>
.IndexPage {
  position: relative;
}
</style>

<template>
  <button class="Button" :class="typeClass" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@nuxtjs/composition-api';

type ButtonType = 'primary' | 'secondary';

export type Props = {
  type: ButtonType;
  disabled?: boolean;
};

export default defineComponent<Props>({
  props: {
    type: {
      type: String,
      default: 'primary'
      // validator: (value: string) => ['primary'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClass(): string {
      return `-${this.type}`;
    }
  },
  setup(props: Props, { emit }: SetupContext) {
    const onClick = (event: MouseEvent): void => {
      (event.target as HTMLElement).blur();

      emit('click');
    };

    return {
      onClick
    };
  }
});
</script>

<style scoped>
.Button {
  padding: 11px 18px;
  line-height: 14px;
  background-color: #e0e1e2;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, .6);
  cursor: pointer;
}
</style>

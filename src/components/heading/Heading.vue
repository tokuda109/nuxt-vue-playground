<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CreateElement } from 'vue';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export type Props = {
  level: Level;
};

export default defineComponent<Props>({
  props: {
    level: {
      type: Object as () => Level,
      required: true
    }
  },
  setup(_: Props) {
    return {};
  },
  render(createElement: CreateElement) {
    const tag = `h${this.level}`;

    return createElement(tag, {
      props: {},
      slot: 'default'
    });
  }
});
</script>

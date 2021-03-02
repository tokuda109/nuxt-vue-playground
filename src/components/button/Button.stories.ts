import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button
};

export const DefaultButton = () => ({
  components: { Button },
  template: `<Button>Button Text</Button>`,
  props: {
    type: 'primary'
  }
});

// export const Default = Template.bind({})

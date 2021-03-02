import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  srcDir: './src',
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api'
  ],
  storybook: {
    stories: [
      'src/components/**/*.stories.ts'
    ]
  }
};

export default config;

import { NuxtConfig } from '@nuxt/types';
import { Configuration as WebpackConfiguration } from 'webpack';

const nuxtConfig: NuxtConfig = {
  srcDir: './src',
  target: 'static',
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api'
  ],
  storybook: {
    addons: [
      '@storybook/addon-essentials'
    ],
    stories: [
      '~/components/**/*.stories.ts'
    ],
    webpackFinal(config: WebpackConfiguration) {
      return config;
    }
  }
};

export default nuxtConfig;

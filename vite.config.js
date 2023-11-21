import { defineConfig } from 'vite';
import IstanbulPlugin from 'vite-plugin-istanbul';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    IstanbulPlugin({
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**/*', 'tests/**/*'],
      extension: ['.ts'],
    }),
  ],
});
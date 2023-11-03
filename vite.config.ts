import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'gdcr-2023'
    }
  }
});

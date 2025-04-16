// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue/svelte depending on your project

export default defineConfig({
  plugins: [react()],
  base: 'innowave',  // 👈 IMPORTANT
})

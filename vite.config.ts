import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@RegularButtonContext': resolve(__dirname,'src/context/components/common/buttons'),
      '@ContentModalContext': resolve(__dirname,'src/context/components/common/modals'),
    },
  },
  build:{
    sourcemap: true,
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@IRegularButtonProps': resolve(__dirname,'src/types/components/common/buttons'),
      '@RegularButton': resolve(__dirname,'src/components/common/buttons/'),
      '@RegularButtonContext': resolve(__dirname,'src/context/components/common/buttons'),
      '@IContentModalProps': resolve(__dirname,'src/types/components/common'),
      '@ContentModal': resolve(__dirname, 'src/components/common/modals'),
      '@ContentModalContext': resolve(__dirname,'src/context/components/common/modals'),
      '@IApiBodyResponse': resolve(__dirname,'src/types/common'),
      '@ApiConstants': resolve(__dirname,'src/enums/'),
      '@AxiosBasicAuth': resolve(__dirname,'src/utils'),
      '@AxiosBearer': resolve(__dirname,'src/utils'),
      '@AuthenticationService': resolve(__dirname,'src/services'),
      '@MobileSuitsService': resolve(__dirname,'src/services/pages'),
      '@IMobileSuits': resolve(__dirname,'src/types/pages/MobileSuits'),
      '@PaginatedTable': resolve(__dirname,'src/components/common/tables'),
      '@FormatDateTime': resolve(__dirname,'src/utils')
    },
  },
  build:{
    sourcemap: true,
  }
})

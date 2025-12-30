import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    strictPort: false,
    allowedHosts: ['5173-iv458t2c1qcl2yf6ayua7.e2b.app', '.e2b.app'],
  },
  plugins: [react()],
})

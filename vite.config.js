import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myresume/', // Set this to the subpath where your app is deployed
  plugins: [react()],
});

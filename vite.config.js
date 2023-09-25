import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Configura la carpeta de salida de construcción
    outDir: 'dist',

    // Configura la carpeta de origen de los recursos estáticos (imágenes, etc.)
    assetsDir: 'assets',

    // Otras configuraciones de construcción...
  },
})

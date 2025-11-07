import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ¡IMPORTANTE! Se ha establecido la base para el despliegue en GitHub Pages.
  // Si tu repositorio en GitHub tiene un nombre diferente a 'testpage',
  // deberás actualizar este valor para que coincida.
  base: '/testpage/', 
})
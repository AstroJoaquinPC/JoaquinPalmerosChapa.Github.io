import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repo name for Project Pages
// e.g. if your repo is github.com/yourname/portfolio, base is '/portfolio/'
// If you deploy to a User Page repo (yourname.github.io), set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})

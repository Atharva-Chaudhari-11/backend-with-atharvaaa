import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"http://localhost:4000",
    }
  },
  plugins: [react()],
})


// server: {
//   proxy: {
//     // string shorthand:
//     // http://localhost:5173/foo
//     //   -> http://localhost:4567/foo
//     '/foo': 'http://localhost:4567',
// } }
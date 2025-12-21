import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Makes paths relative for easier deployment
    root: './',
    build: {
        outDir: 'dist',
    },
    server: {
        port: 3000
    }
})

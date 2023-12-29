import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return defineConfig({
    assetsInclude: ['**/*.mov'],
    // root: 'src',
    // build: {
    //   outDir: '../build',
    // },
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
    resolve: {
      alias: {
        '@pocketful/config': path.resolve(__dirname, './src/config'),
        '@pocketful/pages': path.resolve(__dirname, './src/pages'),
        '@pocketful/design-system': path.resolve(__dirname, './src/design-system'),
        '@pocketful/design-system/atoms': path.resolve(__dirname, './src/design-system/atoms'),
        '@pocketful/design-system/components': path.resolve(__dirname, './src/design-system/components'),
        '@pocketful/assets': path.resolve(__dirname, './src/assets'),
        '@pocketful/design-system/utils': path.resolve(__dirname, './src/design-system/utils'),
        '@pocketful/services': path.resolve(__dirname, './src/modules/services'),
        '@pocketful/api': path.resolve(__dirname, './src/modules/api'),
        '@pocketful/auth': path.resolve(__dirname, './src/modules/auth'),
        '@pocketful/users': path.resolve(__dirname, './src/modules/users'),
        '@pocketful/customers-center': path.resolve(__dirname, './src/modules/customers-center'),
        '@pocketful/financial': path.resolve(__dirname, './src/modules/financial'),
        '@pocketful/types': path.resolve(__dirname, './src/types'),
        '@pocketful/tickets': path.resolve(__dirname, './src/modules/tickets'),
        '@pocketful/utils': path.resolve(__dirname, './src/modules/utils'),
        '@pocketful/email-subscribe-api': path.resolve(__dirname, './src/modules/email-subscribe-api'),
        '@pocketful/graphql': path.resolve(__dirname, './src/modules/graphql'),
        '@pocketful/settings': path.resolve(__dirname, './src/modules/settings'),
        '@pocketful/mobx-form': path.resolve(__dirname, './src/modules/mobx-form'),
        '@pocketful/esh-feature-flags': path.resolve(__dirname, './src/modules/esh-feature-flags'),
        '@pocketful/esh-cms': path.resolve(__dirname, './src/modules/esh-cms'),
        '@pocketful/lists': path.resolve(__dirname, './src/modules/lists'),
        '@pocketful/reports': path.resolve(__dirname, './src/modules/reports'),
        '@pocketful/esh-mobx-form': path.resolve(__dirname, './src/modules/esh-mobx-form'),
      },
    },
    server: {
      port: 3001,
      proxy: {
        '/api': {
          target: process.env.API_SERVER,
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
        '/email-subscribe-api': {
          target: process.env.EMAIL_SUBSCRIBE_API_SERVER,
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/email-subscribe-api/, ''),
        },
        '/serviceapi': {
          target: process.env.API_SERVER,
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/serviceapi/, ''),
        },
      },
    },
  })
}

import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import dts from 'vite-plugin-dts'
import eslintPlugin from '@rollup/plugin-eslint';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Vite 配置
export default defineConfig(({ mode }) => {
	const isProd = mode === 'production'

	return {
		plugins: [
			dts(),
			eslintPlugin({ fix: true })
		],
		build: {
			lib: {
				entry: 'src/index.ts',
				fileName: 'index',
				name: 'index'
			},
			watch: isProd
				? undefined
				: {
					buildDelay: 1000,
					clearScreen: true
				},
			target: 'es2020',
			minify: 'esbuild',
			sourcemap: false,
			rollupOptions: {
				input: resolve(__dirname, 'src', 'index.ts')
			},
			outDir: './lib'
		}
	}
})

import MillionLint from '@million/lint';
import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineConfig({
  plugins:  [/*MillionLint.vite(),*/   react(), TanStackRouterVite()],
  base: "./",
  build: {
		outDir: "dist",
	},
  server: {
		host: true,
		// watch: {
		// 	usePolling: true,
		// },
	},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
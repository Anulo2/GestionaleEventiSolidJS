// vite.config.js
import MillionLint from "file:///media/anulo2/3F1FB89F1DD3AEF3/Programmazione/Linguaggi/JS/GestionaleEventi/Frontend/node_modules/@million/lint/dist/compiler/index.mjs";
import path from "node:path";
import react from "file:///media/anulo2/3F1FB89F1DD3AEF3/Programmazione/Linguaggi/JS/GestionaleEventi/Frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///media/anulo2/3F1FB89F1DD3AEF3/Programmazione/Linguaggi/JS/GestionaleEventi/Frontend/node_modules/vite/dist/node/index.js";
import { TanStackRouterVite } from "file:///media/anulo2/3F1FB89F1DD3AEF3/Programmazione/Linguaggi/JS/GestionaleEventi/Frontend/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
var __vite_injected_original_dirname = "/media/anulo2/3F1FB89F1DD3AEF3/Programmazione/Linguaggi/JS/GestionaleEventi/Frontend";
var vite_config_default = defineConfig({
  plugins: [
    /*MillionLint.vite(),*/
    react(),
    TanStackRouterVite()
  ],
  base: "./",
  build: {
    outDir: "dist"
  },
  server: {
    host: true
    // watch: {
    // 	usePolling: true,
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbWVkaWEvYW51bG8yLzNGMUZCODlGMUREM0FFRjMvUHJvZ3JhbW1hemlvbmUvTGluZ3VhZ2dpL0pTL0dlc3Rpb25hbGVFdmVudGkvRnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tZWRpYS9hbnVsbzIvM0YxRkI4OUYxREQzQUVGMy9Qcm9ncmFtbWF6aW9uZS9MaW5ndWFnZ2kvSlMvR2VzdGlvbmFsZUV2ZW50aS9Gcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbWVkaWEvYW51bG8yLzNGMUZCODlGMUREM0FFRjMvUHJvZ3JhbW1hemlvbmUvTGluZ3VhZ2dpL0pTL0dlc3Rpb25hbGVFdmVudGkvRnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgTWlsbGlvbkxpbnQgZnJvbSAnQG1pbGxpb24vbGludCc7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IFRhblN0YWNrUm91dGVyVml0ZSB9IGZyb20gXCJAdGFuc3RhY2svcm91dGVyLXZpdGUtcGx1Z2luXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6ICBbLypNaWxsaW9uTGludC52aXRlKCksKi8gICByZWFjdCgpLCBUYW5TdGFja1JvdXRlclZpdGUoKV0sXG4gIGJhc2U6IFwiLi9cIixcbiAgYnVpbGQ6IHtcblx0XHRvdXREaXI6IFwiZGlzdFwiLFxuXHR9LFxuICBzZXJ2ZXI6IHtcblx0XHRob3N0OiB0cnVlLFxuXHRcdC8vIHdhdGNoOiB7XG5cdFx0Ly8gXHR1c2VQb2xsaW5nOiB0cnVlLFxuXHRcdC8vIH0sXG5cdH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIilcbiAgICB9XG4gIH1cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBOGEsT0FBTyxpQkFBaUI7QUFDdGMsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDBCQUEwQjtBQUpuQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFVO0FBQUE7QUFBQSxJQUEyQixNQUFNO0FBQUEsSUFBRyxtQkFBbUI7QUFBQSxFQUFDO0FBQUEsRUFDbEUsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxFQUNDLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlQO0FBQUEsRUFDQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

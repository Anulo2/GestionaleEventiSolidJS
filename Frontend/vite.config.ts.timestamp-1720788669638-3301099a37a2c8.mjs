// vite.config.ts
import { defineConfig } from "file:///K:/Programmazione/Linguaggi/JS/GestionaleEventi/Frontend/node_modules/vite/dist/node/index.js";
import react from "file:///K:/Programmazione/Linguaggi/JS/GestionaleEventi/Frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "node:path";
import { TanStackRouterVite } from "file:///K:/Programmazione/Linguaggi/JS/GestionaleEventi/Frontend/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var __vite_injected_original_dirname = "K:\\Programmazione\\Linguaggi\\JS\\GestionaleEventi\\Frontend";
var vite_config_default = defineConfig({
  base: "./",
  build: {
    outDir: "dist"
  },
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJLOlxcXFxQcm9ncmFtbWF6aW9uZVxcXFxMaW5ndWFnZ2lcXFxcSlNcXFxcR2VzdGlvbmFsZUV2ZW50aVxcXFxGcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSzpcXFxcUHJvZ3JhbW1hemlvbmVcXFxcTGluZ3VhZ2dpXFxcXEpTXFxcXEdlc3Rpb25hbGVFdmVudGlcXFxcRnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0s6L1Byb2dyYW1tYXppb25lL0xpbmd1YWdnaS9KUy9HZXN0aW9uYWxlRXZlbnRpL0Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JvdXRlci1wbHVnaW4vdml0ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0YmFzZTogXCIuL1wiLFxuXHRidWlsZDoge1xuXHRcdG91dERpcjogXCJkaXN0XCIsXG5cdH0sXG5cdHBsdWdpbnM6IFtUYW5TdGFja1JvdXRlclZpdGUoKSwgcmVhY3QoKV0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0XCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVyxTQUFTLG9CQUFvQjtBQUNuWSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsMEJBQTBCO0FBSG5DLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDdkMsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3JDO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

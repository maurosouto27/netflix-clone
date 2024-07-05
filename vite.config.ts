import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/.well-known/acme-challenge/": {
          target: "https://netflix-clone-alpha-black.vercel.app", // O el puerto que estés usando localmente
          bypass: (req) => {
            return req.url;
          },
        },
        // Configuración existente para la API de TMDB
        "/api": {
          target: process.env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              proxyReq.setHeader(
                "Authorization",
                `Bearer ${process.env.VITE_ACCESS_TOKEN}`
              );
            });
          },
        },
      },
    },
  });
};

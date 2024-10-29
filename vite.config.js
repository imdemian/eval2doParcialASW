import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    // eslint-disable-next-line no-undef
    port: process.env.PORT || 3000,
  },
});

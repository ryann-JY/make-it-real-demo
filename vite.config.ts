import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/make-it-real-demo/",
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FAQs/", // نام مخزن گیت‌هاب خود را در اینجا قرار دهید
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
// You should use `build.rollupOptions.output.manualChunks` function form when using this plugin. If the object form is used, the plugin won't have any effect.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ["lodash"],
          luxio: ["luxio"],
          react: ["react", "react-dom"],
          million: ["million"]
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// See https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths()],
    server: {
        open: "/examples/",
        host: "0.0.0.0"
    }
});

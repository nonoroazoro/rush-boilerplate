import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        target: "es2015",
        minify: true,
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "core",
            fileName: "index",
            formats: ["umd"]
        },
        rollupOptions: {
            output: {
                amd: {
                    id: "core"
                }
            }
        }
    }
});

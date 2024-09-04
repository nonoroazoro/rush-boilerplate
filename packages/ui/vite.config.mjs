import { defineConfig } from "vite";
import { resolve } from "path";
import copyFiles from "vite-plugin-copy-files";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const LOADER_EXTS = ["?used", "?raw"];

export default defineConfig({
    plugins: [
        copyFiles({
            include: [/\.(less|less\?.+|css|scss|svg|svg\?.+)$/],
            exclude: [/node_modules/],
            formatFilePath: (file) =>
            {
                for (const ext of LOADER_EXTS)
                {
                    if (file.endsWith(ext))
                    {
                        return `es/${file.substring(0, file.length - ext.length)}`;
                    }
                }
                return `es/${file}`;
            }
        }),
        cssInjectedByJsPlugin()
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    build: {
        target: "es2015",
        minify: true,
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "ui",
            fileName: "index",
            formats: ["es", "umd"]
        },
        rollupOptions: {
            output: {
                amd: {
                    id: "ui"
                }
            }
        }
    }
});

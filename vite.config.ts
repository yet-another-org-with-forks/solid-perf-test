// import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
  plugins: [
    //    devtools(),
    solidPlugin(),
    solidSvg({
      defaultAsComponent: true,
      svgo: {
        enabled: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
    sourcemap: true,
  },
});

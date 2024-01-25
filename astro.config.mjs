import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from "@astrojs/solid-js";
import postcssNested from 'postcss-nested';
import postcss from 'postcss';


// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), solidJs()],
  outDir: './dist',
  site: 'https://www.stars.kobilica.hr',
  vite: {
    plugins: [
      postcss({
        plugins: [
          postcssNested(),
          // other PostCSS plugins...
        ],
      }),
    ],
  },
});
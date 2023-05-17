import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

export default defineConfig(({ command }) => {
  return {
    build: {
      //  We only generate source maps if we are not building the release
      //  bundle. For dev/serve, sourcemaps are generated.
      sourcemap: command !== 'build'
    },
    plugins: [
      crx({
        manifest
      })
    ],
  };
});

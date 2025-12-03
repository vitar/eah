// NOTE: CDN import is for ease of local prototyping; production builds should bundle Aurelia to keep the app single-file.
import { Aurelia, StandardConfiguration } from 'https://cdn.jsdelivr.net/npm/aurelia@2.0.0-beta.11/dist/esm/index.dev.mjs';
import { App } from './app.js';

new Aurelia()
  .register(StandardConfiguration)
  .app({ host: document.querySelector('#app-host'), component: App })
  .start();

# Agent Guidance for `src`

- Use Aurelia 2 components (`.js` view-model + `.html` template) for UI logic. Keep the host HTML minimal (just bootstrapping and links to shared styles).
- Keep storage concerns in small helpers or clearly scoped methods; persist mutations to `localStorage` under the existing key rather than global variables.
- Preserve single-file deployability by avoiding runtime CDN dependencies in production artifacts; any CDN import in source should be considered a development aid and noted in comments.
- Prefer clear, side-effect-light methods for calculations (totals, drift, bands). Avoid try/catch around imports.
- Write semantically structured HTML with reusable utility classes; keep inline styles to a minimum.

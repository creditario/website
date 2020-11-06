const browserSync = require("browser-sync").create();

// You can change these configuration values:
const proxy = "http://localhost:5894";
const port = 5893;
const uiPort = 5895;

////////////////
// Browsersync
////////////////
browserSync.init({
  open: false,
  notify: false,
  proxy: proxy,
  port: port,
  files: "output/index.html",
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false,
  },
  reloadDelay: 0,
  injectChanges: false,
  ui: {
    port: uiPort,
  },
  snippetOptions: {
    rule: {
      match: /<\/head>/i,
      fn: function (snippet, match) {
        return snippet + match;
      },
    },
  },
});

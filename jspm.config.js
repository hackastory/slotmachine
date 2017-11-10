SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "slotmachine/": ""
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "slotmachine": {
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    },
    "npm:vue@2.2.6": {
      "main": "dist/vue.min.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "json": "github:systemjs/plugin-json@0.3.0",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.9",
    "vue": "npm:vue@2.2.6"
  },
  packages: {}
});

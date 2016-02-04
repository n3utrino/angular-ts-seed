System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.0-rc.2",
    "foundation": "npm:foundation-sites@6.1.2",
    "npm:foundation-sites@6.1.2": {
      "jquery": "npm:jquery@2.1.4",
      "what-input": "npm:what-input@1.1.4"
    }
  }
});

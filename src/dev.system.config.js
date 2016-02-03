System.config({
    baseURL: ".",
    defaultJSExtensions: true,
    transpiler: false,
    paths: {
        //modules starting with github:
        "github:*": "../jspm_packages/github/*",
        //module starts with app/ look on the server for "../src/app/"
        "app/": "../src/app/"
    },

    map: {
        //if i request 'angular' module in ES6 or typescript look for the following module
        "angular": "github:angular/bower-angular@1.5.0-rc.2"
    }
});

System.config({
  "paths": {
    "*": "*.js",
    "Wordsworth/*": "src/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "Font-Awesome": "github:FortAwesome/Font-Awesome@4.2.0",
    "angular": "github:angular/bower-angular@1.3.8",
    "angular-material": "github:angular/bower-material@0.6.1",
    "angular-resource": "npm:angular-resource@1.3.36",
    "angular-route": "github:angular/bower-angular-route@1.3.8",
    "hammer": "github:hammerjs/hammer.js@2.0.4",
    "socket.io-client": "node_modules/socket.io-client/socket.io",
    "github:angular/bower-angular-animate@1.3.8": {
      "angular": "github:angular/bower-angular@1.3.8"
    },
    "github:angular/bower-angular-aria@1.3.8": {
      "angular": "github:angular/bower-angular@1.3.8"
    },
    "github:angular/bower-angular-route@1.3.8": {
      "angular": "github:angular/bower-angular@1.3.8"
    },
    "github:angular/bower-material@0.6.1": {
      "angular": "github:angular/bower-angular@1.3.8",
      "angular-animate": "github:angular/bower-angular-animate@1.3.8",
      "angular-aria": "github:angular/bower-angular-aria@1.3.8",
      "css": "github:systemjs/plugin-css@0.1.0",
      "hammer": "github:hammerjs/hammer.js@2.0.4"
    }
  }
});


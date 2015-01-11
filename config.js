System.config({
  "paths": {
    "*": "*.js",
    "Wordsworth/*": "src/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.8",
    "angular-material": "github:angular/bower-material@0.6.1",
    "hammer": "github:hammerjs/hammer.js@2.0.4",
    "github:angular/bower-angular-animate@1.3.8": {
      "angular": "github:angular/bower-angular@1.3.8"
    },
    "github:angular/bower-angular-aria@1.3.8": {
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


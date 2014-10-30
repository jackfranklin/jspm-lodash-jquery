System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "npm:jquery": "npm:jquery@^2.1.1",
    "npm:lodash": "npm:lodash@^2.4.1",
    "npm:jquery@2.1.1": {},
    "npm:lodash@2.4.1": {}
  }
});

System.config({
  "versions": {
    "github:components/jquery": "2.1.1",
    "github:jspm/nodelibs": "0.0.5",
    "npm:jquery": "2.1.1",
    "npm:lodash": "2.4.1"
  }
});


# grunt-gmaps-css

> "Write Google Maps custom styles in familiar CSS syntax."

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-gmaps-css --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gmaps-css');
```

## The "gmaps_css" task

### Overview
In your project's Gruntfile, add a section named `gmaps_css` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  gmaps_css: {
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  },
})
```

### Usage Examples

The example below takes the stylesheet located in `gcss/toner.css` and outputs a Google-Maps-ready JavaScript file containing your custom style.

```js
grunt.initConfig({
  gmaps_css: {
    files: {
      'dest/toner.js': 'gcss/toner.css',
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

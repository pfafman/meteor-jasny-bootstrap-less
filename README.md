Jasny Bootstrap 3.1.3
=====================

[Jasny Bootstrap 3.1.3](http://jasny.github.io/bootstrap/) packaged for [Meteor](https://www.meteor.com) 0.9+ (no optional theme included)

Packaged by [Tim Pfafman](https://github.com/pfafman/meteor-bootstrap-3)


### Installation

You need to use mrt to install this since it is using less
and have to edit your `smart.json` file to do it

In smart.json add the following in the packages section
`````
"pfafman:jasny-bootstrap-less": {
  "git": "https://github.com/pfafman/meteor-bootstrap3-less.git",
  "branch": "master"
}
````

```
mrt add pfafman:jasny-bootstrap-less
```

Add an import for the less files in your main.less file
```

```

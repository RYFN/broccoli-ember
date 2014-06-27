Broccoli Ember
==============
Sample broccoli ember app, with compass compilation, qunit & autoreloading.
Still a work in progress!

Heavily borrows from:

- [Ember CLI](https://github.com/stefanpenner/ember-cli)
- [Broccoli Sample App](https://github.com/broccolijs/broccoli-sample-app)


Goals
-----
- Faster rebuilds & live reloads for development with broccoli
- Less steps to produce a build (as in xcode / eclipse build)
- Testable
- (eventually) One step build for a broccoli ember cordova project

Dependancies
------------
broccoli cli

    npm install -g broccoli-cli

bower

    npm install -g bower


Structure
---------
- **app** : ember application in Ember App Kit suggested format, using ES6 modules
- **public** : root html folder. Everything in here gets copied to the build directory.
- **tmp** : temp broccoli build files, used by broccoli serve
- **styles** : sass compass compilable scss files
- **vendor** : bower dependancies & magic glue for compiling es6 modules


Running
-------
`broccoli serve` will watch & serve your files
To get live reload working, install `Live Reload` 

    https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei 

It should 'just work'.


Testing
-------
Visit /tests to see qunit tests.
jshint tests are autogenerated and munged into a jshint.js file, which the tests/index.html file reads.


Building
--------

    rm -rf www && broccoli build www


TODO
----
- Don't quite understand the dependancy management in the brocfile, vendor files etc?
- Would be nice to include test folder for ES6 compilation
- Include ember-qunit
- Set broccoli env to production on broccoli build
- Include /config files similar to Ember App Kit
- testem for test running
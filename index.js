/**
 * Module dependencies
 */

var hyper = require('directiv-data-hyper');
var bind = require('directiv-data-hyper-bind');
var repeat = require('directiv-data-hyper-repeat');
var img = require('directiv-data-hyper-img');

var store = require('directiv-store-hyper');
var superagent = require('directiv-store-hyper-superagent');

exports = module.exports = function(opts) {
  opts = opts || {};
  var prefix = opts.prefix ? '-hyper' : '';
  return function(app) {
    app.use('data' + prefix + '-fetch', hyper);
    app.use('data' + prefix + '-bind', bind);
    app.use('data' + prefix + '-repeat', repeat);
    app.use('data' + prefix + '-img', img);
    app.use('data-t', function() {
      this.compile = function(input) {
        return input;
      };
      this.children = function(input) {
        return input;
      };
    });

    app.use('store-hyper', store);
    app.use('store-hyper-agent', superagent);
  };
};

exports.__package = 1;

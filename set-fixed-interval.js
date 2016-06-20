/*
 * setFixedInterval from https://github.com/lfsmoura/fixed-timeout by Leo Moura
 */

var setFixedInterval = function(fn, ms, options) {
  var last = new Date().getTime();
  var fixed = last + ms;
  var intervalatedFun;
  intervalatedFun = function() {
    var now = new Date().getTime();
    var delta = now - last;
    fn(delta);
    last = now;
    fixed += ms;
    now = new Date().getTime();
    var next = fixed - now;
    if (next <= 0) {
      var skipIntervals = 1 + parseInt((now - fixed) / ms);
      next = fixed + skipIntervals*ms - now;
    }
    clear_id = setTimeout(intervalatedFun, next);
  }.bind(this);
  var clear_id = setTimeout(intervalatedFun, fixed - new Date().getTime());

  return function cancelFixedInterval() {
    clearTimeout(clear_id);
  };
};

'use strict';

console.log('running...');

function fib(n) {
  var a = 0, b = 1, t;
  while (n-- > 0) {
    t = a;
    a = b;
    b += t;
  }
  return a;
}

function doHardWorkFor (cycles) {
  var start = new Date().getTime();

  fib(cycles);
}

function sum (set) {
  return set.reduce(function (t, n) { return t + n; }, 0);
}

function average (set) {
  return sum(set) / set.length;
}

var samples = [];
var Interval = 100;

var cancel = setFixedInterval(function () {
  samples.push(new Date().getTime());
  doHardWorkFor(2000000);
}, Interval);

setTimeout(function () {
  cancel();

  var diff = [];
  for(var i = 0; i < samples.length; i += 1) {
    if (i === 0) {
      continue;
    }

    diff.push(samples[i] - samples[i - 1]);
  }

  console.log(average(diff));
}, 10000);
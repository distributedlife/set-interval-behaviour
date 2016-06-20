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

var id = setInterval(function () {
  samples.push(new Date().getTime());
  doHardWorkFor(2000000);
}, Interval);

setTimeout(function () {
  clearInterval(id);

  var diff = [];
  for(var i = 0; i < samples.length; i += 1) {
    if (i === 0) {
      continue;
    }

    diff.push(samples[i] - samples[i - 1]);
  }

  console.log(average(diff));
}, 10000);
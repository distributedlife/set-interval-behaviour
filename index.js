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
  const start = new Date().getTime();

  fib(cycles);
}

function sum (set) {
  return set.reduce((t, n) => t + n, 0);
}

function average (set) {
  return sum(set) / set.length;
}

let samples = [];
const Interval = 100;

let id = setInterval(() => {
  samples.push(new Date().getTime());
  doHardWorkFor(2000000);
}, Interval);

setTimeout(() => {
  clearInterval(id);

  let diff = [];
  for(let i = 0; i < samples.length; i += 1) {
    if (i === 0) {
      continue;
    }

    diff.push(samples[i] - samples[i - 1]);
  }

  console.log(average(diff));
}, 10000);
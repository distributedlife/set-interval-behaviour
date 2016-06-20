# README

What is the average interval between setInterval callbacks.

It depends...

# Usage

~~~shell
node index.js
~~~

Or, in your browser:

~~~shell
open index.html
~~~

After 10 seconds it reports the result.

# Results

| Implementation | Result |
| -------------- | ------:|
| node 6.2.1 | 113.79 |
| node 5.11.1 | 114.58 |
| node 4.4.5 |112.83 |
| node 0.12.14 | 107.28|
| node 0.10.45 |106.51 |
| Chrome 51.0.2704.84 |100.02|
| Firefox 47.0 |101.87|
| Firefox 45.0.2 |103.36|
| Firefox 43.0.4 |99.97|
| Opera 38.0.2220.31 | 100.03 |
| Opera 37.0.2178.32 | 100.02 |
| Safari 9.1.1 |103.06|

It's interesting to note that the time between callbacks on node 4+ is roughly double the length of the callback. While in node 0.12 and 0.10 it's roughly equal to the length of the callback.

# Results (setFixedInterval)

I tried [fixed-setinterval](https://github.com/lfsmoura/fixed-timeout) by [Leo Moura](https://github.com/lfsmoura) to see if I can get more consistent results.

~~~shell
node set-fixed-interval.js

open set-fixed-interval.html
~~~

| Implementation | Result |
| -------------- | ------:|
| node 6.2.1 | 99.98 |
| Chrome 51.0.2704.84 |100.01|
| Firefox 47.0 |101.07|
| Opera 38.0.2220.31 | 100.03 |
| Safari 9.1.1 |103.21|

# Results (game-loop)

I found another attempt at a consistent interval by [Alex Bennett](https://github.com/timetocode/node-game-loop). For the browser version I had to replace setImmediate with a 0ms setTimeout as most browsers, at the time of writing, don't support setImmediate.

~~~shell
node game-loop.js

open game-loop.html
~~~

| Implementation | Result |
| -------------- | ------:|
| node 6.2.1 | 100.43 |
| Chrome 51.0.2704.84 |101.93|
| Firefox 47.0 |102.11|
| Opera 38.0.2220.31 | 102.04 |
| Safari 9.1.1 |101.77|
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
| Safari 9.1.1 |103.0625|
# lytics
Really simple analytics for Node.js

###Setup
1. Run `npm install --save lytics` to install.
2. Require lytics using this command
3. Use middleware returned by lytics

```
var express = require('express');
// Require lytics using this command
var lytics = require('lytics');

var app = express();

// Use middleware returned by lytics
app.use(lytics());
```

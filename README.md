### Todo list project ###

This project already deployed 

http://54.157.25.244

### deployment instructions ###

First, in the project src/constants directory edit URL.js 
change the URL to your own API server's URL
 ```js
export const GRAPHQL_URL = "http://54.157.25.244:8880/graphql";

export const API_URL = "http://54.157.25.244:8880/";
```
 
  
Then run command

```sh
npm install
npm run build
```

Builds the app for production to the build folder.
Copy the build folder to Nodejs and Express project.
Then use Nodejs and Express to deploy the project.

```js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(80);
```